let plusEl = document.getElementById('plus');
let minusEl = document.getElementById('minus')
let inputEl = document.getElementById('num');
let countEl = document.getElementById('count');

let count = 0;

plusEl.addEventListener('click', function(evt){
  console.log('plus');
  count = parseInt(countEl.innerHTML);
  count += parseInt(inputEl.value);
  if(count < 0){
    //countEl.classList.remove('')
    countEl.classList.add('negative');
  } else {
    countEl.classList.remove('negative');
  }
  countEl.textContent = count;
});

minusEl.addEventListener('click', function(evt){
  console.log('minus');
  count = parseInt(countEl.innerHTML);
  count -= parseInt(inputEl.value);
  if(count < 0){
    countEl.classList.add('negative');
  } else {
    countEl.classList.remove('negative');
  }
  countEl.textContent = count;
});