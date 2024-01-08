import qr from "qr-image";
import fs from "fs";


 

const url="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/38126546#notes"
var qr_svg=qr.image(url);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));