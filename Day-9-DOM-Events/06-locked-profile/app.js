function lockedProfile() {
   Array.from(document.querySelectorAll('.profile button'))
   .forEach( b => b.addEventListener('click',show))

    function show(ev){
        let profile = ev.target.parentElement

        let isActive = profile.querySelector('input[type="radio"][value="unlock"').checked
        

        if(isActive){
           let div = profile.querySelector('div')
           if(ev.target.textContent == 'Show more'){
                div.style.display = 'block'
                ev.target.textContent = 'Hide It'
           }else{
            div.style.display = 'none'
            ev.target.textContent = 'Show more'
           }
        }
    }
}