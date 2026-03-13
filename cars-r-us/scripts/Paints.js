import { setPaintChoice } from "./TransientState.js"
export const addPaintListener = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        const chosenOption = parseInt(changeEvent.target.value)
        setPaintChoice(chosenOption)
    }
}

document.addEventListener("change", addPaintListener)
export const Paints = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paints = await response.json()

    const paintDropDown = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    return `
        <div>
            <select id="paint">
                <option value="0">Select a paint color...</option>
                ${paintDropDown.join("")}
            </select>
        </div>
    `
}