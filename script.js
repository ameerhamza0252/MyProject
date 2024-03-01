
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
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = progress + '%';
}

updateProgressBar(); 
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);



const headinglines=['Crafting Code, <span id="txt01">Shaping</span> Tomorrow',
'Creating <span id="txt01">Pixels</span> and <span id="txt01">Pixels</span> of Possibilities',
'Where <span id="txt01">Algorithms</span> Meet Aesthetics',
`Let's Make Your <span id="txt01">Vision</span> A <span>Reality !</span>`];
const heading_text = document.getElementById('heading_text');
let heading_index = 0;
const timeFunc = setInterval(()=>{
heading_text.innerHTML=headinglines[heading_index];
if(heading_index>=3){
  heading_index=0;
}
else{
  heading_index++;
}
},2000);