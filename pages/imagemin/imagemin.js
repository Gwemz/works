const imagemin = require('imagemin');
const PNGImages = 'assets/images/*.png';
const JPEGImages = 'assets/images/*.jpg';
const output = 'build/images';

const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

// 压缩JPG图片
const optimiseJPEGImages = () =>
  imagemin([JPEGImages], output, {
    plugins: [
      imageminMozjpeg({
        quality: 70,
      }),
    ]
  });

// 压缩PNG图片
const optimisePNGImages = () =>
imagemin([PNGImages], output, {
    plugins: [
    imageminPngquant({ quality: '65-80' })
    ],
});

// PNG格式转为webp格式
const convertPNGToWebp = () =>
  imagemin([PNGImages], output, {
    use: [
      imageminWebp({
        quality: 85,
      }),
    ]
  });

// jpg格式转为webp格式  
const convertJPGToWebp = () =>
  imagemin([JPEGImages], output, {
    use: [
      imageminWebp({
        quality: 75,
      }),
    ]
  });

optimiseJPEGImages()
  .then(() => optimisePNGImages())
  .then(() => convertPNGToWebp())
  .then(() => convertJPGToWebp())
  .catch(error => console.log(error));