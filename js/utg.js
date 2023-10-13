// //UTG
document.querySelector('.utgOpen').addEventListener('click', () => {
  const imgUtg1 = document.querySelector('.imgUtg1').classList.toggle('active');
  const imgUtg2 = document.querySelector('.imgUtg2').classList.remove('active');
  const imgUtg3 = document.querySelector('.imgUtg3').classList.remove('active');

  document.querySelector('.imgUtg1').addEventListener('click', () => {
    const imgUtg1 = document.querySelector('.imgUtg1').classList.remove('active');
  })
})

document.querySelector('.HjCuBu').addEventListener('click', () => {
  const imgUtg2 = document.querySelector('.imgUtg2').classList.toggle('active');
  const imgUtg1 = document.querySelector('.imgUtg1').classList.remove('active');
  const imgUtg3 = document.querySelector('.imgUtg3').classList.remove('active');

  document.querySelector('.imgUtg2').addEventListener('click', () => {
    const imgUtg2 = document.querySelector('.imgUtg2').classList.remove('active');
  })
})

document.querySelector('.SbBb').addEventListener('click', () => {
  const imgUtg3 = document.querySelector('.imgUtg3').classList.toggle('active');
  const imgUtg2 = document.querySelector('.imgUtg2').classList.remove('active');
  const imgUtg1 = document.querySelector('.imgUtg1').classList.remove('active');

  document.querySelector('.imgUtg3').addEventListener('click', () => {
    const imgUtg3 = document.querySelector('.imgUtg3').classList.remove('active');
  })
})