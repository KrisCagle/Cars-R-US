import { setTechnologyChoice } from "./TransientState.js"

export const addTechnologyListener = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        const chosenOption = parseInt(changeEvent.target.value)
        setTechnologyChoice(chosenOption)
    }
}
document.addEventListener("change", addTechnologyListener)

export const Technologies = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const techs = await response.json()

    const techDropDown = techs.map((tech) => {
        return `<option value="${tech.id}">${tech.package}</option>`
    })

    return `
        <div>
            <select id="technology">
                <option value="0">Select a technology package...</option>
                ${techDropDown.join("")}
            </select>
        </div>
    `
}