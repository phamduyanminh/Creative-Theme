window.addEventListener('scroll', function(){
    const navElement = this.document.getElementById("navbar-id-js")
    const currentHeight = document.documentElement.scrollTop

    if(currentHeight > navElement.offsetHeight){
        navElement.classList.add("changed-nav")
    }else{
        navElement.classList.remove("changed-nav")
    }
})