//about page dropdowns
const items = document.querySelectorAll(".about-item");

items.forEach(item => {
  item.addEventListener("click", (e) => {
    const itemInfo = e.currentTarget.nextElementSibling;
    const itemArrow = e.currentTarget.querySelector(".fa-arrow-circle-down");
    if(itemInfo.style.height !== 'auto'){
        itemInfo.style.height = 'auto';
        itemArrow.style.transform = 'rotate(0deg)';
    } else{
        itemInfo.style.height = '0px';
        itemArrow.style.transform = 'rotate(-90deg)';
    }
  })
})