const midtnight = document.querySelector("#midnightFrappe");
const mochaCrumble = document.querySelector("#mochaCrumble");
const frappuccino = document.querySelector("#esppressoFrappu");


function loadCss(file, disable = false) {
    // Evitar cargar más de una vez
    let link = document.querySelector(`link[href="${file}"]`);

    if(!link) {
        // Todavía no se ha cargado el archivo, crear elemento y asignar propiedades
        link = document.createElement('link');
        link.href = file;
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";
        document.head.appendChild(link);
    }
    // Activar o desactivar
    link.disabled = disable;
}

midtnight.addEventListener("change", () => {
    loadCss('CSS/styleMidnight.css', !checkMode.checked);
    console.log("ola");
});


