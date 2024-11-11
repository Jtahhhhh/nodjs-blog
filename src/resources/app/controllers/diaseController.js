const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadPath = path.join(__dirname, '../../../uploads');
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

class DiaseController {
    //[GET] /predict
    predict(req, res) {
        res.render('diase/predict');
    }

    //[POST] /predicting
    async predicting(req, res, next) {
        const filePath = path.join(__dirname, '../../../uploads', req.file.filename);
        console.log(`File uploaded to: ${filePath}`);

        try {
            // Đọc file ảnh từ đường dẫn đã tải lên
            const file = fs.createReadStream(filePath);

            // Sử dụng form-data từ Node.js
            const formData = new FormData();
            formData.append('file', file);

            // Gửi ảnh tới Flask API để dự đoán và nhận lại hình ảnh đã dự đoán
            const response = await axios.post('http://127.0.0.1:9999/leafPredict', formData, {
                headers: {
                    ...formData.getHeaders(),
                },
                responseType: 'arraybuffer'  // Để nhận dữ liệu hình ảnh dưới dạng binary
            });

            // Đặt header trả về là hình ảnh
            res.set('Content-Type', 'image/jpeg');
            res.send(response.data);  // Trả về dữ liệu hình ảnh

        } catch (error) {
            console.error('Error while sending image to Flask API:', error);
            return res.status(500).json({ error: 'Có lỗi xảy ra trong quá trình dự đoán' });
        }
    }
}

module.exports = new DiaseController();
module.exports.upload = upload;
