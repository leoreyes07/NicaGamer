document.addEventListener("DOMContentLoaded", (event) => {

    let mobile_btn = document.querySelector(".navbar__mobile--btn");
    let mobile_menu = document.querySelector(".navbar__mobile--list");

    mobile_btn.addEventListener("click", () => {
        let menu_opened = document.querySelector(".menu_opened");

        if (!menu_opened) {
            mobile_menu.style.display = "block";
            mobile_menu.classList.add("menu_opened");
        }else {
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_opened");
        }
    });


    const submenu = (boton, submenu, className) => {
        boton.addEventListener("click", () => {
            let dropDown = document.querySelector("."+className);
            if(!dropDown){
                submenu.style.display = "block";
                submenu.classList.add(className);
            }else{
                submenu.style.display = "none";
                submenu.classList.remove(className);
            }
        });
    }


    /* Primer submenu */
    let dropDown1_btn = document.querySelector("#icon1");
    let dropDown1_submenu = document.querySelector("#submenu1");

    /* Segundo submenu */
    let dropDown2_btn = document.querySelector("#icon2");
    let dropDown2_submenu = document.querySelector("#submenu2");

    /* Ejecutar funciion */
    submenu(dropDown1_btn, dropDown1_submenu, "drop1");
    submenu(dropDown2_btn, dropDown2_submenu, "drop2");

    /* Redimencionado */
    window.addEventListener("resize", () => {
        let win = parsefloat(document.body.clientWidth);

        if(win > 1024){
            mobile_menu.style.display = "none";
            mobile_menu.classList.remove("menu_opened");
        }
    })

});