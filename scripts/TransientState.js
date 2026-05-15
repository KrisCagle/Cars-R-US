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
export const placeOrder = () => {
    // Check that all selections are made FIRST
    if (transientState.wheelId === 0) {
        alert("Please select wheels");
        return;
    }
    if (transientState.technologyId === 0) {
        alert("Please select technology");
        return;
    }
    if (transientState.paintColorId === 0) {
        alert("Please select a paint color");
        return;
    }
    if (transientState.interiorId === 0) {
        alert("Please select an interior");
        return;
    }
    
    const currentOrder = { 
        wheelId: transientState.wheelId,
        technologyId: transientState.technologyId,
        paintId: transientState.paintColorId,
        interiorId: transientState.interiorId
    };
    
    // POST the order
    fetch("http://localhost:5007/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentOrder)
    })
    .then(() => {
        // Reset the state
        transientState.wheelId = 0;
        transientState.technologyId = 0;
        transientState.paintColorId = 0;
        transientState.interiorId = 0;
        
        document.dispatchEvent(new CustomEvent("orderSubmitted"));
    });
}