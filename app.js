
const answers = document.querySelectorAll('[data-answer]');
const form = document.querySelector('form');
const display = document.querySelector('.wrapper');
let response; // stores the actual rating from the user



let flag = true;
function handleAnswer() {   
    if (flag) {
        this.style.backgroundColor = 'var(--light-gray)';
        this.style.color = 'var(--white)';
        response = this.value;
        flag = !flag;        
    } else {
        return;
    }

}



function updateDisplay() {
    display.innerHTML = `
        <img src="./images/illustration-thank-you.svg" alt="thanks image" class="image">
        <p class="response center-text">you have selected ${response} out of 5</p>
        <h3 class="center-text">Thank you!</h3>
        <p class="center-text">We appreciate you taking the time to give a rating. if you ever need more support, dont't hesitate to get in touch</p>
    `;
}


answers.forEach(answer => answer.addEventListener('click', handleAnswer));
form.addEventListener('submit', updateDisplay);
