const {argv}= require ('yargs');
const orders = require ('./orders');

const order = argv._[0]

if (order === 'new'){
    orders.newOrder(argv.orders)
    
}
else if (order === 'remove'){
    orders.removeOrder(argv.orders)
}
else if (order === 'list'){
    orders.listOrders()
}
else if(order === 'load'){
    orders.loadOrders(argv.orders)
}