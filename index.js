var fs = require('fs');

function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

const files = fs.readdirSync("./images");

const images = [];

for (const file of files) {
    const base64 = base64_encode("./images/" + file);
    images.push({ name: file, data: base64})
}

const images_array = JSON.stringify(images, null, 4)
let build_src = fs.readFileSync("./build-template.js").toString('utf8');
build_src = build_src.replace("[/*---IMAGES---*/]", images_array);

fs.writeFileSync("./build.js", build_src);