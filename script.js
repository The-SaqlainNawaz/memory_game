const card_array=[
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'fries',
        img : 'images/fries.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png'
    },
    {
        name : 'fries',
        img : 'images/fries.png'
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png'
    },
    {
        name : 'pizza',
        img : 'images/pizza.png'
    }
]

card_array.sort(()=>0.5 - Math.random())
let ids=[]
let result= 0
const grid_display=document.querySelector('.grid')
const rslt=document.querySelector('#span-score')
rslt.textContent=0


function creare_board(){
  for(let i=0;i<card_array.length;i++){
    const card=document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data_id', i)
    card.addEventListener('click',card_flip)
    grid_display.appendChild(card)
  }
}

creare_board()

function check(){
    const rslt=document.querySelector('#span-score')
    const imgs=document.querySelectorAll('img')
    if(ids[0]!=ids[1] && card_array[ids[0]].name==card_array[ids[1]].name){
            imgs[ids[0]].setAttribute('src','')
            imgs[ids[1]].setAttribute('src','')
            imgs[ids[0]].removeEventListener('click',card_flip)
            imgs[ids[1]].removeEventListener('click',card_flip)
            result =result+1;

        }
    else{
        imgs[ids[0]].setAttribute('src','images/blank.png')
        imgs[ids[1]].setAttribute('src','images/blank.png')
    }
    ids=[]
    rslt.textContent=result
    if(result==6){
        rslt.textContent='Congratulation You are the Winner Champ!!'

    }
}


function card_flip(){
    const card_id=this.getAttribute('data_id')
    this.setAttribute('src', card_array[card_id].img)
    ids.push(card_id)
    if(ids.length==2){
        setTimeout(check ,300)
    }
}

