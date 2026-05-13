import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = './src/assets/Carousel';

async function processImages() {
  const files = await fs.readdir(inputDir);
  for (const file of files) {
    if (!file.match(/\.(png|jpe?g)$/i)) continue;
    const inputPath = path.join(inputDir, file);
    const parsed = path.parse(file);
    const outputMain = path.join(inputDir, `${parsed.name}.avif`);
    const outputThumb = path.join(inputDir, `${parsed.name}-thumb.avif`);

    console.log(`Processing ${file}...`);
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let width = metadata.width;
    let height = metadata.height;

    let targetWidth, targetHeight;
    const currentRatio = width / height;
    const targetRatio = 9 / 16;

    if (currentRatio > targetRatio) {
      // Wider than 9:16
      targetHeight = height;
      targetWidth = Math.round(height * targetRatio);
    } else {
      // Taller than 9:16
      targetWidth = width;
      targetHeight = Math.round(width / targetRatio);
    }

    // Maximum height 2160px
    if (targetHeight > 2160) {
      targetHeight = 2160;
      targetWidth = Math.round(2160 * targetRatio);
    }

    // Generate main optimized avif
    await sharp(inputPath)
      .resize({
        width: targetWidth,
        height: targetHeight,
        fit: 'cover',
        position: 'center'
      })
      .avif({ quality: 80 })
      .toFile(outputMain);

    // Generate thumbnail avif (max height 500px)
    let thumbHeight = Math.min(targetHeight, 500);
    let thumbWidth = Math.round(thumbHeight * targetRatio);
    
    await sharp(inputPath)
      .resize({
        width: thumbWidth,
        height: thumbHeight,
        fit: 'cover',
        position: 'center'
      })
      .avif({ quality: 70 })
      .toFile(outputThumb);
      
    console.log(`Finished ${file}`);
  }
}

processImages().catch(console.error);
