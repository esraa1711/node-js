const http = require("http");
let fs = require("fs");
let products = fs.readFileSync("products.json", "utf-8");
const server = http.createServer(function (req, res) {
  let urls = req.url.split("/");

  if (urls[1] == "home") {
    res.write("<h1>welcome to our APIs</h1>");
  } else if (urls[1] == "products" && urls[2] == undefined) {
    res.write(products);
  } else if (
    urls[1] == "products" &&
    urls[2] <= JSON.parse(products).length &&
    urls[2] > 0
  ) {
    let idNum = JSON.parse(products)[urls[2] - 1];
    res.write(JSON.stringify(idNum));
  } else {
    res.writeHead(404);
    res.write("<h1>Error 404<br>Page Not Found</h1>");
  }
  res.end();
});

server.listen(4000, function () {
  console.log("i listen in port 4000");
});