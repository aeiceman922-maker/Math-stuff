// Scrambled links (Base64) - Decodes only when clicked
const m = [
    { n: "Tetris_Final_Assessment", u: "aHR0cHM6Ly9jaHZpbi5naXRodWIuaW8vcmVhY3QtdGV0cmlzLw==" },
    { n: "Slope_Coordinate_Review", u: "aHR0cHM6Ly9rZGF0YTEuY29tLzIwMjAvMDUvc2xvcGUv" },
    { n: "Retro_Bowl_Tactics", u: "aHR0cHM6Ly9yZXRyby1ib3dsLmdpdGh1Yi5pby8=" },
    { n: "Bloxd_World_History", u: "aHR0cHM6Ly9ibG94ZC5pby8=" },
    { n: "1v1_Math_Logic", u: "aHR0cHM6Ly8xdjEubG9sLw==" },
    { n: "BitLife_Social_Studies", u: "aHR0cHM6Ly9iaXRsaWZlb25saW5lLmlvLw==" },
    { n: "MotoX_Physics_Lab", u: "aHR0cHM6Ly9tb3RvLXgzbS5naXRodWIuaW8v" },
    { n: "Drive_Mad_Engineering", u: "aHR0cHM6Ly9kcml2ZS1tYWQuZ2l0aHViLmlvLw==" },
    { n: "Smash_Karts_Probability", u: "aHR0cHM6Ly9zbWFzaGthcnRzLmlvLw==" },
    { n: "Shell_Shockers_Bio", u: "aHR0cHM6Ly9zaGVsbHNob2NrLmlvLw==" },
    { n: "Krunker_Reflex_Test", u: "aHR0cHM6Ly9rcnVua2VyLmlvLw==" },
    { n: "Zombs_Survival_Guide", u: "aHR0cHM6Ly96b21ic3JveWFsZS5pby8=" },
    { n: "Geometry_Dash_Angles", u: "aHR0cHM6Ly9nZHBzLmlvL3BsYXkv" },
    { n: "Minecraft_Classic_Build", u: "aHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQv" },
    { n: "Stickman_Hook_Gravity", u: "aHR0cHM6Ly9zdGlja21hbi1ob29rLmdpdGh1Yi5pby8=" },
    { n: "Paper_Area_Calculations", u: "aHR0cHM6Ly9wYXBlci1pby5jb20v" },
    { n: "Vex_7_Physical_Education", u: "aHR0cHM6Ly92ZXg3LmlvLw==" },
    { n: "EvoWorld_Biology_Evo", u: "aHR0cHM6Ly9ldm93b3JsZC5pby8=" },
    { n: "Subway_Surfers_Reflex", u: "aHR0cHM6Ly9zdWJ3YXlzdWJ3YXlzLmNvbS8=" },
    { n: "Flappy_Bird_Velocity", u: "aHR0cHM6Ly9mbGFwcHliaXJkLmlvLw==" },
    { n: "Crossy_Road_Safety", u: "aHR0cHM6Ly82Njc3LmdpdGh1Yi5pby9jcm9zc3ktcm9hZC8=" },
    { n: "Happy_Wheels_Physics", u: "aHR0cHM6Ly90b3RhbGplcmtmeWNoLmNvbS9oYXBweV93aGVlbHMudGpm" },
    { n: "Basket_Bros_Statistics", u: "aHR0cHM6Ly9iYXNrZXRicm9zLmlvLw==" },
    { n: "Burrito_Bison_Launch", u: "aHR0cHM6Ly9idXJyaXRvYmlzb24uZ2l0aHViLmlvLw==" },
    { n: "Little_Alchemy_Chemistry", u: "aHR0cHM6Ly9saXR0bGVhbGNoZW15LmNvbS8=" },
    { n: "Agar_Cellular_Growth", u: "aHR0cHM6Ly9hZ2FyLmlvLw==" },
    { n: "Slither_Biology_Lab", u: "aHR0cHM6Ly9zbGl0aGVyLmlvLw==" },
    { n: "Diep_Tank_Engineering", u: "aHR0cHM6Ly9kaWVwLmlvLw==" },
    { n: "Hole_Mass_Volume_Lab", u: "aHR0cHM6Ly9ob2xlLWlvLmNvbS8=" },
    { n: "Raft_Wars_Projectile", u: "aHR0cHM6Ly9yYWZ0d2Fycy5pby8=" },
    { n: "Fireboy_Watergirl_Logic", u: "aHR0cHM6Ly9maXJlYm95LXdhdGVyZ2lybC5pby8=" },
    { n: "Papas_Business_Math", u: "aHR0cHM6Ly9wYXBhcy1waXp6ZXJpYS5pby8=" },
    { n: "Terraria_Earth_Science", u: "aHR0cHM6Ly90ZXJyYXJpYS5vcmcv" },
    { n: "Tomb_Runner_Endurance", u: "aHR0cHM6Ly93d3cudG9tYi1ydW5uZXIuaW8v" },
    { n: "2048_Exponential_Math", u: "aHR0cHM6Ly9wbGF5MjA0OC5jby8=" },
    { n: "Chess_Strategic_Theory", u: "aHR0cHM6Ly9jaGVzcy5jb20v" },
    { n: "Doodle_Jump_Altitudes", u: "aHR0cHM6Ly9kb29kbGVqdW1wLmlvLw==" },
    { n: "Skybox_Atmospheric_Study", u: "aHR0cHM6Ly9za2rib3h5LmdpdGh1Yi5pby8=" },
    { n: "Boulder_Geology_Review", u: "aHR0cHM6Ly93ZWJnbC1ib3VsZGVyLmdpdGh1Yi5pby8=" },
    { n: "Bitace_Digital_Literacy", u: "aHR0cHM6Ly9iaXRhY2UuZ2l0aHViLmlvLw==" },
    { n: "Bottle_Flip_Probability", u: "aHR0cHM6Ly9ib3R0bGVmbGlwLmdpdGh1Yi5pby8=" },
    { n: "Warblox_Command_Center", u: "aHR0cHM6Ly93YXJibG94LmdpdGh1Yi5pby8=" },
    { n: "Sonic_Speed_Analysis", u: "aHR0cHM6Ly9zb25pYy5naXRodWIuaW8v" },
    { n: "Mario_Platform_Logic", u: "aHR0cHM6Ly9tYXJpby5naXRodWIuaW8v" },
    { n: "Poke_Clicker_Ecology", u: "aHR0cHM6Ly9wb2tlLWNsaWNrZXIuZ2l0aHViLmlvLw==" },
    { n: "Pixel_Gun_3D_Geometry", u: "aHR0cHM6Ly9waXhlbC1ndW4uZ2l0aHViLmlvLw==" },
    { n: "Bullets_Trajectory_Lab", u: "aHR0cHM6Ly9idWxsZXRzLmdpdGh1Yi5pby8=" },
    { n: "Orbit_Space_Science", u: "aHR0cHM6Ly9vcmJpdC5naXRodWIuaW8v" },
    { n: "Snake_Algorithm_Test", u: "aHR0cHM6Ly9zbmFrZS5naXRodWIuaW8v" },
    { n: "Tunnel_Rush_Vision", u: "aHR0cHM6Ly90dW5uZWwtcnVzaC5naXRodWIuaW8v" }
];

document.addEventListener('click', function (e) {
    if (e.target.id === 'secret-reading' || e.target.id === 'secret-math') {
        openPortal();
    }
});

function openPortal() {
    document.body.innerHTML = '';
    document.body.style.background = "#f0f2f5";
    document.body.style.fontFamily = "sans-serif";

    document.body.innerHTML = `
        <div style="height: 60px; background: #fff; border-bottom: 1px solid #ddd; padding: 0 20px; display: flex; align-items: center; justify-content: space-between;">
            <b style="color: #555;">District Document Cloud > Grade_5 > Resources</b>
        </div>
        <div style="max-width: 1000px; margin: 30px auto; display: none;" id="g-container">
            <h3 style="color: #444; border-bottom: 2px solid #4a90e2; padding-bottom: 10px;">Assigned Digital Modules</h3>
            <div id="g" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top: 20px;"></div>
        </div>
        <div id="err-box" style="max-width: 500px; margin: 100px auto; background: white; padding: 30px; border: 1px solid #ccc; border-radius: 4px;">
            <p style="font-size: 24px; color: #d9534f; margin: 0; font-weight: bold;">⚠️ Access Error 503</p>
            <p style="color: #666;">Cloud Sync failed. Please re-authenticate.</p>
        </div>
        <input type="password" id="p" style="position:fixed; bottom:0; left:0; width:15px; height:15px; opacity:0.02; border:none; outline:none;">
    `;

    const p = document.getElementById('p');
    p.focus();
    p.oninput = function() {
        if (this.value.toLowerCase() === "play") {
            document.getElementById('err-box').style.display = 'none';
            document.getElementById('g-container').style.display = 'block';
            renderModules();
        }
    };
}

function renderModules() {
    const g = document.getElementById('g');
    g.innerHTML = '';
    m.forEach(item => {
        const btn = document.createElement('div');
        btn.style.cssText = "padding:12px; border:1px solid #ddd; cursor:pointer; font-size: 11px; color: #444; text-align:left; background:#fff; border-radius:4px; display:flex; align-items:center; gap:10px;";
        btn.innerHTML = `<span style="color:#d9534f; font-weight:bold; font-size:18px;">📄</span> <div>${item.n}.pdf</div>`;
        btn.onclick = () => {
            const url = atob(item.u);
            // This opens the game in a new tab disguised as a PDF
            let win = window.open('about:blank', '_blank');
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            let frame = win.document.createElement('iframe');
            frame.style.border = 'none';
            frame.style.width = '100%';
            frame.style.height = '100%';
            frame.src = url;
            win.document.body.appendChild(frame);
            win.document.title = "Lesson_Resource_Viewing.pdf";
        };
        g.appendChild(btn);
    });
}

window.onkeydown = function(e) {
    if (e.key === "Escape") { 
        window.location.replace(window.location.origin + window.location.pathname);
    }
};
