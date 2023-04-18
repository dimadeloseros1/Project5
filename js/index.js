const body = document.querySelector('body');
const statu = document.querySelector('.mode-status')
const btn = document.querySelector('#mode-toggle')
const h3List = document.querySelectorAll('.hobbies__description')

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const message = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    statu.innerText = `Currently in ${message}`;
    if(body.classList.contains('dark-mode')){
        h3List.forEach((h3) => {
            h3.style.backgroundColor = 'white'
            h3.style.color = '#000'
        })
    } else {
        h3List.forEach((h3) => {
            h3.style.color = 'brown'
        })
    }
});

// Form


const submittion = document.querySelector('.submit')
const form = document.querySelector('#contact')



function formes(event) {
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
   
    if(name === '' || email === ''){
        alert('Please fill out the form!')
        event.preventDefault(); // prevent form submission
    }
}
form.addEventListener('submit', formes)