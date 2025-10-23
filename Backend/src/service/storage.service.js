const Imagekit = require('imagekit');
const { default: mongoose } = require('mongoose');

const imagekit = new Imagekit({
    publicKey: process.env.IMAGE_PUBLIC_KEY,
    privateKey: process.env.IMAGE_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_URL_ENDPOINT
});

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer,
            fileName: new mongoose.Types.ObjectId().toString(),
            folder:"cohort-audio",
        }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        }
        )
    });
}
module.exports = uploadFile;