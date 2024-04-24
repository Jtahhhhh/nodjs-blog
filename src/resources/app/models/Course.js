const mg = require('mongoose')
const Schema = mg.Schema

const course = new Schema({
    name: {type: String, require:true,},
    img: String,
    vid: {type: String, require:true,},
    slug: String,
    describe: String
},{
    timestamps:true
}
)



module.exports = mg.model('courses',course)
