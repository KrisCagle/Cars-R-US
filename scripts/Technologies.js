import { setTechnologyChoice } from "./TransientState.js"

export const addTechnologyListener = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        const chosenOption = parseInt(changeEvent.target.value)
        setTechnologyChoice(chosenOption)
    }
}
document.addEventListener("change", addTechnologyListener)

export const getTechnologies = async () => {
    const res = await fetch("http://localhost:5007/Technology");
    const data = await res.json();
    return data;
};

const techs = await getTechnologies();

export const Technologies = () => {
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