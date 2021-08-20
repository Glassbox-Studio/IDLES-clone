/* Tops SlideShoe */
let topImage = document.getElementById("tops");
let currentPos_tops = 0;
let topImages = [
  "/images/tops/top1.webp",
  "/images/tops/top2.webp",
  "/images/tops/top3.webp",
  "/images/tops/top4.webp",
  "/images/tops/top5.png",
];

function topSlide() {
  if (++currentPos_tops >= topImages.length) currentPos_tops = 0;

  topImage.src = topImages[currentPos_tops];
}

setInterval(topSlide, 900);

/* Hats SlideShow */
let hatImage = document.getElementById("hats");
let currentPos_hats = 0;
let hatImages = [
  "/images/hats/hat1.webp",
  "/images/hats/hat2.webp",
  "/images/hats/hat3.webp",
  "/images/hats/hat4.webp",
];

function hatSlide() {
  if (++currentPos_hats >= hatImages.length) currentPos_hats = 0;

  hatImage.src = hatImages[currentPos_hats];
}

setInterval(hatSlide, 1500);

/* Bags SlideShow */
let bagImage = document.getElementById("bags");
let currentPos_bags = 0;
let bagImages = [
  "/images/bags/bag1.webp",
  "/images/bags/bag2.webp",
  "/images/bags/bag3.webp",
  "/images/bags/bag4.webp",
];

function bagSlide() {
  if (++currentPos_bags >= bagImages.length) currentPos_bags = 0;

  bagImage.src = bagImages[currentPos_bags];
}

setInterval(bagSlide, 1000);

/* Accessories SlideShow */
let accImage = document.getElementById("accs");
let currentPos_accs = 0;
let accImages = [
  "/images/acc/acc1.webp",
  "/images/acc/acc2.webp",
  "/images/acc/acc3.webp",
  "/images/acc/acc4.webp",
  "/images/acc/acc5.webp",
];

function accSlide() {
  if (++currentPos_accs >= accImages.length) currentPos_accs = 0;

  accImage.src = accImages[currentPos_accs];
}

setInterval(accSlide, 700);
