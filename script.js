const button = document.querySelector('.buttonAdd')
const input = document.querySelector('.inputTask')
const taskComplet = document.querySelector('.taskList')
let lista = []
// Validar Input
// Adicionar item a lista
function addTask(){
    let inputTest = document.getElementById("inputValid").value

    if(inputTest == ""){
        alert("Adicione uma Tarefa!")
    }else{

   
    lista.push({
        task: input.value,
        concluida: false
    })

    input.value = ''
    
    mostrarTask()
}
}

// Mostrar item na lista
function mostrarTask(){
let newLi = ''
lista.forEach((item,position) =>{
    newLi = newLi + `
    <li class="task ${item.concluida && "done"}">
    <span class="check"><i class="fa-solid fa-check" onclick="checkTask(${position})"></i></span>
        <p> ${item.task} </p>
    <span class="lixeira"><i class="fa-solid fa-trash" onclick="delItem(${position})"></i></span>
    </li>
    `
})
taskComplet.innerHTML = newLi
}
// Deletar item
function delItem(position){
   lista.splice(position, 1)
   mostrarTask()
}
// Marcar item
function checkTask(position){
    lista[position].concluida = !lista[position].concluida
    mostrarTask()
}
button.addEventListener('click', addTask)