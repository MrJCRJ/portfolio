window.document.querySelector(".logo").addEventListener("mouseover", () => {
    const myHeading = document.querySelector(".logo");
    if (myHeading.textContent === 'JCRJ') {
        myHeading.textContent = 'Jose Cicero Ribeiro Junior'
        
    } else {
        myHeading.textContent = 'JCRJ'
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
