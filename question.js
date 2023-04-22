function sent(){

    q=document.getElementById("ques").value
    col1="<h3 id='display'>Q. " +ques "</h3>"
   col2='<br><br> answer <input id="ans" type="text">'
   col3='<br><br> <button onclick="check()" class="btn btn-info" >check</button>'
   join=col1+col2+col3
   document.getElementById("output").innerHTML=join
}