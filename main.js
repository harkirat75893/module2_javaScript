// JavaScript Document
 //select the element that we want to work with 
  let access = document.getElementById("access");
  let submit = document.getElementById("submit");
  let h2 = document.querySelector("h2");
  let main = document.querySelector('main');
  
  submit.addEventListener('click', addGoal);
  function addGoal(e) { 
    let weeklyGoal = access.value;
    e.preventDefault(); 
    let h2 = document.createElement('h2') ;
    let section = document.querySelector('section');
    h2.textContent= weeklyGoal;
    section.appendChild(h2);
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let buttonText1 = document.createTextNode('Delete Task!');
    let buttonText2 = document.createTextNode('Completed Task!');
    button1.appendChild(buttonText1);
    button2.appendChild(buttonText2);
    h2.appendChild(button1);
    h2.appendChild(button2);
    button1.addEventListener('click', deleteTask);
    button2.addEventListener('click',completedTask);
    function deleteTask(e){
      h2.remove();
    }
    function completedTask(e){
      let section2 = document.querySelectorAll('section')[1];
      button2.remove();
      section2.appendChild(h2);
    }
  }

  

  