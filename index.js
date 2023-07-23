const rgbContainer = document.querySelector('.rgb-container')


const colorDisplay = () => {

    let redColor = Math.floor(Math.random() * 255 + 1)
    let greenColor = Math.floor(Math.random() * 255 + 1)
    let blueColor = Math.floor(Math.random() * 255 + 1)


    rgbContainer.innerHTML =
        `
    <h1>rgb(${redColor}, ${greenColor}, ${blueColor})</h1>
    `

    document.body.style.background = `rgb(${redColor}, ${greenColor}, ${blueColor})`;


}

colorDisplay()

setInterval(colorDisplay, 2000)