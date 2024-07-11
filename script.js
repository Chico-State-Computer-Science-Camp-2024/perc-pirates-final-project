// let input= document.getElementById("input-file") ;
// input.type="file";
// input.onchange = function(e) {
//    let file = e.target.files[0];
   
// }


document.addEventListener("DOMContentLoaded", function() {
    const imageView = document.getElementById("img-view");
    const invertButton = document.getElementById("invert-button");

    if (invertButton) {
      // Tell code if button is clicked
        invertButton.addEventListener("click", invertColor);
    }

    function invertColor() {
       // create action and get the picture
       const imageView = document.getElementById("orange-illusion");

       // to invert the picture
       imageView.style.filter = "invert(100%)";
   
       }
    });

    
    document.addEventListener("DOMContentLoaded", function() 
    {
      const imageView = document.getElementById("img-view");
      const invertButton = document.getElementById("invert-button2");
  
      if (invertButton) {
        // Tell code if button is clicked
          invertButton.addEventListener("click", invertColor);
      }
  
      function invertColor() {
         // create action and get the picture
         const imageView = document.getElementById("purple-illusion");
  
         // to invert the picture
         imageView.style.filter = "invert(100%)";
      }
      });


      document.addEventListener("DOMContentLoaded", function() {
      const revertButton = document.getElementById("revert-button");

      if (revertButton) {
         revertButton.addEventListener("click", revertColor);
      }

      function revertColor() {
         const imageView = document.getElementById("orange-illusion");
         imageView.style.filter = "none";
      }
   });


   document.addEventListener("DOMContentLoaded", function() {
      const revertButton = document.getElementById("revert-button2");

      if (revertButton) {
         revertButton.addEventListener("click", revertColor);
      }

      function revertColor() {
         const imageView = document.getElementById("purple-illusion");
         imageView.style.filter = "none";
      }
   });

 

