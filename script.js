const games = [
    { title: "Slope", url: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3333r/slope@main/slope.xml" },
    { title: "Retro Bowl", url: "https://game316046.konggames.com/gamepro/316046/2/index.html" },
    { title: "Minecraft", url: "https://classic.minecraft.net" }
];

const trigger = document.getElementById('secret-trigger');
const mathPage = document.getElementById('math-page');
const gamePage = document.getElementById('game-page');
const gameGrid = document.getElementById('game-grid');
const overlay = document.getElementById('overlay');
const player = document.getElementById('game-player');

// Unlock games
trigger.onclick = () => {
    mathPage.classList.add('hidden');
    gamePage.classList.remove('hidden');
    render();
};

function render() {
    gameGrid.innerHTML = '';
    games.forEach(g => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<h4>${g.title}</h4>`;
        div.onclick = () => {
            player.src = g.url;
            overlay.classList.remove('hidden');
        };
        gameGrid.appendChild(div);
    });
}

// THE PANIC KEY (ESC)
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        overlay.classList.add('hidden');
        gamePage.classList.add('hidden');
        mathPage.classList.remove('hidden');
        player.src = ''; // Stops the game
        document.title = "iH Match | Semester 2 Resources";
    }
});
