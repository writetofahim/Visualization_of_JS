function changeColor(callback) {
    var box = document.getElementById('box');
    
    // Add animation effect
    box.style.backgroundColor = 'blue';
    
    // Simulate asynchronous operation
    setTimeout(function() {
      // Execute the callback function after a delay
      callback();
    }, 2000);
  }
  
  function callbackFunction() {
    var box = document.getElementById('box');
    
    // Change the background color back to red
    box.style.backgroundColor = 'red';
  }
  
  // Call the changeColor function with the callback
  changeColor(callbackFunction);
  