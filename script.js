// Example JavaScript to handle hobby box clicks if you want to add some interaction
document.querySelectorAll('.hobby-box').forEach(box => {
    box.addEventListener('click', function() {
        alert("You clicked on " + box.querySelector('p').textContent + "!");
    });
});