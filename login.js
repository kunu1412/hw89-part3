function login(){
    player1=document.getElementById("name_1").vlaue
    player2=document.getElementById("name_2").value
    localStorage.setItem("player_1",player1)
    localStorage.setItem("player_2",player2)
    window.location="no2.html"
}