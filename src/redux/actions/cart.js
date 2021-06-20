export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const remove = (id) => ({
    type: 'CLEAR_CART_ITEM',
    payload: id,
});