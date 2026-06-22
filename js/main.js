const burgerIcon = document.getElementById('burger-icon')
const navMobile = document.getElementById('nav-mobile')
const closinMenuIcon = document.getElementById('closing-menu-icon')

burgerIcon.addEventListener('click', () => {
  if (navMobile.style.display = 'none') {
    navMobile.style.display = 'block'
    burgerIcon.style.display = 'none'
    closinMenuIcon.style.display = 'block'
  }
})

closinMenuIcon.addEventListener('click', () => {
  navMobile.style.display = 'none'
  burgerIcon.style.display = 'block'
  closinMenuIcon.style.display = 'none'
})

// Close mobile menu when clicking any link in it (e.g. for same-page anchors)
const mobileLinks = navMobile.querySelectorAll('a')
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMobile.style.display = 'none'
    burgerIcon.style.display = 'block'
    closinMenuIcon.style.display = 'none'
  })
})
