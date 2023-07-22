const toAdd = document.getElementById("addBooks")
const addForm = document.getElementsByClassName("add-books")[0]
console.log(addForm)
const toRem = document.getElementById("remBooks")
const remForm = document.getElementsByClassName("rem-books")[0]
console.log(remForm)

toAdd.addEventListener("click",() => update(addForm))
toRem.addEventListener('click',() => update(remForm))

function update(idname){
    console.log(idname)
    idname.classList.add('show')
}