const playersArr = [];
function selectedPlayers(players) {
    const allPlayer = document.getElementById('selected-players');
    allPlayer.innerHTML = '';

    for (let i = 0; i < players.length; i++) {

        const clickedValue = 5;
        const name = players[i].name;
        if (i == clickedValue) {
            alert('you cannot select more than 5 players')
        } else {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${i + 1}. ${name}</td>`;
            allPlayer.appendChild(tr);


        }

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


function getLength(idName) {
    const allTd = document.getElementById(idName);
    const allTdLength = allTd.children.length;
    return allTdLength;
}