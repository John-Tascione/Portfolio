const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition(){
    for (let i = 0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

   allSections.addEventListener('click', (e) => {
    // console.log(e.target)
    const id = e.target.dataset.id;
    // console.log(id)
    if(id) {
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        
        sections.forEach((sect) => {
            sect.classList.remove('active')
        })

        const element = document.getElementById(id)
        element.classList.add('active')
    }
   })
}

pageTransition()

