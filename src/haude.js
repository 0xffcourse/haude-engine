function loadScript(pathFromOutside, scriptPath){
    const url = pathFromOutside + scriptPath;
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.onload = () => {
            resolve();
        };
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.head.appendChild(script);
    });
}

async function loadScripts(){
    let engineScripts = [
        '/_core/world.js',
        '/_core/entity.js',
        '/controls/keyboard.js',
        '/game/game.js',
        '/graphics/screen.js',
        '/graphics/sprite.js'
    ];
    let selfTag = document.currentScript;
    let pathFromOutside = selfTag.src.split("/haude.js")[0];
    try {
        for(const engineScript of engineScripts){
            await this.loadScript(pathFromOutside, engineScript);
        }
        let externalScripts = selfTag.getAttribute("data-externalScripts").split(",");
        for(const externalScript of externalScripts){
            await this.loadScript("./", externalScript);
        }
    } catch (error) {
        console.error(error);
    }
}

loadScripts();
