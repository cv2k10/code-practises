const counter = {
    value: 0 // counter value
}; // counter object

// add event listeners to the document
window.addEventListener("keydown", function (event) {
  // if the key is the up arrow, increment the counter
  // if the key is the down arrow, decrement the counter
  // if the key is the spacebar, reset the counter
  // if the key is not one of the above, do nothing  
  if (event.key===' ') document.getElementById('count').innerText = counter.value = 0;
  else if (event.key==='ArrowDown') document.getElementById('count').innerText = ++counter.value;
  else if (event.key==='ArrowUp') document.getElementById('count').innerText = --counter.value;
  else if (event.key==='Down') document.getElementById('count').innerText = ++counter.value;
  else if (event.key==='Up') document.getElementById('count').innerText = --counter.value;  
  
  event.preventDefault(); // prevent the default action of the event
  
}, true // useCapture is true to capture the event before it is dispatched to the target
);

