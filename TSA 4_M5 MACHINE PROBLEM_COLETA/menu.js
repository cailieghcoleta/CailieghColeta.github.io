document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const fullDetails = document.querySelector(".full-details");
    const detailImg = document.getElementById("detail-img");
    const detailTitle = document.getElementById("detail-title");
    const detailDesc = document.getElementById("detail-desc");
    const mainMenuBtn = document.querySelector(".main-menu");
 
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            const name = item.getAttribute("data-name");
            const desc = item.getAttribute("data-desc");
            const imgSrc = item.getAttribute("data-img");
 
            detailImg.src = imgSrc;
            detailTitle.textContent = name;
            detailDesc.textContent = desc;
 
            fullDetails.classList.remove("d-none");
        });
    });
 
    mainMenuBtn.addEventListener("click", function () {
        fullDetails.classList.add("d-none");
    });
 });
 