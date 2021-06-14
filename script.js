// JavaScript: Working with DOM

const submitBTN = (e) => {
  e.preventDefault();
  const btn = e.target;
  btn.innerText = 'Clicked !'
};
