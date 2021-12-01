'use strict';

const closeModal = function() {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}

const showModal = function() {
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
}

const modal = document.querySelector(`.modal`)
const overlay = document.querySelector(`.overlay`)
const btnCloseModal = document.querySelector(`.close-modal`)
// to select several object at the same time
const btnsShowModal = document.querySelectorAll(`.show-modal`)

for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener(`click`, showModal);

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// to listen events everywhere --> method on doc directly
// key board : key down, key pressed , key up
// on passe l'arg e pour avoir des infos sur la cle passée
document.addEventListener(`keydown`, function (e) 
{
    if (e.key === `Escape` && !modal.classList.contains(`hidden`))
        closeModal();
});