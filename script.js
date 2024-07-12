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
        const imageView = document.getElementById("img-view");
        const invertButton = document.getElementById("upload-button");
    
        if (invertButton) {
          // Tell code if button is clicked
            invertButton.addEventListener("click", invertColor);
        }
    
        function invertColor() {
           // create action and get the picture
           const imageView = document.getElementById("upload-button");
    
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

  

  const input = document.getElementById("input-file");
  const imageView = document.getElementById("selected-image");
  
  if (input) {
     input.addEventListener("change", displayImage);
  }
  
  function displayImage(e) {
     const file = e.target.files[0];
     const reader = new FileReader();
  
     reader.onload = function(e) {
        imageView.src = e.target.result;
     };
  
     reader.readAsDataURL(file);
  }
  
  // Add the img-view element in the HTML code

  const alertButton = document.getElementById("alert-button");

  if (alertButton) {
     alertButton.addEventListener("click", showAlert);
  }

  function showAlert() {
     window.alert("Tell Kel Yourself!");
  }

  $(document).ready( function() {
     $('#file').on('change', fileHandler);
 });
 
 function fileHandler() {
     // console.log('fileHandler');
     let file = document.getElementById('file').files[0]; 
     let img = document.getElementById('upload-image');
     let reader = new FileReader();
     reader.addEventListener('load', function() {
         img.src = reader.result;
     }, false);
     if (file) {
         reader.readAsDataURL(file);
     }
 }
 
 document.addEventListener("DOMContentLoaded", function() {
  const imageView = document.getElementById("img-view");
  const invertButton = document.getElementById("invert-upload-button");

  if (invertButton) {
    // Tell code if button is clicked
      invertButton.addEventListener("click", invertColor);
  }

  function invertColor() {
     // create action and get the picture
     const imageView = document.getElementById("upload-image");

     // to invert the picture
     imageView.style.filter = "invert(100%)";
 
     }
  });

  document.addEventListener("DOMContentLoaded", function() {
     const revertButton = document.getElementById("revert-upload-button2");

     if (revertButton) {
        revertButton.addEventListener("click", revertColor);
     }

     function revertColor() {
        const imageView = document.getElementById("upload-image");
        imageView.style.filter = "none";
     }
  });
  

document.addEventListener("DOMContentLoaded", function() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  document.body.appendChild(circle);
});

