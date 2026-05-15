import {Interiors} from './Interiors.js' 
import {Paints} from './Paints.js'
import {Technologies} from './Technologies.js'
import {Wheels} from './Wheels.js'
import {Orders, OrderButton, addOrderButtonListener} from "./Orders.js"


const render = async () => {
    const interiorsHTML = await Interiors()
    const paintsHTML = await Paints()
    const technologiesHTML = await Technologies()
    const wheelsHTML = await Wheels()
    const ordersHTML = await Orders()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__Paints options">
                <h2>Paints</h2>
                ${paintsHTML}
            </section>
            <section class="choices__Interiors options">
                <h2>Interiors</h2>
                ${interiorsHTML}
            </section>
            <section class="choices__Wheels options">
                <h2>Wheels</h2>
                ${wheelsHTML}
            </section>
            <section class="choices__Technologies options">
                <h2>Technologies</h2>
                ${technologiesHTML}
            </section>
        </article>

        <article class="order">
            ${OrderButton()}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${await Orders()}
        </article>
    `
    container.innerHTML = composedHTML
    addOrderButtonListener()
    
}

render()

document.addEventListener("orderSubmitted", () => {
    render()
})
document.addEventListener("click", (event) => {
  const { name, id } = event.target;
  if (name === "complete") {
    completeOrder(id);
  }
})

document.addEventListener("stateChanged", () => {
    render()
});