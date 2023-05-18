// console.log(document.querySelector('.message').textContent);

// const labelScore = document.querySelector('.label-score').textContent = 40;
// console.log(labelScore)

// const num = document.querySelector('.number').textContent = 100;

// console.log(num);


// const labelHighscore = document.querySelector('.label-highscore').textContent = 20;

// const inp = document.querySelector('.text').value = 30
// console.log(inp)

document.querySelector('.check').addEventListener('click', function () {
    const val = Number((document.querySelector('.guess').value))
    console.log(val, typeof val)

    if (!val) {
console.log('!Not A Number')
    }
})