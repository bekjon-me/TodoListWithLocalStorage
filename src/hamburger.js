
export default function hamburger() {
    let isMainAdderBlock = false;
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const todoAdderMobile = document.getElementsByClassName('mobile')[0];
    const todoAdder = document.getElementsByClassName('main-adder')[0];
    
    hamburger.addEventListener("click", () => {
    if(isMainAdderBlock === false) {
        console.log('saooosa')
        todoAdder.style.display = "block";
        // todoAdderMobile.getElementsByClassName.display = "none";
        isMainAdderBlock = true;
    } else {
        todoAdder.style.display = "none";
        isMainAdderBlock = false;
    }
    })
}






