// импорт стилей для модального окна
import 'basiclightbox/dist/basicLightbox.min.css'

// import * as basicLightbox from 'basiclightbox'
// или 
const basicLightbox = require('basiclightbox')



    const openModal= document.querySelector("button[data-open-modal]")
    


openModal.addEventListener("click", showModal)
function showModal() {
    instance.show()
    const closeRef = document.querySelector(".close")
    closeRef.addEventListener("click", e=> instance.close())
}
 
// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
     
//         <button>Close</button>
//     </div>
// `, {
//     onShow: (instance) => {
//         instance.element().querySelector('button').onclick = instance.close
//     }
// })
const instance = basicLightbox.create(
	document.querySelector('template')
)