const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const multer = require('multer');
const util = require('util');
const axios = require('axios');  // Import Axios
const FormData = require('form-data');  // Import form-data

// Cấu hình multer để lưu trữ file upload
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

// Chuyển đổi exec thành một hàm trả về promise để sử dụng async/await
const execPromise = util.promisify(exec);

class ToToController {
    //[GET] /predict
    predict(req, res) {
        res.render('toto/predict');
    }

    //[POST] /predicting
    async predicting(req, res, next) {
        const filePath = path.join(__dirname, '../../../uploads', req.file.filename);
        console.log(`File uploaded to: ${filePath}`);

        try {
            // Đọc file ảnh từ đường dẫn đã tải lên
            const file = fs.createReadStream(filePath);

            // Sử dụng form-data từ Node.js (form-data package)
            const formData = new FormData();
            formData.append('image', file);

            // Gửi ảnh tới Flask API để dự đoán và nhận lại hình ảnh đã dự đoán
            const response = await axios.post('http://127.0.0.1:9999/totoPredict', formData, {
                headers: {
                    ...formData.getHeaders(),  // Use formData from the 'form-data' package
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

module.exports = new ToToController();
module.exports.upload = upload;
