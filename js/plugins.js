// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// helper objects
function SneakyPoint(x, y) {
  this.x = x;
  this.y = y;
}

function SneakySize(w, h) {
  this.w = w;
  this.h = h;
}

function SneakyRect(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.point = new SneakyPoint(x, y)
  this.size = new SneakySize(w, h)
}

// image manipulation
function contrastImage(imgData, contrast) { //input range [-100..100]
  var d = imgData.data;
  contrast = (contrast / 100) + 1; //convert to decimal & shift range: [0..2]
  var intercept = 128 * (1 - contrast);
  for (var i = 0; i < d.length; i += 4) {
    d[i] = d[i] * contrast + intercept;
    d[i + 1] = d[i + 1] * contrast + intercept;
    d[i + 2] = d[i + 2] * contrast + intercept;
  }
  return imgData;
}

function truncateColor(value) {
  if (value < 220) {
    value = 0;
  } else if (value > 255) {
    value = 255;
  }
  return value;
}

function brightOnly(imgData) {
  var d = imgData.data;
  for (var i = 0; i < d.length; i += 4) {
    d[i] = truncateColor(d[i]);
    d[i + 1] = truncateColor(d[i + 1]);
    d[i + 2] = truncateColor(d[i + 2]);
  }
  return imgData;
}