const restart = document.getElementById("button");

restart.addEventListener("click", ()=>{
    setTimeout(function(){
        window.location = "./index.html"
    },1000);
})