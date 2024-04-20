const mg = require('mongoose')
const Schema = mg.Schema

const course = new Schema({
    id: {type:String, default:'' },
    tiltle: String,
    describtion: String,
    thumbnail: String,
    createAt: {type: Date, default: Date.now},
    updateAt: {type:Date, default:Date.now}
})

module.exports = mg.model('courses',course)
