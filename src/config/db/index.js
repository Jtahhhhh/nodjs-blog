const mg = require('mongoose')
 
async function  connect(){
    try {
        await mg.connect('mongodb://127.0.0.1:27017/f8_product_dev',{  
            useNewUrlParser: true,
            useUnifiedTopology: true,
    
        });
        console.log("success")
    } catch (error) {
        console.log("fail", error)
    }
    
}

module.exports = { connect }