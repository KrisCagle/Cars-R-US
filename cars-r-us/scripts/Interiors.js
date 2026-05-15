import { setInteriorChoice } from "./TransientState.js"
export const addInteriorListener = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        const chosenOption = parseInt(changeEvent.target.value)
        setInteriorChoice(chosenOption)
    }
}
document.addEventListener("change", addInteriorListener)

export const Interiors = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    const interiorDropDown = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.seat}</option>`
    })

    return `
        <div>
            <select id="interior">
                <option value="0">Select an interior...</option>
                ${interiorDropDown.join("")}
            </select>
        </div>
    `
}