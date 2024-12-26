function startDrag(e) {
  var targ = e.target 
  // move element to top
  var dragArr = document.getElementsByClassName("drag")
  var zIn1 = window.getComputedStyle(dragArr[0]).zIndex;
  var zIn2 = window.getComputedStyle(dragArr[0]).zIndex;
  for (var i = 0; i < dragArr.length; i++) {
    zIn2 = window.getComputedStyle(dragArr[i]).zIndex;
    if (zIn2 > zIn1) {
      zIn1 = zIn2;
    }
  dragArr[i].style.zIndex--;
  }
  targ.style.zIndex = zIn1; 
  // get event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;
  // assign top and left properties
  targ.style.left=window.getComputedStyle(targ).left;
  targ.style.top=window.getComputedStyle(targ).top;

  // calculate integer values for top and left 
  // properties
  coordX = parseInt(targ.style.left);
  coordY = parseInt(targ.style.top);
  drag = true;

  // move div element
  document.onmousemove=dragDiv;
  return false;
}

function dragDiv(e) {
  if (!drag) {return};
  var targ=e.target;
  if (targ.className != "drag") return;
  
  // move div element
  targ.style.left=coordX+e.clientX-offsetX+'px';
  targ.style.top=coordY+e.clientY-offsetY+'px';
  return false;
}

function stopDrag() {
  drag=false;
}

window.onload = function() {
  const hat = document.getElementById("hat1");
  hat.onmousedown = startDrag;
  hat.onmouseup = stopDrag;

  const hat2 = document.getElementById("hat2");
  hat2.onmousedown = startDrag;
  hat2.onmouseup = stopDrag;  

  const hat3 = document.getElementById("hat3");
  hat3.onmousedown = startDrag;
  hat3.onmouseup = stopDrag;  

  const hat4 = document.getElementById("hat4");
  hat4.onmousedown = startDrag;
  hat4.onmouseup = stopDrag;  

  const hat5 = document.getElementById("hat5");
  hat5.onmousedown = startDrag;
  hat5.onmouseup = stopDrag;  
  }
