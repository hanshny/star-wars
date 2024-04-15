import './styles.css'; 

const burger = document.querySelector(".burger")
const headerMenu = document.querySelector(".header .menu")
const headerMenuItems = document.querySelectorAll(".header .menu .item")

burger.addEventListener("click", () => {
    headerMenu.classList.toggle("open")
    burger.classList.toggle("open")
    
    headerMenuItems.forEach((item, index) => {
        if(item.style.animationDelay)
            return item.style.animationDelay = "";
           
        const maxDelay = 0.8
        const delay = index / 12
        const animationDelay = delay >= maxDelay ? maxDelay : delay
        
        return item.style.animationDelay = `${animationDelay}s`        
    })
})
