const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightCups(idx);
  });
});

// a function to highlight cups until the one that is being clicked on

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  // 'index' is the index of the current cup clicked on, and 'idx' is the overall index
  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  // small cups with full class on them
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  } else{
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

//   show the qty remained if big cup isnt full
  if(fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = '0';

  }else{
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
  
}
