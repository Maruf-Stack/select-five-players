const playersArr = [];
function selectedPlayers(players) {
    const allPlayer = document.getElementById('selected-players');
    allPlayer.innerHTML = '';

    for (let i = 0; i < players.length; i++) {

        const name = players[i].name;
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${i + 1}. ${name}</td>`;
        allPlayer.appendChild(tr);

    }
}
function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerNameobj = {
        name: playerName
    }
    playersArr.push(playerNameobj);
    selectedPlayers(playersArr);
}
