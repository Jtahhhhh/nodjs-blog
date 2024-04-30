const mg = require('mongoose')
const Schema = mg.Schema
const slug = require('mongoose-slug-generator')
var mongoose_delete = require('mongoose-delete');




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

//add plugin
mg.plugin(slug)
mg.plugin(mongoose_delete,{
    deletedAt: true
    ,overrideMethods: 'all'
})
module.exports = mg.model('courses',course)
