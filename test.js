let parentList=[];


var button=document.getElementById('add');
button.addEventListener('click',todoList);
update();

// updateList()

function todoList(){
    let tit=document.getElementById('title');
    

    if(tit.value ){
        parentList.push({title:tit.value});
        tit.value='';
        
        update();
    }
    
    
}

function editByIndex(index){
    let tit=document.getElementById('title');
    
    tit.value=parentList[index].title;
    

    let my_buttons=document.getElementById('mybuttons')
    my_buttons.innerHTML=`
    <button   id="add" class="btn btn-success my-3" onclick=saveByIndex(${index})>Save Changes</button>
    <button   id="add" class="btn btn-danger my-3" onclick=Clear()>Cancel</button>
    `;

    // currentUpdatingIndex=index;

}
function saveByIndex(index){
    let tit=document.getElementById('title');
    
    //Array Updation
    parentList[index]={title:tit.value};
    //UI
    update();
    Clear();
}

function Clear(){
    let tit=document.getElementById('title');
    
    tit.value='';

     //Parent Buttttons
     let my_buttons=document.getElementById('mybuttons')
     my_buttons.innerHTML=`
     <button   id="add" class="btn btn-dark  my-3 px-4 py-2">Add task</button>
     `;
 
}
function  deleteByIndex(index){
    parentList.splice(index,1);
    update();
}

function update(){
    //This updates the list
     console.log(parentList);
    let tableBody = document.getElementById("tableBody");
    let str = "";
    parentList.forEach((element,index) => {
    str += `
        <tr id="row${index}">
            <td>${index + 1}</td>
            <td>${element.title}</td>
             
            <td><button type="button" class="btn float-end btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" >Delete</button>
 
            <button class="btn btn-success mx-3 float-end" onclick="doneByIndex(${index})"  id="done" >Done</button>
            <button class="btn float-end mx-3 btn-dark" onclick="editByIndex(${index})">Edit</button></td> 
        </tr>`;
  });
  tableBody.innerHTML = str;
}

function doneByIndex(index){
    let done = document.getElementById('done');
  //  let tr = done.parentElement.parentElement;
  //  console.log(tr);
  //  tr.classList.toggle('disable1');
  //  console.log(tr);

    done.addEventListener('click', (e) => {
        if(e.target.id == 'done'){
          const li = e.target.parentElement.parentElement;
          li.classList.toggle('disable1');
        } 
      });
    
}

function modal(index){
    parentList.splice(index,1);
    
    update();   
}
console.log(parentList);