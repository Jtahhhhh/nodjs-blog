const mg = require('mongoose')
const Schema = mg.Schema
const slug = require('mongoose-slug-generator')

mg.plugin(slug)

const course = new Schema({
    name: {type: String, require:true,},
    img: String,
    vid: {type: String, require:true,},
    level: String,
    time:String,
    slug: {type:String, slug:'name',unique: true},
    describe: String
},{
    timestamps:true
}
)



module.exports = mg.model('courses',course)
