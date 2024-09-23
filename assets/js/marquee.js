document.addEventListener("DOMContentLoaded", (event) => {

    let marquee = (selectorList, speed) => {
        const list = document.querySelector(selectorList);
        let movement = 0;

        
        setInterval(() => {
            list.style.marginLeft = `-${movement}px`;

            
            if (movement > list.clientWidth){
                movement = 0;
            } 

            movement = movement + speed;
        }, 0);

    }
   

    marquee(".marquee__container", 0.1);
})