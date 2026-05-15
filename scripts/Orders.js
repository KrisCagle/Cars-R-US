import { placeOrder } from "./TransientState.js"

export const OrderButton = () => {
    return `<button id="placeOrderBtn">Place Car Order</button>`
}

export const addOrderButtonListener = () => {
    document.querySelector("#placeOrderBtn").addEventListener("click", () => {
        placeOrder()
    })
}

// Add this event listener for the complete button
document.addEventListener("click", (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
        completeOrder(id);
    }
});

export const completeOrder = async (orderId) => {
    await fetch(`http://localhost:5007/orders/${orderId}/fulfill`, {
        method: "POST",
    });
    document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:5007/orders")
    const orders = await fetchResponse.json()

    let ordersHTML = orders.map((order) => {
        return `<section class="order">
            ${order.paint.color} car with
            ${order.wheel.style} wheels,
            ${order.interior.material} interior,
            and the ${order.technology.package}
            for a total cost of
            ${order.totalCost.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            <input type="button" name="complete" id="${order.id}" value="Complete">
        </section>`;
    })

    return ordersHTML.join("")
}