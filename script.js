let selectedPlayers = [];

function updateTopPlayers() {
    // Update the top players section with the selected players
    for (let i = 0; i < selectedPlayers.length; i++) {
      document.getElementById(`box${i + 1}`).innerText = `${i + 1}. ${selectedPlayers[i]}`;
    }
  }

  function addPlayerToTop(playerName) {
    // Check if the selected player is not already in the list and the list has less than 10 players
    if (!selectedPlayers.includes(playerName) && selectedPlayers.length < 10) {
      // Add the selected player to the top players array
      selectedPlayers.push(playerName);
  
      // Update the top players section
      updateTopPlayers();
    }
  }

function player1(){
    let playerName = document.getElementById("p1").innerText;
    addPlayerToTop(playerName);
}
function player2(){
    let playerName = document.getElementById("p2").innerText;
    addPlayerToTop(playerName); 
}
function player3(){
    let playerName = document.getElementById("p3").innerText;
    addPlayerToTop(playerName);
}
function player4(){
    let playerName = document.getElementById("p4").innerText;
    addPlayerToTop(playerName);
}
function player5(){
    let playerName = document.getElementById("p5").innerText;
    addPlayerToTop(playerName);
}
function player6(){
    let playerName = document.getElementById("p6").innerText;
    addPlayerToTop(playerName);
}
function player7(){
    let playerName = document.getElementById("p7").innerText;
    addPlayerToTop(playerName);
}
function player8(){
    let playerName = document.getElementById("p8").innerText;
    addPlayerToTop(playerName);
}
function player9(){
    let playerName = document.getElementById("p9").innerText;
    addPlayerToTop(playerName);
}
function player10(){
    let playerName = document.getElementById("p10").innerText;
    addPlayerToTop(playerName);
}
function player11(){
    let playerName = document.getElementById("p11").innerText;
    addPlayerToTop(playerName);
}
function player12(){
    let playerName = document.getElementById("p12").innerText;
    addPlayerToTop(playerName);
}
function player13(){
    let playerName = document.getElementById("p13").innerText;
    addPlayerToTop(playerName);
}
function player14(){
    let playerName = document.getElementById("p14").innerText;
    addPlayerToTop(playerName);
}
function player15(){
    let playerName = document.getElementById("p15").innerText;
    addPlayerToTop(playerName);
}
function player16(){
    let playerName = document.getElementById("p16").innerText;
    addPlayerToTop(playerName);
}
function player17(){
    let playerName = document.getElementById("p17").innerText;
    addPlayerToTop(playerName);
}
function player18(){
    let playerName = document.getElementById("p18").innerText;
    addPlayerToTop(playerName);
}
function player19(){
    let playerName = document.getElementById("p19").innerText;
    addPlayerToTop(playerName);
}
function player20(){
    let playerName = document.getElementById("p20").innerText;
    addPlayerToTop(playerName);
}
function player21(){
    let playerName = document.getElementById("p21").innerText;
    addPlayerToTop(playerName);
}
function player22(){
    let playerName = document.getElementById("p22").innerText;
    addPlayerToTop(playerName);
}
function player23(){
    let playerName = document.getElementById("p23").innerText;
    addPlayerToTop(playerName);
}
function player24(){
    let playerName = document.getElementById("p24").innerText;
    addPlayerToTop(playerName);
}

