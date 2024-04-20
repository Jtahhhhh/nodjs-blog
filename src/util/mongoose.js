module.exports ={
    mutipleMongooseToObject: (mongooseArray) => mongooseArray.map(mongooseArray=>mongooseArray.toObject()),
    mongooseToObject: (mongoose) => mongoose? mongoose.toObject(): mongoose

};