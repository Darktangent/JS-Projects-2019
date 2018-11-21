
//define ui variables

const form=document.querySelector('#task-form')
const taskList=document.querySelector(".collection")
const clearBtn=document.querySelector('.clear-tasks')
const filter=document.querySelector('#filter')
const taskInput=document.querySelector('#task')


//load all event listeners

loadEventListeners()


function loadEventListeners(){

  //add task event

  form.addEventListener('submit',addTask)
  //remove task event

  taskList.addEventListener('click', removeTask)

  //clear task event

  clearBtn.addEventListener('click',clearTasks)

  filter.addEventListener('keyup', filterTasks)

}

//Add Task
function addTask(e){

  if(taskInput.value===""){
    alert('Add a task')
  }

//create li item

const li= document.createElement('li')
//add class
li.className='collection-item'

//create text node and append to li

li.appendChild(document.createTextNode(taskInput.value))
//create a new link elem for delete

const link=document.createElement('a')

//add class
link.className='delete-item secondary-content'
//add icon
link.innerHTML='<i class="fa fa-remove"></i>'
//append the link to li

li.appendChild(link)

//append li to ul
taskList.appendChild(li)

//clear input
taskList.value=""
  e.preventDefault();
}

function removeTask(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
      e.target.parentElement.parentElement.remove()

    }
    

  }

}
//clear task
function clearTasks(e){
  // taskList.list.innerHTML=""

  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }



}

function filterTasks(e){

  const text=e.target.value.toLowerCase()
  document.querySelectorAll('.collection-item').forEach((task)=>{
    const item=task.firstChild.textContent
    if(item.toLowerCase().indexOf(text) !==-1){
      task.style.display='block'
    }else{
      task.style.display='none'
    }
  })

}