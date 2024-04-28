const mg = require('mongoose')
const Schema = mg.Schema

const me = new Schema({
    name: {type: String, require:true,},
    img: String,
},{
    timestamps:true
}
)

module.exports = mg.model('user',me)