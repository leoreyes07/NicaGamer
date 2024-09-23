document.addEventListener("DOMContentLoaded", (event) => {
    let input_search = document.querySelector(".search__input");
    let btn_search = document.querySelector(".navbar__button")

    console.log(input_search, btn_search);

    btn_search.addEventListener("click", () => {
        let visible = document.querySelector(".visible")

        if (visible) {
            input_search.style.width = "0";
            input_search.style.padding = "0";
            input_search.classList.remove("visible");
        } else{
            input_search.style.width = "15rem";
            input_search.style.padding = "0.5rem 0 0.5rem 0.5rem";
            input_search.classList.add("visible");
        }

    });
    
})  