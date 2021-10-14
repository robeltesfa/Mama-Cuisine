// javascritpt for navigation bar effect on scroll


Window.addEventListener('scroll', functino(){
  var header = document.querySelector('nav#top-header')
  header.classList.toggle('sticky', Window.scrollY > 1);

})


// javascritpt for Gallery effect on click

const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=> {
   panel.addEventListener('click', () => {
     removeActiveClasses()
     panel.classList.add('active')
   })
})

function removeActiveClasses (){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}