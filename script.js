const stickyNote = document.querySelector('#task')
const add = document.querySelector('#add')
const reset = document.querySelector('#reset')

let data = JSON.parse(localStorage.getItem('data'))

const dateFunc = () => {
    const now = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
}

const ttsToggle = document.querySelector('#ttsToggle')
function speakText(text) {
    if (ttsToggle.checked && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = 'en-US'
        window.speechSynthesis.speak(utterance)
    }
}
const resetFields = () => {
    document.querySelector('#missionText').value = ''
    document.querySelector('#date').value = ''
    document.querySelector('#time').value = ''
}

const displayTasks = () => {
    stickyNote.innerHTML = ''
    data.map((el, index) => {
        let timeAndDate = `${el.date} ${el.time}`
        if (timeAndDate <= dateFunc() && !el.time.includes("Expired")) {
            el.time += " Expired"
        }

        const newNote = document.createElement('div')
        newNote.classList.add('sticky')
        newNote.dataset.missionText = el.missionText


        if (el.time.includes(" Expired")) {
            newNote.style.color = '#dc3545'
        }

        newNote.innerHTML = `
    <img class= 'arrow' src="pic/arrow.gif"> 
    <p class='delete' index='${index}'><span class="glyphicon glyphicon-remove"></span></p>
    <p class="mission">${el.missionText}</p>
    <p class="date">${el.date}<br>${el.time}</p>
    `

        stickyNote.appendChild(newNote)
    })
    Array.from(document.querySelectorAll('.sticky .delete')).map(del => {
        del.addEventListener('click', (event) => {
            const index = Number(event.currentTarget.getAttribute('index'))
            speakText(`You deleted the task`)
            data.splice(index, 1)
            localStorage.setItem('data', JSON.stringify(data))
            displayTasks()
        })
    })

    Array.from(document.querySelectorAll('.sticky')).map(click => {
        click.addEventListener('click', (event) => {
            const missionText = event.currentTarget.dataset.missionText
            speakText(missionText)
        })
    })

}
if (!data) {
    data = []
} else displayTasks()


add.addEventListener('click', () => {
    const missionText = document.querySelector('#missionText').value
    const date = document.querySelector('#date').value
    const time = document.querySelector('#time').value

    const newTask = {
        missionText: missionText,
        date: date,
        time: time
    }

    if (!missionText || !date || !time) {
        speakText("All fields must be Full")
        alert("All fields must be Full!!")
        return
    }
    let timeAndDate = `${date} ${time}`
    if (timeAndDate <= dateFunc()) {
        alert('this date already Expired')
        return
    }
    data.push(newTask)
    localStorage.setItem('data', JSON.stringify(data))
    speakText("New task Added")
    displayTasks()
    resetFields()

})

reset.addEventListener('click', () => {
    resetFields()
})
