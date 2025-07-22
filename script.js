const videos = {
    "profesor": "https://www.youtube.com/embed/ihg4NtClw0M",
    "carro": "https://www.youtube.com/embed/UidlWZ2e3Z0"
    "computador": "https://www.youtube.com/embed/xG5P1iL7J_I",
};

function buscarVideo() {
    const input = document.getElementById('searchInput');
    const palabra = input.value.toLowerCase();
    const videoURL = videos[palabra];
    const contenedor = document.getElementById('videoContainer');

    if (videoURL) {
        contenedor.innerHTML = `
            <iframe width="560" height="315" src="${videoURL}?autoplay=1&mute=1&rel=0" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            <p><strong>PALABRA BUSCADA:</strong> ${palabra}</p>
        `;
    } else {
        contenedor.innerHTML = `<p>No se encontró un video para "<strong>${palabra}</strong>".</p>`;
    }

    // Limpiar el campo de búsqueda
    input.value = '';
}

// Activar búsqueda al presionar Enter
document.getElementById('searchInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        buscarVideo();
    }
});

