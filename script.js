const correctAnswers = ['C', 'C', 'C', 'C', 'C'];
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 20;
        }
    })

    result.classList.remove('none')

    scrollTo(0,0);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}`;
        if(output >= score) {
            clearInterval(timer);
        } else {
            output+=10;
        }
    } , 15);
});

//practicing my own setInterval
let i = 0;
const buttface = setInterval(() => {
    console.log(`my ass crack has been on fire ${i} times`);
    i++;
    if (i >= 11) {
        clearInterval(buttface);
        console.log('we gotta put these 10 buttfires out STAT!')
    }
},1000)