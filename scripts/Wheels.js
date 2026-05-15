import { setWheelChoice } from "./TransientState.js"

export const addWheelListener = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        const chosenOption = parseInt(changeEvent.target.value)
        setWheelChoice(chosenOption)
    }
}
document.addEventListener("change", addWheelListener)

export const getWheels = async () => {
    const response = await fetch("http://localhost:5007/Wheels")
    const wheels = await response.json()
    return wheels;
}

const wheels = await getWheels();

export const Wheels = () => {
    const wheelDropDown = wheels.map((wheel) => {
        return `<option value="${wheel.id}">${wheel.style}</option>`  // Changed from wheel.size to wheel.style
    })

    return `
        <div>
            <select id="wheel">
                <option value="0">Select a set of wheels...</option>
                ${wheelDropDown.join("")}
            </select>
        </div>
    `
}