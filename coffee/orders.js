const fs = require('fs')

const newOrder = (order) => {
    const allOrders = loadOrders()
    allOrders.push({
        Orders: order
    })
    saveOrder(allOrders)
}
const saveOrder =(order)=>{
    const orderJSON = JSON.stringify(order);
    fs.writeFileSync('orders.json', orderJSON)
}

const loadOrders = () => {
    try {
        const dataBuffer = fs.readFileSync('orders.json');
        return JSON.parse(dataBuffer)
    } catch (e) {
        return [];
    }
}

const listOrders = () => {
    const allOrders = loadOrders()

    allOrders.map((order) => {
        console.log(order.Orders)
    })
}

const removeOrder=(order)=>{
    const allOrders = loadOrders()

    const ordersKeeping = allOrders.filter((note)=>
{
     return note.Orders !== order
} )

saveOrder(ordersKeeping);
}

module.exports ={newOrder, saveOrder, removeOrder, listOrders, loadOrders}