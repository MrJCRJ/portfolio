window.document.querySelector(".logo").addEventListener("click", () => {
    const myHeading = document.querySelector(".logo");
    if (myHeading.textContent === 'Meu Portfólio') {
        myHeading.textContent = 'Hello Word'
        
    } else {
        myHeading.textContent = 'Meu Portfólio'
    }
})

let myButton = window.document.querySelector("button")

function setUserName() {
    const myName = prompt(`Digite seu nome de Viciado`)
    if (!myName) {
        myButton.textContent
    } else {
        localStorage.setItem('name', myName)
        myButton.textContent = `${myName}`
    }
}



myButton.onclick = () => {
    setUserName()
}
