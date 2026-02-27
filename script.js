window.onload = function() {
    // Both secret words
    const mathTrigger = document.getElementById('secret-math');
    const readingTrigger = document.getElementById('secret-reading');
    
    const games = [
        { title: "Tetris", url: "https://chvin.github.io/react-tetris/" },
        { title: "Slope", url: "https://kdata1.com/2020/05/slope/" },
        { title: "Retro Bowl", url: "https://retro-bowl.github.io/" },
        { title: "1v1.LOL", url: "https://1v1.lol/" },
        { title: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/" }
    ];

    // Function to build and show the menu
    function openPortal() {
        document.body.innerHTML = '';
        document.body.style.background = "#0b0e14";
        document.body.style.margin = "0";

        let menuHTML = `
            <div style="padding:40px; color:white; font-family:sans-serif; text-align:center;">
                <h2 style="color:#38bdf8;">Academic Resource Portal</h2>
                <div id="game-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:15px; max-width:600px; margin:30px auto;"></div>
            </div>
        `;
        document.body.innerHTML = menuHTML;

        const grid = document.getElementById('game-grid');
        games.forEach(game => {
            const btn = document.createElement('div');
            btn.style.cssText = "background:#1c2331; padding:20px; border-radius:8px; cursor:pointer; border:1px solid #2d3748; font-weight:bold;";
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

    // Set up both triggers
    if(mathTrigger) mathTrigger.onclick = openPortal;
    if(readingTrigger) readingTrigger.onclick = openPortal;
};

// PANIC KEY: ESC
window.onkeydown = function(e) {
    if (e.key === "Escape") { window.location.reload(); }
};
