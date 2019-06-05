export function totalCost (state) {
    return state.cart.reduce((sum, product) => {
        return (parseFloat(product.price) * product.qty) + sum
    }, 0)
}