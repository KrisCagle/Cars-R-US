import { setInteriorChoice } from "./TransientState.js"
export const addInteriorListener = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        const chosenOption = parseInt(changeEvent.target.value)
        setInteriorChoice(chosenOption)
    }
}
document.addEventListener("change", addInteriorListener)

export const getInteriors = async () => {
    const response = await fetch("http://localhost:5007/Interior")
    const interiors = await response.json()
    return interiors;
}

const interiors = await getInteriors();

export const Interiors = async () => {
    const interiorDropDown = interiors.map((interior) => {
        return `<option value="${interior.id}">${interior.material}</option>`  // Changed from interior.seat to interior.material
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