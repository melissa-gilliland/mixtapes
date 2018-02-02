// get modal element
var modal = document.getElementById('aboutModal');

// get about link
var aboutLink = document.getElementById('aboutLink');

// get close button
var closeBtn = document.getElementById('closeBtn');

// listen for open click
aboutLink.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);

// function to open modal
function openModal() {
    modal.style.display = 'block';
}

// function 