$(document).ready(function() {
  var smallImg = document.getElementById("smallImage");
  var smallResults;
  Tesseract.recognize(smallImg)
    .then(function(result) {
      smallResults = result;
      $("#smallResult").append(smallResults.text);
    });

  var bigImg = document.getElementById("bigImage");
  var image_overlay = document.getElementById('image-overlay');
  image_overlay.width = bigImg.naturalWidth;
  image_overlay.height = bigImg.naturalHeight;
  var ioctx = image_overlay.getContext('2d');

  var icCanvas = document.getElementById('imageChunks');
  icCanvas.width = 1026;
  icCanvas.height = 400;
  var icCctx = icCanvas.getContext('2d');

  var bigResults;

  // magic numbers
var name1Origin = new SneakyPoint(214, 173)
var name2Origin = new SneakyPoint(876, 173)
var name3Origin = new SneakyPoint(1438, 173)

var resultHeaderRect = new SneakyRect(580, 50, 763, 51);
var squadPlacementRect = new SneakyRect(602, 122, 196, 41);
var squadKillsRect = new SneakyRect(1122, 122, 184, 41);

var allNamesRect = new SneakyRect(214, 173, 1090, 37);

var nameSize = new SneakySize(264, 37)
var name1Rect = new SneakyRect(name1Origin.x, name1Origin.y, nameSize.w, nameSize.h);
var name1RectDst = new SneakyRect(0, 0, nameSize.w, nameSize.h);
var name2Rect = new SneakyRect(name2Origin.x, name2Origin.y, nameSize.w, nameSize.h);
var name2RectDst = new SneakyRect(nameSize.w, 0, nameSize.w, nameSize.h);
var name3Rect = new SneakyRect(name3Origin.x, name3Origin.y, nameSize.w, nameSize.h);
var name3RectDst = new SneakyRect(nameSize.w*2, 0, nameSize.w, nameSize.h);

var killsSize = new SneakySize(77, 44);
var damageSize = new SneakySize(136, 44);
var survivedSize = new SneakySize(50, 44);
var reviveSize = new SneakySize(50, 44);
var respawnSize = new SneakySize(50, 44);

var killsY = 650;
var damageY = 723;
var survivedY = 796;
var reviveY = 869;
var respawnY = 942;

var stats1x = 136
var killsOrigin1 = new SneakyPoint(stats1x, killsY);
var damageOrigin1 = new SneakyPoint(stats1x, damageY);
var survivedOrigin1 = new SneakyPoint(stats1x, survivedY);
var reviveOrigin1 = new SneakyPoint(stats1x, reviveY);
var respawnOrigin1 = new SneakyPoint(stats1x, respawnY);

var stats2x = 760
var killsOrigin2 = new SneakyPoint(stats2x, killsY);
var damageOrigin2 = new SneakyPoint(stats2x, damageY);
var survivedOrigin2 = new SneakyPoint(stats2x, survivedY);
var reviveOrigin2 = new SneakyPoint(stats2x, reviveY);
var respawnOrigin2 = new SneakyPoint(stats2x, respawnY);

var stats3x = 1386
var killsOrigin3 = new SneakyPoint(stats3x, killsY);
var damageOrigin3 = new SneakyPoint(stats3x, damageY);
var survivedOrigin3 = new SneakyPoint(stats3x, survivedY);
var reviveOrigin3 = new SneakyPoint(stats3x, reviveY);
var respawnOrigin3 = new SneakyPoint(stats3x, respawnY);

var killsRect1 = new SneakyRect(killsOrigin1.x, killsOrigin1.y, killsSize.w, killsSize.h);
var damageRect1 = new SneakyRect(damageOrigin1.x, damageOrigin1.y, damageSize.w, damageSize.h);
var survivedRect1 = new SneakyRect(survivedOrigin1.x, survivedOrigin1.y, survivedSize.w, survivedSize.h);
var reviveRect1 = new SneakyRect(reviveOrigin1.x, reviveOrigin1.y, reviveSize.w, reviveSize.h);
var respawnRect1 = new SneakyRect(respawnOrigin1.x, respawnOrigin1.y, respawnSize.w, respawnSize.h);

var killsRect2 = new SneakyRect(killsOrigin2.x, killsOrigin2.y, killsSize.w, killsSize.h);
var damageRect2 = new SneakyRect(damageOrigin2.x, damageOrigin2.y, damageSize.w, damageSize.h);
var survivedRect2 = new SneakyRect(survivedOrigin2.x, survivedOrigin2.y, survivedSize.w, survivedSize.h);
var reviveRect2 = new SneakyRect(reviveOrigin2.x, reviveOrigin2.y, reviveSize.w, reviveSize.h);
var respawnRect2 = new SneakyRect(respawnOrigin2.x, respawnOrigin2.y, respawnSize.w, respawnSize.h);

var killsRect3 = new SneakyRect(killsOrigin3.x, killsOrigin3.y, killsSize.w, killsSize.h);
var damageRect3 = new SneakyRect(damageOrigin3.x, damageOrigin3.y, damageSize.w, damageSize.h);
var survivedRect3 = new SneakyRect(survivedOrigin3.x, survivedOrigin3.y, survivedSize.w, survivedSize.h);
var reviveRect3 = new SneakyRect(reviveOrigin3.x, reviveOrigin3.y, reviveSize.w, reviveSize.h);
var respawnRect3 = new SneakyRect(respawnOrigin3.x, respawnOrigin3.y, respawnSize.w, respawnSize.h);
  //header
  // icCctx.drawImage(bigImg, 580, 50, 763, 51, 0, 0, 763, 51)

  // placement and squad kills
  // icCctx.drawImage(bigImg, 602, 122, 196, 41, 0, 51, 196, 41)
  // icCctx.drawImage(bigImg, 1122, 122, 184, 41, 196, 51, 184, 41)

  // var header = icCctx.getImageData(0, 0, 763, 51)

  // var placement = icCctx.getImageData(0, 51, 196, 41)
  // var squadKills = icCctx.getImageData(196, 51, 184, 41)

// I'd like to put this somewhere else but javascript is so fuckin gross lmao 
CanvasRenderingContext2D.prototype.snkDrawImage = function (srcImg, srcRect, dstRect) {
    this.drawImage(srcImg, srcRect.x, srcRect.y, srcRect.w, srcRect.h, dstRect.x, dstRect.y, dstRect.w, dstRect.h)
}

CanvasRenderingContext2D.prototype.snkGetImageData = function (srcRect) {
	return this.getImageData(srcRect.x, srcRect.y, srcRect.w, srcRect.h)
}

CanvasRenderingContext2D.prototype.snkPutImageData = function (imgData, dstPoint) {
	this.putImageData(imgData, dstPoint.x, dstPoint.y)
}

  // names
  icCctx.snkDrawImage(bigImg, name1Rect, name1RectDst);
  icCctx.snkDrawImage(bigImg, name2Rect, name2RectDst);
  icCctx.snkPutImageData(brightOnly(icCctx.snkGetImageData(name2RectDst)), name2RectDst.point);
  icCctx.snkDrawImage(bigImg, name3Rect, name3RectDst);
  icCctx.snkPutImageData(brightOnly(icCctx.snkGetImageData(name3RectDst)), name3RectDst.point);

  // stats 1
  icCctx.drawImage(bigImg, 136, 650, 77, 44, 0, 37, 77, 44);
  icCctx.drawImage(bigImg, 136, 723, 100, 44, 0, 37 + 44, 100, 44);
  icCctx.drawImage(bigImg, 136, 796, 136, 44, 0, 37 + 44 * 2, 136, 44);
  icCctx.drawImage(bigImg, 136, 869, 50, 44, 0, 37 + 44 * 3, 50, 44);
  icCctx.putImageData(brightOnly(icCctx.getImageData(0, 37 + 44 * 3, 50, 44)), 0, 37 + 44 * 3);
  icCctx.drawImage(bigImg, 136, 942, 50, 44, 0, 37 + 44 * 4, 50, 44);
  icCctx.putImageData(brightOnly(icCctx.getImageData(0, 37 + 44 * 4, 50, 44)), 0, 37 + 44 * 4);
  var stats1name = icCctx.getImageData(0, 0, 264, 37);
  var stats1Kills = icCctx.getImageData(0, 37, 77, 44);
  var stats1Damage = icCctx.getImageData(0, 37 + 44, 100, 44);
  var stats1Survived = icCctx.getImageData(0, 37 + 44 * 2, 136, 44);
  var stats1Revive = icCctx.getImageData(0, 37 + 44 * 3, 50, 44);
  var stats1Respawn = icCctx.getImageData(0, 37 + 44 * 4, 50, 44);
  Tesseract.recognize(stats1name)
    .then(function(result) {
      $("#name1").append(result.text);
    });
  Tesseract.recognize(stats1Kills)
    .then(function(result) {
      $("#kills1").append(result.text);
    });
  Tesseract.recognize(stats1Damage)
    .then(function(result) {
      $("#damage1").append(result.text);
    });
  Tesseract.recognize(stats1Survived)
    .then(function(result) {
      $("#survived1").append(result.text);
    });
  Tesseract.recognize(stats1Revive)
    .then(function(result) {
      $("#revives1").append(result.text);
    });
  Tesseract.recognize(stats1Respawn)
    .then(function(result) {
      $("#respawn1").append(result.text);
    });

  // // stats 2
  stats2x = 760
  icCctx.drawImage(bigImg, stats2x, 650, 77, 44, 264, 37, 77, 44);
  icCctx.putImageData(brightOnly(icCctx.getImageData(264, 37, 77, 44)), 264, 37);
  icCctx.drawImage(bigImg, stats2x, 723, 100, 44, 264, 37 + 44, 100, 44);
  icCctx.drawImage(bigImg, stats2x, 796, 136, 44, 264, 37 + 44 * 2, 136 * 2, 44 * 2);
  icCctx.putImageData(brightOnly(icCctx.getImageData(264, 37 + 44 * 2, 136 * 2, 44 * 2)), 264, 37 + 44 * 2);
  // icCctx.drawImage(bigImg, stats2x, 869, 136, 44, 264, 37+44*3, 136, 44);
  // icCctx.drawImage(bigImg, stats2x, 942, 136, 44, 264, 37+44*4, 136, 44);
  // icCctx.putImageData(brightOnly(icCctx.getImageData(264, 37+44*4, 136, 44)), 264, 37+44*4);
  var stats2name = icCctx.getImageData(264, 0, 264, 37);
  var stats2Kills = icCctx.getImageData(264, 37, 77, 44);
  var stats2Damage = icCctx.getImageData(264, 37 + 44, 100, 44);
  var stats2Survived = icCctx.getImageData(264, 37 + 44 * 2, 136 * 2, 44 * 2);
  var stats2Revive = icCctx.getImageData(264, 37 + 44 * 3, 136, 44);
  var stats2Respawn = icCctx.getImageData(264, 37 + 44 * 4, 136, 44);
  Tesseract.recognize(stats2name)
    .then(function(result) {
      $("#name2").append(result.text);
    });
  Tesseract.recognize(stats2Kills)
    .then(function(result) {
      $("#kills2").append(result.text);
    });
  Tesseract.recognize(stats2Damage)
    .then(function(result) {
      $("#damage2").append(result.text);
    });
  Tesseract.recognize(stats2Survived)
    .then(function(result) {
      $("#survived2").append(result.text);
    });
  Tesseract.recognize(stats2Revive)
    .then(function(result) {
      $("#revives2").append(result.text);
    });
  Tesseract.recognize(stats2Respawn)
    .then(function(result) {
      $("#respawn2").append(result.text);
    });

  // // stats 3
  stats3x = 1386
  icCctx.drawImage(bigImg, stats3x, 650, 77, 44, 264 * 2, 37, 77, 44);
  icCctx.drawImage(bigImg, stats3x, 723, 100, 44, 264 * 2, 37 + 44, 100, 44);
  icCctx.drawImage(bigImg, stats3x, 796, 136, 44, 264 * 2, 37 + 44 * 2, 136, 44);
  icCctx.drawImage(bigImg, stats3x, 869, 136, 44, 264 * 2, 37 + 44 * 3, 136, 44);
  icCctx.drawImage(bigImg, stats3x, 942, 136, 44, 264 * 2, 37 + 44 * 4, 136 * 2, 44 * 2);
  var stats3name = icCctx.getImageData(264 * 2, 0, 264, 37);
  var stats3Kills = icCctx.getImageData(264 * 2, 37, 77, 44);
  var stats3Damage = icCctx.getImageData(264 * 2, 37 + 44, 100, 44);
  var stats3Survived = icCctx.getImageData(264 * 2, 37 + 44 * 2, 136, 44);
  var stats3Revive = icCctx.getImageData(264 * 2, 37 + 44 * 3, 136, 44);
  var stats3Respawn = icCctx.getImageData(264 * 2, 37 + 44 * 4, 136 * 2, 44 * 2);
  Tesseract.recognize(stats3name)
    .then(function(result) {
      $("#name3").append(result.text);
    });
  Tesseract.recognize(stats3Kills)
    .then(function(result) {
      $("#kills3").append(result.text);
    });
  Tesseract.recognize(stats3Damage)
    .then(function(result) {
      $("#damage3").append(result.text);
    });
  Tesseract.recognize(stats3Survived)
    .then(function(result) {
      $("#survived3").append(result.text);
    });
  Tesseract.recognize(stats3Revive)
    .then(function(result) {
      $("#revives3").append(result.text);
    });
  Tesseract.recognize(stats3Respawn)
    .then(function(result) {
      $("#respawn3").append(result.text);
    });

  Tesseract.recognize(bigImg)
    .then(function(result) {
      bigResults = result;
      $("#bigResult").append(bigResults.text);
      bigResults.words.forEach(function(w) {
        var b = w.bbox;

        ioctx.strokeWidth = 3
        ioctx.strokeStyle = 'blue'
        ioctx.strokeRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0)
        ioctx.beginPath()
        ioctx.moveTo(w.baseline.x0, w.baseline.y0)
        ioctx.lineTo(w.baseline.x1, w.baseline.y1)
        ioctx.strokeWidth = 5
        ioctx.strokeStyle = 'yellow'
        ioctx.stroke()
      });
    });
});