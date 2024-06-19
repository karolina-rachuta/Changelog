import prisma from "../db";

export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            products: true
        }
    });

    res.json({data: user.products});
}

export const getProduct = async (req, res) => {
    const id = req.params.id;
    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        }
    });

    if (!product) {
        res.status(404).json({error: 'Product not found'})
    }

    res.json({data: product});
};

export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })
    res.status(201).json({data: product});
}

export const deleteProduct = async (req, rest) => {
    const deletedProduct =  await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        }
    });
    rest.status(200).json({data: deletedProduct});
}

export const updateProduct = async (req, res) => {
    const updatedProduct = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
        },
        data: {
            name: req.body.name
        }
    });
    res.status(200).json({data: updatedProduct});
};