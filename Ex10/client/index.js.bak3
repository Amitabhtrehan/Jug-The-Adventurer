window.addEventListener('click', function(event){
   fetch('http://127.0.0.1:8090/thing/list')
    .then(response => response.text())
    .then(body =>
       document.getElementById('things').innerHTML=body)
       .catch((error) => alert(error))
 });

 window.addEventListener('dblclick', function(event){
   fetch('http://127.0.0.1:8090/toy/list')
    .then(response => response.text())
    .then(body =>
       document.getElementById('things').innerHTML=body)
       .catch((error) => alert(error))
 });