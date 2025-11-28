const inputBox = document.getElementById('input-box');
const addBtn = document.getElementById('add-btn');
const listBox = document.getElementById('list');
const checkBtn = document.querySelectorAll('btn')[0];

addBtn.addEventListener('click', ()=> {
    let task = inputBox.value;
    if(task !== '')
    {
        listBox.innerHTML +=
        `<li> <div class="text-icon">
        <img class="btn" src="images/unchecked.png">${task}</div> 
        <button class="delete">X</button></li>`;

        inputBox.value = '';
    }
    let data = listBox.innerHTML;
    saveData(data);
});

//check task comepleted
listBox.addEventListener('click', (e)=> {

if(e.target.className == 'btn')
{
    if(e.target.src.includes('unchecked.png'))
    {
        e.target.src = 'images/checked.png';
        e.target.parentElement.style.textDecoration = 'line-through';
    }
    else 
    {
        e.target.src = 'images/unchecked.png';
        e.target.parentElement.style.textDecoration = 'none';
    }
}
    let data = listBox.innerHTML;
    saveData(data);
});

//Delete Task
listBox.addEventListener('click', (e)=> {
    if(e.target.className == 'delete')
        e.target.parentElement.remove();

    let data = listBox.innerHTML;
    saveData(data);
});

function saveData(data){
    localStorage.setItem('data', data);
}

function showTask(){
    listBox.innerHTML = localStorage.getItem('data');
};

showTask();