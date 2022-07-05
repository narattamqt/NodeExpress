var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
var moveToSeg = path.createSVGPathSegMovetoRel(10, 10);
var lineToSeg = path.createSVGPathSegLinetoRel(100, 100);
path.pathSegList.appendItem(moveToSeg);
path.pathSegList.appendItem(lineToSeg);
console.log(path.getAttribute('d')); // m 10 10 l 100 100
moveToSeg.x += 200;
moveToSeg.y += 200;
console.log(path.getAttribute('d')); // m 210 210 l 100 100