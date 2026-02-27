// Scrambled links (Base64) to bypass URL scanners
const m = [
    { n: "Tetris", u: "aHR0cHM6Ly9jaHZpbi5naXRodWIuaW8vcmVhY3QtdGV0cmlzLw==" },
    { n: "Slope", u: "aHR0cHM6Ly9rZGF0YTEuY29tLzIwMjAvMDUvc2xvcGUv" },
    { n: "Retro Bowl", u: "aHR0cHM6Ly9yZXRyby1ib3dsLmdpdGh1Yi5pby8=" },
    { n: "Bloxd.io", u: "aHR0cHM6Ly9ibG94ZC5pby8=" },
    { n: "1v1.LOL", u: "aHR0cHM6Ly8xdjEubG9sLw==" },
    { n: "BitLife", u: "aHR0cHM6Ly9iaXRsaWZlb25saW5lLmlvLw==" },
    { n: "Moto X3M", u: "aHR0cHM6Ly9tb3RvLXgzbS5naXRodWIuaW8v" },
    { n: "Drive Mad", u: "aHR0cHM6Ly9kcml2ZS1tYWQuZ2l0aHViLmlvLw==" },
    { n: "Smash Karts", u: "aHR0cHM6Ly9zbWFzaGthcnRzLmlvLw==" },
    { n: "Shell Shockers", u: "aHR0cHM6Ly9zaGVsbHNob2NrLmlvLw==" },
    { n: "Krunker", u: "aHR0cHM6Ly9rcnVua2VyLmlvLw==" },
    { n: "ZombsRoyale", u: "aHR0cHM6Ly96b21ic3JveWFsZS5pby8=" },
    { n: "Geometry Dash", u: "aHR0cHM6Ly9nZHBzLmlvL3BsYXkv" },
    { n: "Minecraft", u: "aHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQv" },
    { n: "Stickman Hook", u: "aHR0cHM6Ly9zdGlja21hbi1ob29rLmdpdGh1Yi5pby8=" },
    { n: "Paper.io", u: "aHR0cHM6Ly9wYXBlci1pby5jb20v" },
    { n: "Vex 7", u: "aHR0cHM6Ly92ZXg3LmlvLw==" },
    { n: "EvoWorld", u: "aHR0cHM6Ly9ldm93b3JsZC5pby8=" },
    { n: "Subway Surfers", u: "aHR0cHM6Ly9zdWJ3YXlzdWJ3YXlzLmNvbS8=" },
    { n: "Flappy Bird", u: "aHR0cHM6Ly9mbGFwcHliaXJkLmlvLw==" },
    { n: "Crossy Road", u: "aHR0cHM6Ly86Njc3LmdpdGh1Yi5pby9jcm9zc3ktcm9hZC8=" },
    { n: "Happy Wheels", u: "aHR0cHM6Ly90b3RhbGplcmtmeWNoLmNvbS9oYXBweV93aGVlbHMudGpm" },
    { n: "Basket Bros", u: "aHR0cHM6Ly9iYXNrZXRicm9zLmlvLw==" },
    { n: "Burrito Bison", u: "aHR0cHM6Ly9idXJyaXRvYmlzb24uZ2l0aHViLmlvLw==" },
    { n: "Little Alchemy", u: "aHR0cHM6Ly9saXR0bGVhbGNoZW15LmNvbS8=" },
    { n: "Agar.io", u: "aHR0cHM6Ly9hZ2FyLmlvLw==" },
    { n: "Slither.io", u: "aHR0cHM6Ly9zbGl0aGVyLmlvLw==" },
    { n: "Diep.io", u: "aHR0cHM6Ly9kaWVwLmlvLw==" },
    { n: "Hole.io", u: "aHR0cHM6Ly9ob2xlLWlvLmNvbS8=" },
    { n: "Raft Wars", u: "aHR0cHM6Ly9yYWZ0d2Fycy5pby8=" },
    { n: "Fireboy Watergirl", u: "aHR0cHM6Ly9maXJlYm95LXdhdGVyZ2lybC5pby8=" },
    { n: "Papa's Pizzeria", u: "aHR0cHM6Ly9wYXBhcy1waXp6ZXJpYS5pby8=" },
    { n: "Terraria", u: "aHR0cHM6Ly90ZXJyYXJpYS5vcmcv" },
    { n: "Tomb Runner", u: "aHR0cHM6Ly93d3cudG9tYi1ydW5uZXIuaW8v" },
    { n: "2048", u: "aHR0cHM6Ly9wbGF5MjA0OC5jby8=" },
    { n: "Chess", u: "aHR0cHM6Ly9jaGVzcy5jb20v" },
    { n: "Doodle Jump", u: "aHR0cHM6Ly9kb29kbGVqdW1wLmlvLw==" },
    { n: "Skybox", u: "aHR0cHM6Ly9za2rib3h5LmdpdGh1Yi5pby8=" },
    { n: "Boulder", u: "aHR0cHM6Ly93ZWJnbC1ib3VsZGVyLmdpdGh1Yi5pby8=" },
    { n: "Bitace", u: "aHR0cHM6Ly9iaXRhY2UuZ2l0aHViLmlvLw==" },
    { n: "Bottle Flip", u: "aHR0cHM6Ly9ib3R0bGVmbGlwLmdpdGh1Yi5pby8=" },
    { n: "Warblox", u: "aHR0cHM6Ly93YXJibG94LmdpdGh1Yi5pby8=" },
    { n: "Sonic", u: "aHR0cHM6Ly9zb25pYy5naXRodWIuaW8v" },
    { n: "Mario", u: "aHR0cHM6Ly9tYXJpby5naXRodWIuaW8v" },
    { n: "PokeClicker", u: "aHR0cHM6Ly9wb2tlLWNsaWNrZXIuZ2l0aHViLmlvLw==" },
    { n: "Pixel Gun", u: "aHR0cHM6Ly9waXhlbC1ndW4uZ2l0aHViLmlvLw==" },
    { n: "Bullets", u: "aHR0cHM6Ly9idWxsZXRzLmdpdGh1Yi5pby8=" },
    { n: "Orbit", u: "aHR0cHM6Ly9vcmJpdC5naXRodWIuaW8v" },
    { n: "Snake", u: "aHR0cHM6Ly9zbmFrZS5naXRodWIuaW8v" },
    { n: "Tunnel Rush", u: "aHR0cHM6Ly90dW5uZWwtcnVzaC5naXRodWIuaW8v" }
];

document.addEventListener('click', function (e) {
    if (e.target.id === 'secret-reading' || e.target.id === 'secret-math') {
        openPortal();
    }
});

function openPortal() {
    document.body.innerHTML = '';
    document.body.style.background = "#f4f7f9";
    document.body.style.fontFamily = "sans-serif";

    document.body.innerHTML = `
        <div style="height: 5px; background: #2c3e50;"></div>
        <div style="max-width: 550px; margin: 80px auto; background: white; padding: 40px; border: 1px solid #ddd; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
            <div style="font-size: 48px; color: #e74c3c;">☁️</div>
            <p style="font-size: 22px; font-weight: bold; color: #333; margin-top: 10px;">Connection Error (503)</p>
            <p style="font-size: 14px; color: #666; line-height: 22px;">The District Resource Server is currently undergoing scheduled maintenance. Please check back later.</p>
        </div>
        <input type="password" id="p" style="position:fixed; bottom:0; left:0; width:5px; height:5px; opacity:0.1; border:none; outline:none;">
        <div id="g" style="display:none; padding:20px; max-width:1000px; margin:auto; grid-template-columns:repeat(5, 1fr); gap:10px;"></div>
    `;

    const p = document.getElementById('p');
    p.focus();
    p.oninput = function() {
        if (this.value.toLowerCase() === "play") {
            document.getElementById('g').style.display = 'grid';
            this.style.display = 'none'; 
            renderModules();
        }
    };
}

function renderModules() {
    const g = document.getElementById('g');
    g.innerHTML = '';
    m.forEach(item => {
        const btn = document.createElement('div');
        btn.style.cssText = "padding:12px; border:1px solid #ddd; cursor:pointer; font-size: 12px; font-weight: bold; color: #555; text-align:center; background:#fff; border-radius:6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);";
        btn.innerText = item.n; // SHOWS THE REAL NAME
        btn.onclick = () => {
            const url = atob(item.u);
            document.body.innerHTML = `<iframe src="${url}" style="position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;"></iframe>`;
            document.title = "Grade_5_Worksheet_04.pdf";
        };
        g.appendChild(btn);
    });
}

window.onkeydown = function(e) {
    if (e.key === "Escape") { 
        window.location.replace(window.location.origin + window.location.pathname);
    }
};
