var counter = 0;
var box1 = document.getElementById("box");
var heading = document.getElementById("head");

function count(){
  counter++;
  heading.innerText = 'Box Clicked ' + counter + ' times';
    console.log('Box Clicked ' + counter + ' times');
    // box1.style.boxShadow = '0 0 10px rgba(0, 0, 0)';
    box1.style.boxShadow = '0 0 10px rgba(0, 0, 0, ' + (counter / 10) + ')';
}
box1.addEventListener('click', count);