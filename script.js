let no = document.getElementById('no');
let si = document.getElementById('si');
let respuesta = document.getElementById("respuesta");


no.addEventListener('mouseover', () => {
    let top = Math.floor((Math.random() * 80) + 1);
    let left = Math.floor((Math.random() * 80) + 1);
    let estilo = `position: absolute; top: ${top}%; left: ${left}%;`;
    no.style = estilo;
});

// no.addEventListener('click', () => {
//     respuesta.innerHTML = ":(";
// });

si.addEventListener('click', () => {
    respuesta.innerHTML = ":)";
});