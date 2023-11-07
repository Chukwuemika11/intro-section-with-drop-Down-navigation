document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll(".dropdown");

    dropdownItems.forEach(function(item) {
        item.addEventListener("click", function() {
            this.querySelector(".dropdown-content").classList.toggle("show");
        });
    });                                      

    window.addEventListener("click", function(event) {
        if (!event.target.matches(".dropdown")) {
            const dropdowns = document.querySelectorAll(".dropdown-content");
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains("show")) {
                    dropdown.classList.remove("show");
                }
            });
        }
    });
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener('click',() => {
nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',() => {
nav.classList.remove('active');
    })
}
