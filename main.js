const form = document.getElementById("form");
const button = document.getElementById("button");
const input = document.getElementById("input");
const bigger = document.getElementById("bigger");
const trash = document.getElementsByClassName("icon-bin icon");
button.addEventListener("click", (oe) => {
  oe.preventDefault();
  const datab = ` <div class="task"> <span class="icon-star-empty icon"> </span> <p lang="ar" class="par">${input.value}</p><div> <span class="icon-bin icon"> </span> <span class="icon-angry2 icon"> </span> </div></div>`;
  bigger.innerHTML += datab;
  input.value = "";
});
bigger.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-bin icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.style.display = "none";
    const heart = `<span class="icon-heart"> </span>`;
    eo.target.parentElement.parentElement
      .getElementsByClassName("par")[0]
      .classList.add("finish");
    eo.target.parentElement.innerHTML += heart;
  } else if (eo.target.className == "icon-heart") {
    eo.target.parentElement.parentElement
      .getElementsByClassName("par")[0]
      .classList.remove("finish");
    eo.target.style.display = "none";
    const angry = `<span class="icon-angry2 icon"> </span>`;
    eo.target.parentElement.innerHTML += angry;
  } else if (eo.target.className == "icon-star-empty icon") {
    eo.target.classList.add("orange");
    bigger.prepend(eo.target.parentElement);
  } else if (eo.target.className == "icon-star-empty icon orange") {
    eo.target.classList.remove("orange");
  }
});
