baguetteBox.run('.gallery');
// search function for photo gallery :
function searchPhoto() {
  let input = document.getElementById('searchbar').value;
      input = input.toLowerCase();
    let images = document.querySelector(".gallery").children;
    for (i = 0; i < images.length; i++) {
        if (!images[i].getAttribute('data-caption').toLowerCase().includes(input)) {
            images[i].style.display="none";
        }
        else {
            images[i].style.display="block";
        }
    }
}