// EXO1
function timeDisplay(timeZone) {
    const now = new Date()
    const hours=now.getHours()+timeZone
    const minutes=now.getMinutes()
    const seconds=now.getSeconds()

    const day=now.getDate()
    const month=now.getMonth()+1
    const year=now.getFullYear()

    return hours+':'+minutes+':'+seconds+'   '+day+'/'+month+'/'+year
}

async function timeLoop() {
    const brussels=document.querySelector('#brussels')
    const anchorage=document.querySelector('#anchorage')
    const saintpetersburg=document.querySelector('#saintpetersburg')
    const reykjavik=document.querySelector('#reykjavik')

    while(true) {
        await sleep(1000)
        reykjavik.innerText=timeDisplay(0)
        anchorage.innerText=timeDisplay(-9)
        saintpetersburg.innerText=timeDisplay(3)
        brussels.innerText=timeDisplay(1)
    }
}
timeLoop();


//EXO2
const birth=new Date('1981-09-16')
const now=new Date()
const diff=now.getTime() - birth.getTime()
const days = Math.floor(diff / (1000 * 60 * 60 * 24))

const sinceBirthDisplay=document.querySelector('#sinceBirth')

sinceBirthDisplay.innerText=days;

//EXO3
const future=document.querySelector('#future')
const input=document.querySelector('#inputHours')

async function backToFuture() {
    while(true) {
        await sleep(1000)
        const nb=input.value
        if(isNaN(nb)) {
            nb=0
            input.value=0
        }
        const present=new Date()
        const futureDate = new Date(present.getTime() + nb * 3600000);
        const newDay=futureDate.getDate()
        const newMonth=futureDate.getMonth()+1
        const newYear=futureDate.getFullYear()

        future.innerText=newDay+'/'+newMonth+'/'+newYear
    }
}
backToFuture()

//EXO4
const exo4Header=document.querySelector('#dateHeader')
const exo4Day=document.querySelector('#dateDay')
const exo4Month=document.querySelector('#dateMonth')
const exo4Footer=document.querySelector('#dateFooter')
const exo4Time=document.querySelector('#time')
const exo4TimeSeconds=document.querySelector('#timeSeconds')

let usFormat=false;

exo4Time.addEventListener('click', () => {
    usFormat= usFormat ? false : true
})

async function dateDisplay() {
    while(true) {
        const now=new Date()
        exo4Header.innerText=now.toLocaleDateString('en', { weekday: 'short' });

        let day=now.getDate()
        if(day<10) {
            day='0'+day
        }
        exo4Day.innerText=day
        exo4Month.innerText = now.toLocaleDateString('en', { month: 'short' });
        exo4Footer.innerText=now.getFullYear()

        let seconds=now.getSeconds()<10 ? '0'+now.getSeconds() : now.getSeconds()

        let minutes=now.getMinutes()<10 ? '0'+now.getMinutes() : now.getMinutes()

        let hours= now.getHours()<10 ? '0'+now.getHours() : now.getHours()


        if(usFormat) {
            const ampm= now.getHours() >= 12 ? 'pm' : 'am'

            if(ampm=='pm') {
                hours= hours == 12 ? 12 : hours-12
                
                exo4Time.innerText=hours+':'+minutes+':'
                createDiv('span',exo4Time,seconds,'timeSeconds')
                createDiv('div',exo4Time,' '+ampm,'ampm')
            }
        } else {
            exo4Time.innerText=hours+':'+minutes+':'
            createDiv('span',exo4Time,seconds,'timeSeconds')
        }
        await sleep(1000)
    }
}
dateDisplay()