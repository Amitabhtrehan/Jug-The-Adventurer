/* window.addEventListener('click', function(event){
   fetch('http://127.0.0.1:8090/thing/list')
   // .then(response => response.text())
    .then(response => response.json())
    .then(body => renderThings(body))
    //.then(body => renderThings(JSON.parse(body)))
     //  document.getElementById('things').innerHTML=body)
       .catch((error) => alert(error))
 });
 */
 window.addEventListener('load', function(event){
   fetch('http://127.0.0.1:8090/thing/list')
   // .then(response => response.text())
    .then(response => response.json())
    .then(body => renderThings(body))
    //.then(body => renderThings(JSON.parse(body)))
     //  document.getElementById('things').innerHTML=body)
       .catch((error) => alert(error))
 });

//  window.addEventListener('click', async function(event) {
//     let response = await fetch('http://127/0.0.1:8090/thing/list');
//     let body = await response.json();
//     renderThings(body)
//  })

 window.addEventListener('dblclick', function(event){
   fetch('http://127.0.0.1:8090/toy/list')
    .then(response => response.json())
    .then(body => renderThings(body))
    //   document.getElementById('toys').innerHTML=body)
       .catch((error) => alert(error))
 });

/* function renderThings (things){
   let container = document.getElementById('things');
   container.innerHTML = body;
}
 */

/* function renderThings (things){
   //alert(things);
   let container = document.getElementById('things');
   container.innerHTML = "";
   //for(let thing in things){
   for(let thing of things){
   container.append(`<li>${thing}</li>`)
   }
}
 */
function renderThings (things){
   //alert(things);
   let container = document.getElementById('things');
   //container.innerHTML = "";
   for(let thing of things){
      let item = document.createElement('li')
      item.innerHTML = thing;
      container.appendChild(item);
   }
   }
 

   let submit = document.getElementById('submit-thing');

   submit.addEventListener('click',async function(event){
      let parameters = {'newthing': 'Jugnoo is sleepy or crazy'};
      let response = await fetch('http:127.0.0.1:8090/thing/add',
      {method: 'POST',
      body: JSON.stringify(parameters)
   });
   let body = await response.json();
   renderThings(body);
   })

   function validateForm() {
      var x = document.forms["InputForm"]["newthing"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
      else{
        alert(x);
      }
    } 