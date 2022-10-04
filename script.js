const card_array = [
    {
        name: 'watermelon',
        img: 'images/w_melon.png'
    },
    {
        name: 'watermelon',
        img: 'images/w_melon.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'cherry',
        img: 'images/cherry.png'
    },
    {
        name: 'cherry',
        img: 'images/cherry.png'
    },
    {
        name: 'lychee',
        img: 'images/lychee.png'
    },
    {
        name: 'lychee',
        img: 'images/lychee.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'chilli',
        img: 'images/chilli.png'
    },
    {
        name: 'chilli',
        img: 'images/chilli.png'
    }
]


card_array.sort(() => 0.5 - Math.random())
let ids = []
let result = 0
const grid_display = document.querySelector('.grid')
const rslt = document.querySelector('#span-score')
rslt.textContent = 0


function creare_board() {
    for (let i = 0; i < card_array.length; i++) {
        const card = document.createElement('img')
        card.style.border="2px solid rgba(255,255,255)"
        card.style.borderRadius="20px"
        card.style.padding="10px"
        card.style.margin="10px"
        card.setAttribute('src', "images/q_mark.png")
        card.setAttribute('data_id', i)
        card.addEventListener('click', card_flip)
        grid_display.appendChild(card)
    }
}

creare_board()

function check() {
    const rslt = document.querySelector('#span-score')
    const imgs = document.querySelectorAll('img')
    if (ids[0] != ids[1] && card_array[ids[0]].name == card_array[ids[1]].name) {
        imgs[ids[0]].style.opacity="50%"
        imgs[ids[1]].style.opacity="50%"
        imgs[ids[0]].removeEventListener('click', card_flip)
        imgs[ids[1]].removeEventListener('click', card_flip)
        result = result + 1;

    }
    else {
        imgs[ids[0]].setAttribute('src', 'images/q_mark.png')
        imgs[ids[1]].setAttribute('src', 'images/q_mark.png')
    }
    ids = []
    rslt.textContent = result
    if (result == card_array.length) {
        rslt.textContent = 'Congratulation You are the Winner Champ!!'

    }
}


function card_flip() {
    const card_id = this.getAttribute('data_id')
    this.setAttribute('src', card_array[card_id].img)
    ids.push(card_id)
    if (ids.length == 2) {
        setTimeout(check, 300)
    }
}

