
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})




/* Other code snippits */

// fetch('flowers.jpg')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Network response was not OK');
//         }
//         return response.blob();
//     })
//     .then((myBlob) => {
//         myImage.src = URL.createObjectURL(myBlob);
//     })
//     .catch((error) => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });


// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })