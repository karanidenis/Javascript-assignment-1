let input_name = document.getElementById('name')

const Greeting = (username) => {

  btn.addEventListener('click', () => {
    if (username.value !== '') {
      document.getElementById('text').innerText = `Hello ${username.value} welcome to bootcamp`

    } else {
      alert("Your username should not be null")
    }
  })

}

Greeting(input_name);