// console.log(document.querySelector('.message').textContent);

// const labelScore = document.querySelector('.label-score').textContent = 40;
// console.log(labelScore)

// const num = document.querySelector('.number').textContent = 100;

// console.log(num);


// const labelHighscore = document.querySelector('.label-highscore').textContent = 20;

// const inp = document.querySelector('.text').value = 30
// console.log(inp)

let score = 20;
let highscore = 0;


let randomNum = Math.trunc(Math.random() * 20 + 1);
// console.log(randomNum)

document.querySelector('.check').addEventListener('click', function () {
    const val = Number((document.querySelector('.guess').value))
    console.log(val, typeof val)

    if (!val) {
        document.querySelector('.message').textContent = 'Please select a number between 1 and 20 '
    } else if (val === randomNum) {
        document.querySelector('.number').textContent = randomNum;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
            document.querySelector('.message').textContent = 'Correct Number!'
        } else if (val > randomNum) {
            if (score > 1) {

                document.querySelector('.message').textContent = 'Too High Number!'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!'
                document.querySelector('.score').textContent = 0;

            }
        }
        else if (val < randomNum) {
            if (score > 1) {

                document.querySelector('.message').textContent = 'Too Low Number!'
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!'
                document.querySelector('.score').textContent = 0;

            }
        }
    })

document.querySelector('.again').addEventListener('click', function () {

    randomNum = Math.trunc(Math.random() * 20 + 1);

    score = 20;
    document.querySelector('.message').textContent = 'Start guessing!'

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = "";

    document.querySelector('.number').textContent = '?'


})