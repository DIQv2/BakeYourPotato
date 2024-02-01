function dragFact(fact){
    fact.onmousedown = function(event) {

    let width = window.innerWidth;
    if (width <= 991) return

    let randClass = Math.floor(Math.random() * 5) + 1;
    fact.classList.add('taken' + randClass);
    fact.classList.add('taken');

    let shiftX = event.clientX - fact.getBoundingClientRect().left;
    let shiftY = event.clientY - fact.getBoundingClientRect().top;
  
    fact.style.position = 'absolute';
    fact.style.zIndex = 1000;
    document.body.append(fact);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the fact at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      fact.style.left = pageX - shiftX + 'px';
      fact.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the fact on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the fact, remove unneeded handlers
    fact.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      fact.onmouseup = null;
      fact.classList.remove('taken' + randClass);
      fact.classList.remove('taken');
    };
  
  };
  
  fact.ondragstart = function() {
    return false;
  };
}
