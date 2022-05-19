import { getTasks,onGetTasks } from './firebase.js'

const bbddContainer = document.getElementById('bbdd-container')


window.addEventListener('DOMContentLoaded', async () => {

onGetTasks((querySnapshot)=>{

    

   let html = ''

 

    querySnapshot.forEach(doc => {
        const task = doc.data();
        html += `
  
        <tr>
        <td>${task.Usuario}</td>
        <td>${task.Puntuación}</td>
        <td>${task.Fecha}</td>
      </tr>


        `
})
  bbddContainer.innerHTML = html

})

})
