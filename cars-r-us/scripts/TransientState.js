const transientState = {
  wheelId: 0,
  technologyId: 0,
  paintColorId: 0,
  interiorId: 0,
}

export const setWheelChoice = (wheelId) => {
    transientState.wheelId = wheelId
}
export const setTechnologyChoice = (technologyId) => {
    transientState.technologyId = technologyId
}
export const setPaintChoice = (paintColorId) => {
    transientState.paintColorId = paintColorId
}
export const setInteriorChoice = (interiorId) => {
    transientState.interiorId = interiorId
}
export const getOrderChoice = () => {
    return transientState
}
export const placeOrder = async () => {
   
   const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)
    const customEvent = new CustomEvent("orderSubmitted")
    document.dispatchEvent(customEvent)
}