const serverIP = "mc.sharpennd.xyz";
const apiEndpoint = `https://api.mcsrvstat.us/2/${serverIP}`;

async function fetchServerStats() {
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        if (data.online) {
            const playerCount = `${data.players.online} / ${data.players.max}`;

            document.getElementById("server-status").innerHTML = `
                <p>Server is <strong>online</strong></p>
            `;
            document.getElementById("player-amount").innerHTML = `
                <p>Players: ${playerCount}</p>
            `;
        } else {
            document.getElementById("stats").innerHTML = `<p>Server is <strong>offline</strong></p>`;
        }
    } catch (error) {
        document.getElementById("stats").innerHTML = `<p>Error fetching server data.</p>`;
        console.error("Error:", error);
    }
}

fetchServerStats();
setInterval(fetchServerStats, 15000);