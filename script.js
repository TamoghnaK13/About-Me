// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


   // On toggler clicked

var container = document.getElementsByClassName('container')[0];
document.getElementById('toggler').addEventListener('change', (event) => {
  console.log(toggler)
  event.target.checked ? container.removeAttribute('data-theme') : container.setAttribute('data-theme', 'dark');
});

//swagschool
      function incognito() {
        let moveScript = `if(event.data["width"] && event.data["height"]){let width=1500;let height=1000;window.resizeTo(width + window.outerWidth - window.innerWidth, height + window.outerHeight - window.innerHeight);}`;
        var zatogaWindow = window.open(``,`swagschool`,`width=1500,height=1000`);
        zatogaWindow.document.write(`<style>body {margin: 0;}</style><title>SwagSchool</title><iframe width='100%' height='100%' src='https://swagschool.retrospicer.repl.co/' frameborder='0'></iframe><script>window.addEventListener("message", (event) => {` + moveScript + `}, false);</scr`+`ipt>`);
      }
  