const images = [/*---IMAGES---*/]
const index = Math.round(Math.random() * (images.length - 1));
const imageData = images[index];
const extension = imageData.name.split(".")[1];

const image = document.createElement("img")
image.src = "data:image/"+extension+";base64, " + imageData.data
document.getElementById("root").appendChild(image)
