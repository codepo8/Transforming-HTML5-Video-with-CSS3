(function(){
  var zoom = 1;
  var rotate = 0;
  var v = document.getElementsByTagName('video')[0];
  v.style.left = 0;
  v.style.top = 0;
  var properties = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'];
  var prop = 'transform',p;
  while(p = properties.shift()){
    if(typeof v.style[p] != 'undefined'){
      prop = p;
    }
  }
  var controls = document.getElementById('controls');
  controls.addEventListener('click',function(e){
    var t = e.target;
    if(t.nodeName.toLowerCase()==='button'){
      switch(t.className){
        case 'play':
          if(v.paused){
            v.play();
            t.innerHTML = 'pause';
          } else {
            v.pause();
            t.innerHTML = 'play';
          }
        break;
        case 'zoomin':
          zoom += .1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;
        case 'zoomout':
          zoom -= .1;
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
        break;
        case 'left':
          v.style.left = (parseInt(v.style.left) - 5) + 'px';
        break;
        case 'right':
          v.style.left = (parseInt(v.style.left) + 5) + 'px';
        break;
        case 'up':
          v.style.top = (parseInt(v.style.top) - 5) + 'px';
        break;
        case 'down':
          v.style.top = (parseInt(v.style.top) + 5) + 'px';
        break;
        case 'rotateleft':
          rotate -= 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
        case 'rotateright':
          rotate += 5;
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
        case 'reset':
          zoom = 1;
          rotate = 0;
          v.style.top = 0 + 'px';
          v.style.left = 0 + 'px';
          v.style[prop]='rotate('+rotate+'deg) scale('+zoom+')';
        break;
      }        
      e.preventDefault();
    }
  },false);
})();