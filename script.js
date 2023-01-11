function menu(){
    let navHeight=document.getElementById("top");
    if(navHeight.style.height=="" ||navHeight.style.height=='0vh'){
        navHeight.style.height="30vh";
    }
    else
    {
        navHeight.style.height='0vh';
    }
}