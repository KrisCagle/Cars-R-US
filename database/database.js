const database = {
    orderBuilder: {

    },
    paints: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 965 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 500 },
        { id: 2, package: "Navigation Package", price: 710 },
        { id: 3, package: "Visibility Package", price: 965 },
        { id: 4, package: "Ultra Package", price: 965 }
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 405 },
        { id: 2, material: "Charcoal Fabric", price: 782 },
        { id: 3, material: "White Leather", price: 1470 },
        { id: 4, material: "Black Leather", price: 1997 }
    ],
    wheels: [
        { id: 1, style: "17-inch Pair Radial", price: 12.42 },
        { id: 2, style: "17-inch Pair Radial Black", price: 736.4 },
        { id: 3, style: "18-inch Pair Spoke Silver", price: 1258.9 },
        { id: 4, style: "18-inch Pair Spoke Black", price: 795.45 }
    ],
    customOrders: [
        {
            id: 1,
            interiorId: 3,
            wheelId: 2,
            technologyId: 1,
            paintId: 3
        }
    ]
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getCurrentOrder = () => {
    return database.orderBuilder
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const addCustomOrder = async () => {
    const newOrder = {...database.orderBuilder};
    await fetch(`https://localhost:5007/orders`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(NewOrder),
    });
    database.orderBuilder = {};
    document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getOrders = () => {
    return [...database.customOrders]
}

export const getWheels = () => {
    return [...database.wheels]
}

export const getInteriors = () => {
    return [...database.interiors]
}

export const getTechnologies = async () => {
  const res = await fetch("https://localhost:5007/Technology");
  const data = await res.json();
  return data;
};

export const getPaints = () => {
    return [...database.paints]
}
export const completeOrder = async (orderId) => {
  await fetch(`https://localhost:<port>/orders/${orderId}/fulfill`, {
    method: "POST",
  });
  document.dispatchEvent(new CustomEvent("stateChanged"));
};