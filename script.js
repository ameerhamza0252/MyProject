
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

  // Progress bar
function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + '%';
}

updateProgressBar(); 
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);




// Progress circle
function updateProgressCircle() {
  const progressElement = document.querySelector('.progress-circle-bar');
  const scrollToTopElement = document.querySelector('.scroll-to-top');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  let progress = (window.pageYOffset / totalHeight) * 283;
  progress = Math.min(progress, 283);
  progressElement.style.strokeDashoffset = 283 - progress;

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    scrollToTopElement.style.opacity = '1';
  } else {
    scrollToTopElement.style.opacity = '0';
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const scrollToTopElement = document.querySelector('.scroll-to-top');
scrollToTopElement.addEventListener('click', scrollToTop);


updateProgressCircle();
window.addEventListener('scroll', updateProgressCircle);
window.addEventListener('resize', updateProgressCircle);