// JavaScript: Working with DOM

document.addEventListener("click", (e) => {
  e.preventDefault();
    const btn = e.target;
    btn.innerText = "Clicked !";
});
