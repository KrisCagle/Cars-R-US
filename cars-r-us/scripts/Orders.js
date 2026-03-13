import { placeOrder } from "./TransientState.js"

export const OrderButton = () => {
    return `<button id="placeOrderBtn">Place Car Order</button>`
}

export const addOrderButtonListener = () => {
    document.querySelector("#placeOrderBtn").addEventListener("click", () => {
        placeOrder()
    })
}
export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=wheel&_expand=technology&_expand=paintColor&_expand=interior")
    const orders = await fetchResponse.json()

    let ordersHTML = orders.map((order) => {
        const ordersPrice = order.wheel.price + order.interior.price + order.technology.price + order.paintColor.price

        return `<div>Order #${order.id} - 
            ${order.paintColor.color} car with    
            ${order.wheel.size}, 
            ${order.interior.seat}, and the 
            ${order.technology.package} 
            for a total of $${ordersPrice}
        </div>`
    })

    return ordersHTML.join("")
}