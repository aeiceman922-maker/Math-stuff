window.onload = function() {
    const secretTrigger = document.getElementById('secret-trigger');
    
    // Your Game List
    const games = [
        { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
        { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
        { title: "Retro Bowl", url: "https://game316046.konggames.com/gamepro/316046/2/index.html" },
        { title: "Minecraft", url: "https://classic.minecraft.net/" }
    ];

    if (secretTrigger) {
        secretTrigger.onclick = function() {
            // 1. Wipe EVERYTHING on the screen
            document.body.innerHTML = '';
            document.body.style.background = "#0b0e14";
            document.body.style.margin = "0";

            // 2. Create the Menu Container
            let menuHTML = `
                <div style="padding:40px; color:white; font-family:sans-serif; text-align:center;">
                    <h2 style="color:#38bdf8;">Resource Portal</h2>
                    <div id="game-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:15px; max-width:600px; margin:0 auto;"></div>
                </div>
            `;
            document.body.innerHTML = menuHTML;

            const grid = document.getElementById('game-grid');

            // 3. Add buttons for each game
            games.forEach(game => {
                const btn = document.createElement('div');
                btn.style.cssText = "background:#1c2331; padding:20px; border-radius:8px; cursor:pointer; border:1px solid #2d3748; font-weight:bold;";
                btn.innerText = game.title;
                
                btn.onclick = function() {
                    openGame(game.url);
                };
                grid.appendChild(btn);
            });
        };
    }
};

function openGame(url) {
    document.body.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;";
    document.body.appendChild(iframe);
    document.title = "Local_Resource_Index.pdf"; // Changes tab name
}

// PANIC KEY: ESC
window.onkeydown = function(e) {
    if (e.key === "Escape") { location.reload(); }
};
