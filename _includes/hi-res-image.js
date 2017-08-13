document.body.onload = function() {
  [].slice.call(document.getElementsByTagName('img'), 0).forEach(function(img) {
    var src = img.src;
    var newImg = new Image();
    var width = 760;

    if (window.innerWidth < 760 / 2) {
      return;
    } else if (window.innerWidth < 1280 / 2) {
      newImg.src = img.src.replace('-760', '-1280');
    } else {
      newImg.src = img.src.replace('-760', '');
    }

    newImg.onload = function() {
      console.log('replacing ' + img.src + ' with ' + newImg.src);
      img.src = newImg.src
    };
  });
};
