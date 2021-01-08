const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('You clicked me!!')
    console.log('Hope this works!!!!')
}

function scream() {
    console.log('AAAHHHHHHH!!!')
    console.log('Stop!!')
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

// Prefered way

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => {
    alert('CLICKED!')
})

function twist() {
    console.log('twist')
}

function shout() {
    console.log('shout')
}

const tasBtn = document.querySelector('#tas');

// tasBtn.onclick = twist;
// tasBtn.onclick = shout;

tasBtn.addEventListener('click', twist, { once: true })
tasBtn.addEventListener('click', shout)