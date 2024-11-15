const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

module.exports = {
    multipleMongooseToObject: (mongooseArray) => {
        if (Array.isArray(mongooseArray)) {
            return mongooseArray.map(mongoose => mongoose.toObject());
        }
        // Trả về một mảng rỗng hoặc giá trị mặc định tùy thuộc vào trường hợp của bạn
        return [];
    },
    mongooseToObject: (mongoose) => mongoose ? mongoose.toObject() : mongoose
};
