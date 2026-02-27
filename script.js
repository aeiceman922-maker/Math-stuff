window.onload = function() {
    const secretTrigger = document.getElementById('secret-trigger');
    
    // Updated Game List with a better Retro Bowl link
    const games = [
        { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
        { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
        { title: "Retro Bowl", url: "https://retro-bowl.github.io/" }, // Better Mirror
        { title: "Minecraft", url: "https://classic.minecraft.net/" },
        { title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" }
    ];

    if (secretTrigger) {
        secretTrigger.onclick = function() {
            // Wipe everything
            document.body.innerHTML = '';
            document.body.style.background = "#0b0e14";
            document.body.style.margin = "0";

            // Create Menu
            let menuHTML = `
                <div style="padding:40px; color:white; font-family:sans-serif; text-align:center;">
                    <h2 style="color:#38bdf8;">Resource Portal</h2>
                    <p style="color:#94a3b8; font-size:0.8rem;">Select a module to begin</p>
                    <div id="game-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:15px; max-width:600px; margin:30px auto;"></div>
                </div>
            `;
            document.body.innerHTML = menuHTML;

            const grid = document.getElementById('game-grid');

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
    document.title = "Academic_Reference_Index.pdf"; 
}

// PANIC KEY: ESC
window.onkeydown = function(e) {
    if (e.key === "Escape") { 
        window.location.reload(); 
    }
};
