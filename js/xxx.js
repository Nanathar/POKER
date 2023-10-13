document.querySelector('.x').addEventListener('click', () => {
  console.log('l')
  document.querySelectorAll('img').forEach(img => {
    img.classList.remove('active')
  })
})