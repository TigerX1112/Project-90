function addUser() {
    player1_username = document.getElementById("Player1_input").value;
    player2_username = document.getElementById("Player2_input").value;

    localStorage.setItem("Player 1", player1_username);
    localStorage.setItem("Player 2", player2_username);

    window.location = "game_page.html"
}