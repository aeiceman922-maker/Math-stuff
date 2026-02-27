document.addEventListener('click', function (e) {
    // Check if what you clicked is one of the secret words
    if (e.target.id === 'secret-reading' || e.target.id === 'secret-math') {
        openPortal();
    }
});

const games = [
    { title: "1v1.LOL", url: "https://1v1.lol/" },
    { title: "Bloxd.io", url: "https://bloxd.io/" },
    { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
    { title: "Retro Bowl", url: "https://retro-bowl.github.io/" },
    { title: "BitLife", url: "https://bitlifeonline.io/" },
    { title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" },
    { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
    { title: "Moto X3M", url: "https://moto-x3m.github.io/" },
    { title: "Run 3", url: "https://lekugames.github.io/run-3/" },
    { title: "Paper.io 2", url: "https://paper-io.com/" }
    // ... (Paste your other 40 games here!)
];

function openPortal() {
    document.body.innerHTML = '';
    document.body.style.background = "#f4f7f9";
    document.body.style.fontFamily = "Segoe UI, sans-serif";
    document.body.style.padding = "0";

    document.body.innerHTML = `
        <div style="height: 5px; background: #2c3e50;"></div>
        <div style="max-width: 550px; margin: 100px auto; text-align: left; background: white; padding: 40px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <div style="font-size: 48px; color: #e74c3c; margin-bottom: 10px;">☁️</div>
            <p style="font-size: 22px; font-weight: bold; color: #333; margin: 0;">Connection Error (503)</p>
            <p style="font-size: 14px; color: #666; line-height: 22px; margin-top: 15px;">
                The District Resource Server is currently undergoing maintenance. 
                <br><br>
                <span style="color: #999; font-family: monospace;">Error ID: STU-882-QX</span>
            </p>
        </div>
        
        <div id="hidden-menu" style="display: none; padding: 20px; max-width: 900px; margin: auto;"> 
            <div id="game-grid" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:8px;"></div>
        </div>

        <input type="password" id="secret-box" placeholder="." style="position: fixed; bottom: 0; left: 0; width: 15px; height: 15px; opacity: 0.1; border: 1px solid #ccc; outline: none;">
    `;

    const secretBox = document.getElementById('secret-box');
    secretBox.focus(); // Automatically clicks the box for you!

    secretBox.oninput = function() {
        if (this.value.toLowerCase() === "play") {
            document.getElementById('hidden-menu').style.display = 'block';
            renderGrid();
            this.style.display = 'none'; 
        }
    };
}

function renderGrid() {
    const grid = document.getElementById('game-grid');
    grid.innerHTML = '';
    games.forEach(game => {
        const btn = document.createElement('div');
        btn.style.cssText = "padding:8px; border:1px solid #ddd; cursor:pointer; font-size: 10px; color: #888; text-align:center; background:#fff; border-radius:4px;";
        btn.innerText = game.title;
        btn.onclick = () => launchGame(game.url);
        grid.appendChild(btn);
    });
}

function launchGame(url) {
    document.body.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;";
    document.body.appendChild(iframe);
    document.title = "Grade_5_Worksheet_04.pdf"; 
}

// THE PANIC KEY
window.onkeydown = function(e) {
    if (e.key === "Escape") { 
        window.location.replace(window.location.origin + window.location.pathname);
    }
};
Why it wasn't working (and how this fixes it):
