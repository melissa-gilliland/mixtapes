// MODAL STUFF

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

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// SELECTED STYLES

function toggleClass(el) {
    if(el.className == "unselected-playlist") {
        el.className = "selected-playlist";
    } else {
        el.className = "unselected-playlist";
    }
}

// ACCORDION STUFF 

// grab all accordions, which gives us an array
// of all the 'playlist-headers' inside of it
var accordions = document.getElementsByClassName('playlist-header');

// loop through the array we just made, and
// create a click event for each one

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        var content = this.nextElementSibling;
        // gets the next sibling, which, in this case,
        // we know will always be the playlist content
        if (content.style.maxHeight) {
            // will return an interger if it's set to more than 0
            // or if it's 0 will evaluate to falsey
            // accordion is open, we need to close it
            content.style.maxHeight = null;
            // shoots it back to where it started,
            // which is the closed state
        } else {
            // accordion is closed, we need to take
            // that max-height of 0 and make it as large
            // as it needs to be
            content.style.maxHeight = '1000px';
            // gets the total value of everything inside of it
        }
    }
}