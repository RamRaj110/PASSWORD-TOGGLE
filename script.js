const passField = document.querySelector('input')
const btn = document.querySelector('span i')

btn.addEventListener( 'click', () => {
  if (passField.type === 'password') {
    passField.type = 'text'
    btn.classList.add('hide')
  }else{
    passField.type = 'password'
    btn.classList.remove('hide')
  }
})
