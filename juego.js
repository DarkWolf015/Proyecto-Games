const elecciones = ["Piedra", "Papel", "Tijeras"];

const eleccionesComputadora = () => {
    const ramdomIndex = Math.floor((Math.random() * 3));
    return elecciones[ramdomIndex]
}

const determinarGanador = (usuario, computadora) => {
    if (usuario === computadora) {
        return "¡Es un empate!";
    } else if ((usuario === "Piedra" && computadora === "Tijeras") ||
                (usuario === "Papel" && computadora === "Piedra") ||
                (usuario === "Tijeras" && computadora === "Papel")) {
        return "¡Ganaste!";
    } else {
        return "¡Perdiste!"
    }
}

const eleccionDelUsuario = (usuario) => {
    const computadora = eleccionesComputadora();
    const resultado = determinarGanador(usuario, computadora);
    const resultadoGanador = document.getElementById("resultadoDeRonda");
    resultadoGanador.textContent = `Elegiste ${usuario}. La computadora
    eligio ${computadora}. ${resultado}`;
}