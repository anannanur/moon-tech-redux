import { actionType } from "../actionType/actionType"

export const addToCart = (product) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: product,
    }
}