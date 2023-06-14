function animateCircle(callback) {
    var circle = document.getElementById('circle');
    
    // Add animation effect
    circle.style.transform = 'scale(2.5)';
    
    // Simulate asynchronous operation
    setTimeout(function() {
      // Execute the callback function after a delay
      callback();
    }, 2000);
  }
  
  function callbackFunction() {
    var circle = document.getElementById('circle');
    
    // Reset the scale to the original size
    circle.style.transform = 'scale(1)';
  }
  
  // Call the animateCircle function with the callback
  animateCircle(callbackFunction);
  