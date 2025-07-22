const videos = {
    "profesor": "https://www.youtube.com/embed/ihg4NtClw0M",
    "carro": "https://www.youtube.com/embed/UidlWZ2e3Z0"
}; 

function buscarVideo() {
    const palabra = document.getElementById('searchInput').value.toLowerCase();
    const videoURL = videos[palabra];
    const contenedor = document.getElementById('videoContainer');

    if (videoURL) {
        contenedor.innerHTML = `
            <iframe width="560" height="315" src="${videoURL}?autoplay=1&mute=1&rel=0" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        `;
    } else {
        contenedor.innerHTML = `<p>No se encontró un video para "<strong>${palabra}</strong>".</p>`;
    }
}

// Activar búsqueda al presionar Enter
document.getElementById('searchInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        buscarVideo();
    }
});
