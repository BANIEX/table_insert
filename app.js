
document.getElementById("button").addEventListener("click", ()=>{
    let first_name = document.getElementById("first_name").value;
let last_name = document.getElementById("last_name").value;
let nick_name = document.getElementById("nick_name").value;
let array_length = document.getElementsByTagName("tr").length  ;



$("tbody").append(`<tr>
<th scope="row">${array_length }</th>
<td>${first_name.toUpperCase()}</td>
<td>${last_name.toUpperCase()}</td>
<td>${nick_name.toUpperCase()}</td>
</tr>`)

console.log(first_name, last_name, nick_name)

    
})


$(document).ready(function(){
    // alert("hi")
})