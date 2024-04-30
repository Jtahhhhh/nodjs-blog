const mongoose = require('mongoose')
 
function  connect(){
    mongoose
    .connect('mongodb://127.0.0.1:27017/f8_product_dev',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch (error => console.log("fail", error));
    
}


module.exports = { connect }