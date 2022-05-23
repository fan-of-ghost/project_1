

const info = [
    {
        text: 'Dumplings are very cool!<br />@floppa',
        photo: 'url("./images/floppa/1.jpg")'
    },
    {
        text: 'Am I small russian cat?<br />@chmonya',
        photo: 'url("./images/chmonya/1.jpg")'
    },
    {
        text: 'WHO AM I?<br />@popcat',
        photo: 'url("./images/popcat/1.jpg")'
    }
]


const rightButton = document.querySelector('.right')
const leftButton = document.querySelector('.left')

const photo = document.querySelector('.photo')
const text = document.querySelector('.text')

let index = 0


rightButton.onclick = () => {
    if (++index == info.length)
        index = 0

    photo.style.backgroundImage = info[index].photo
    text.innerHTML = info[index].text
}

leftButton.onclick = () => {
    if (--index == -1)
        index = info.length - 1

    photo.style.backgroundImage = info[index].photo
    text.innerHTML = info[index].text
}