const toAdd = document.getElementById("addBooks")
const addForm = document.getElementsByClassName("add-books")[0]
const toRem = document.getElementById("remBooks")
const remForm = document.getElementsByClassName("rem-books")[0]

/* to display and remove the form when the button is clicked */
toAdd.addEventListener("click",() => update(addForm))
toRem.addEventListener('click',() => update(remForm))

function update(idname){
    idname.classList.add('show') //shows the form
}

function toggleTheme()
{
    var ele = document.body
    ele.classList.toggle('light-mode')
}
