import temple from "../template/img.hbs";
import card from "../menu.json"

const marcup = temple(card);

const menuRef = document.querySelector(".siema");
menuRef.insertAdjacentHTML("beforeend", marcup);

 

