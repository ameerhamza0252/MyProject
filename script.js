
function menu(){
    let navHeight=document.getElementById("top");
    if(navHeight.style.height=="" || navHeight.style.height=='0vh'){
        navHeight.style.height="40vh";
    }
    else
    {
        navHeight.style.height='0vh';
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
   
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        reveals[i].classList.add("service-card");
  
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  var cards = document.getElementsByClassName("service-card");
  var index = 1;
  function selectedHover(){
    cards[index].classList.add('tempHover');
  }
  function mouseOver() {
    cards[index].classList.remove('tempHover');
  }
  selectedHover();