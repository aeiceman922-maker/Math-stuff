const secretTrigger = document.getElementById('secret-trigger');

// The game you want to play
const gameUrl = "https://chvin.github.io/react-tetris/"; 

secretTrigger.onclick = function() {
    // 1. Open a new blank tab
    let win = window.open();
    
    // 2. Set the URL of the new tab to "about:blank"
    win.location.href = "about:blank";

    // 3. Create an iframe inside that blank tab that fills the whole screen
    let iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    
    // 4. Point the iframe to your game
    iframe.src = gameUrl;

    // 5. Put the iframe into the blank page
    win.document.body.style.margin = "0";
    win.document.body.style.padding = "0";
    win.document.body.appendChild(iframe);
};
