const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addBtn = document.getElementById("addButton")
const delBtn = document.getElementById("delButton")
const editBtn = document.getElementById("editButton")
const openingList = document.getElementById("opening-list")

const baseURL = `http://localhost:4000/api`

const createListSentence = arr => {
    openingList.innerHTML = '';
    let list = document.createElement('ul');
    for(let i = 0; i < arr.length; i++) {
        let {openingName} = arr[i];
        let listItem = document.createElement('li');
        listItem.textContent = openingName;
        list.appendChild(listItem);
    }
    openingList.appendChild(list);
} 


const addOpening = body => axios.post(`${baseURL}/aOpening`, body).then( res => {
    createListSentence(res.data);
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

const delOpening = body => axios.delete(`${baseURL}/dOpening?openingName=${body}`).then( res => {
    createListSentence(res.data);
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})

const editOpening = body => axios.put(`${baseURL}/eOpening`, {data: body}).then( res => {
    createListSentence(res.data);
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
  

    delOpening(openingElement.value);

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