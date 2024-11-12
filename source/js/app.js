// .photo-editor__logo

const photoEditorLogo = document.querySelectorAll('.photo-editor__input')
const photoEditorRange = document.querySelectorAll('.photo-editor__range')

photoEditorLogo.forEach(element => {
    element.addEventListener('click', (event)=>{
        photoEditorRange.forEach(element => {
            element.classList.remove('photo-editor__range--active')
        })

        console.log('addEventListener ', event.target.id)
        const id = event.target.id;
        let currentRange = document.querySelector('#range-3');

        if(id === 'crop'){
            // id="range-1"
            currentRange = document.querySelector('#range-1')
        } else if(id === 'fill'){
            currentRange = document.querySelector('#range-2')
        }

        currentRange.classList.add('photo-editor__range--active')

    })
})

console.log('photoEditorLogo ', photoEditorLogo)


// .main-nav

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__menu-toggle');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

