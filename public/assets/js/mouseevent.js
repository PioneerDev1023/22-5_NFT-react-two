$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
      

function dragStart(e){ 
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos = Math.round(e.clientX);
  gsap.set('.ring', {cursor:'grabbing'})
  $(window).on('mousemove touchmove', drag);
}

function drag(e){
  if (e.touches) e.clientX = e.touches[0].clientX;    

  gsap.to('.ring', {
    rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
    onUp<a href="https://www.jqueryscript.net/time-clock/">date</a>:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBgPos(i) }) }
  });
  
  xPos = Math.round(e.clientX);
}

function dragEnd(e){
  $(window).off('mousemove touchmove', drag);
  gsap.set('.ring', {cursor:'grab'});
}

function getBgPos(i){ //returns the background-position string to create parallax movement in each image
  return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
}