// RECEIVER
window.addEventListener("storage", ev => {
    document.getElementById( ev.key ).innerHTML = ev.newValue;
});

// SENDER
[...document.querySelectorAll("[data-sender]")].forEach( el =>
    el.addEventListener("input", ev => localStorage[el.dataset.sender] = el.value )
);
