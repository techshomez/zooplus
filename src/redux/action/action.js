// Adding products to cart

export const addCart = (product) => {
    return {
        type: "ADDPRO",
        payload: product
    }
}

// Deleting cart products
export const deleteCart = (product) => {
    return {
        type: "DELPRO",
        payload: product
    }
}