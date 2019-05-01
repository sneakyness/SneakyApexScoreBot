$(document).ready(function() {
  var smallImg = document.getElementById("smallImage");
  var bigImg = document.getElementById("bigImage");
  var image_overlay = document.getElementById('image-overlay');
  image_overlay.width = bigImg.naturalWidth;
  image_overlay.height = bigImg.naturalHeight;
  var ioctx = image_overlay.getContext('2d');

  var icCanvas = document.getElementById('imageChunks');
  icCanvas.width = 1026;
  icCanvas.height = 337;
  var icCctx = icCanvas.getContext('2d');

  var smallResults;
  var bigResults;

  Tesseract.recognize(smallImg)
    .then(function(result) {
      smallResults = result;
      $("#smallResult").append(smallResults.text);
    });

  //header
  // icCctx.drawImage(bigImg, 580, 50, 763, 51, 0, 0, 763, 51)

  // placement and squad kills
  // icCctx.drawImage(bigImg, 602, 122, 196, 41, 0, 51, 196, 41)
  // icCctx.drawImage(bigImg, 1122, 122, 184, 41, 196, 51, 184, 41)

  // var header = icCctx.getImageData(0, 0, 763, 51)

  // var placement = icCctx.getImageData(0, 51, 196, 41)
  // var squadKills = icCctx.getImageData(196, 51, 184, 41)

  // names
  icCctx.drawImage(bigImg, 214, 173, 264, 37, 0, 0, 264, 37);
  icCctx.drawImage(bigImg, 826, 173, 264, 37, 264, 0, 264, 37);
  icCctx.putImageData(brightOnly(icCctx.getImageData(264, 0, 264, 37)), 264, 0);
  icCctx.drawImage(bigImg, 1438, 173, 264, 37, 264 * 2, 0, 264, 37);
  icCctx.putImageData(brightOnly(icCctx.getImageData(264 * 2, 0, 264, 37)), 264 * 2, 0);


  // stats 1
  var stats1x = 136
  var statsh = 44
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