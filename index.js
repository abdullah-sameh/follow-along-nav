const links = document.querySelectorAll('a')
const body = document.querySelector('body')
const span = document.createElement('span')
body.appendChild(span)
span.classList.add('highlight')

links.forEach(ele => {
    ele.addEventListener('mouseover', hoverFunc)
})

function hoverFunc() {
    const linkCoords = this.getBoundingClientRect()
    const [width, height] = [linkCoords.width, linkCoords.height]
    const [left, top] = [linkCoords.left + window.scrollX, linkCoords.top + window.scrollY]
    span.style.width = `${width}px`
    span.style.height = `${height}px`
    span.style.transform = `translate(${left}px, ${top}px)`
}

