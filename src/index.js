import './styles.scss';
// import modal from "./js/modal"
import Siema from 'siema';
import time from "./js/timer"

// new Siema();
import "./js/template"
// const mySiema = new Siema();

const mySiema = new Siema({
    duration: 250,
  
    loop: true,
});

// listen for keydown event
setInterval(() => mySiema.next(), 10000)




const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());


const divElement =document.querySelector("body")

