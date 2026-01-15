function validate() {
    let text = document.getElementById('email');
    text.addEventListener('input', validate);


    

    

    
        
function validate(ev){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if(re.test(ev) === false) {
        ev.target.classList.add("error")
    }else if(re.test(ev)=== true) {
        console.log(true)
    }
   
}


}