'use strict';

const modals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', () => {
    showModal();
  });
}

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.querySelector('.close-modal').addEventListener('click', closeModal);

document.addEventListener('keydown', a => {
  console.log(a.key);
  if (a.key === 'Escape') {
    closeModal();
  }
});

const checkInModal = target => {
  for (let i = 0; i < modals.length; i++) {
    if (modals[i] === target) return true;
  }
};

overlay.addEventListener('click', () => {
  if (!overlay.classList.contains('hidden')) {
    closeModal();
  }
});
