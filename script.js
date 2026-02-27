const secretTrigger = document.getElementById('secret-trigger');
const gameUrl = "https://chvin.github.io/react-tetris/"; 

secretTrigger.onclick = function() {
    // 1. Wipe the math page content immediately
    document.body.innerHTML = '';
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";

    // 2. Create the game frame
    let iframe = document.createElement('iframe');
    iframe.src = gameUrl;
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    
    // 3. Inject the game
    document.body.appendChild(iframe);

    // 4. Update the Tab Title to look like a boring file
    document.title = "Local_Resource_Index.pdf";
};

// PANIC KEY: Press 'Escape' to go back to math
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        location.reload(); // This instantly reloads the math page
    }
});
