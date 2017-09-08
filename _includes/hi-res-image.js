document.body.onload = function() {
  var images = [].slice.call(document.getElementsByClassName('responsive'), 0);

  images.forEach(function(img) {
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

  // firefox ur breaking my heart
  var svg = document.querySelector('svg');
  var svgWidth = svg.getBoundingClientRect().width;
  var wordWidth = svg.querySelector('#g54').getBoundingClientRect().width;

  if (wordWidth >= svgWidth) {
    console.log('removing bad svg');
    var img = document.createElement('img');
    img.src = '/img/logo-with-text.svg';
    img.setAttribute('alt', 'Cook Studio, LLC. logo');
    img.setAttribute('style',
        'transform: scale(1.925) translateX(78.5px); margin-bottom: 1.7rem; margin-top: -4px');
    svg.parentNode.insertBefore(img, svg);
    svg.remove();
  }
};
