const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

// let flg = false;

menuBtn.addEventListener("click", () => {
    // console.log(menu.classList);
    // if(flg){
    //     menu.classList.remove("is-active");
    //     flg = false;
    // }
    // else{
    //     menu.classList.add("is-active");
    //     flg = true;
    // }
    menu.classList.toggle("is-active");
    menuBtn.classList.toggle("is-active");

});