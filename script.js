window.onload = function() {
    const mathTrigger = document.getElementById('secret-math');
    const readingTrigger = document.getElementById('secret-reading');
    
    const games = [
        { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
        { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
        { title: "Retro Bowl", url: "https://retro-bowl.github.io/" },
        { title: "1v1.LOL", url: "https://1v1.lol/" },
        { title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" }
    ];

    function openPortal() {
        document.body.innerHTML = '';
        document.body.style.background = "white";
        document.body.style.fontFamily = "sans-serif";
        document.body.style.padding = "50px";

        // THE FAKE 404 BLUFF
        document.body.innerHTML = `
            <div style="max-width: 600px; margin: auto;">
                <h1 style="font-size: 50px; color: #333; margin-bottom: 10px;">404.</h1>
                <p style="font-size: 18px; color: #666;"><b>The requested URL was not found on this server.</b></p>
                <p style="font-size: 14px; color: #999;">That’s all we know.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;">
                
                <div id="hidden-menu" style="opacity: 0.02; transition: opacity 0.3s;"> 
                    <p style="color: #ccc; font-size: 10px;">Internal_Server_Log_404</p>
                    <div id="game-grid" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;"></div>
                </div>
            </div>
        `;

        const menu = document.getElementById('hidden-menu');
        menu.onmouseover = () => menu.style.opacity = "1";
        menu.onmouseout = () => menu.style.opacity = "0.02";

        const grid = document.getElementById('game-grid');
        games.forEach(game => {
            const btn = document.createElement('div');
            btn.style.cssText = "padding:10px; border:1px solid #eee; cursor:pointer; font-size: 12px; color: #666; text-align:center; background:#fff;";
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
        document.title = "Academic_Reference_Index.pdf"; 
    }

    if(mathTrigger) mathTrigger.onclick = openPortal;
    if(readingTrigger) readingTrigger.onclick = openPortal;
};

// PANIC KEY: ESC
window.onkeydown = function(e) {
    if (e.key === "Escape") { window.location.reload(); }
};
