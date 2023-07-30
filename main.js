let showHideBtn = document.querySelector('.s-h-btn')
let descriptionDiv = document.querySelector('.description')

function showOrHide(){
    descriptionDiv.classList.toggle('show')
}

showHideBtn.addEventListener('click', showOrHide)

// Alerts

let spanClose = document.querySelectorAll('.close')

for(let i=0; i<spanClose.length; i++){
    spanClose[i].addEventListener('click', (event)=>{
        event.target.parentElement.style.opacity = '0'
        setTimeout(()=>{
           event.target.parentElement.style.display = 'none'
        }, 600)
    })
}