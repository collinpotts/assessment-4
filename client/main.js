const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addBtn = document.getElementById("addButton")
const delBtn = document.getElementById("delButton")
const editBtn = document.getElementById("editButton")
const openingList = document.getElementById("opening-list")

const baseURL = `http://localhost:4000/api`


const addOpening = body => axios.post(`${baseURL}/aOpening`, body).then( res => {
    openingList.innerHTML = ''
    const listDisplay = document.createElement('div')
    listDisplay.classList.add('list-display')

    listDisplay.innerHTML = `<p class="opening">Current List: ${JSON.stringify(res.data)}</p>`
    openingList.appendChild(listDisplay)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

const delOpening = body => axios.delete(`${baseURL}/dOpening`, {data: body}).then( res => {
    openingList.innerHTML = ''
    const listDisplay = document.createElement('div')
    listDisplay.classList.add('list-display')

    listDisplay.innerHTML = `<p class="opening">Current List: ${JSON.stringify(res.data)}</p>`

    openingList.appendChild(listDisplay)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

const editOpening = body => axios.put(`${baseURL}/eOpening`, {data: body}).then( res => {
    openingList.innerHTML = ''
    const listDisplay = document.createElement('div')
    listDisplay.classList.add('list-display')

    listDisplay.innerHTML = `<p class="opening">Current List: ${JSON.stringify(res.data)}</p>`

    openingList.appendChild(listDisplay)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

function openingAddHandler(e) {
    e.preventDefault()
    
    let openingElement = document.getElementById("chess-opening")
  
    let opening = {
        openingName: openingElement.value
    }

    addOpening(opening);

    
}

function openingDelHandler(e) {
    e.preventDefault()
    
    let openingElement = document.getElementById("chess-opening")
  
    let opening = {
        openingName: openingElement.value
    }

    delOpening(opening);

}

function openingEditHandler(e) {
    e.preventDefault()
    
    let openingElement = document.getElementById("chess-opening")
    let newOpeningElement = document.getElementById("Change-Chess-Opening")
    let opening = {
        openingName: openingElement.value,
        newOpeningName: newOpeningElement.value
    }

    editOpening(opening);
    
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addBtn.addEventListener('click', openingAddHandler)
delBtn.addEventListener('click', openingDelHandler)
editBtn.addEventListener('click', openingEditHandler)