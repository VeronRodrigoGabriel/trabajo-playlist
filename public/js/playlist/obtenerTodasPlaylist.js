const obtenerPlaylist = async () =>{

    const data = await fetch('/api/',{
        method: 'GET'
    })

    const playlist = await data.json()

    return playlist
}


const mostrarPlaylist = (playlist, tablaElement) => {
    let registros = '';
    playlist.forEach(playlist => {
        registros += `
        <tr>
            <td>${playlist.nombre_playlist}</td>
            <td>${playlist.genero_musica}</td>
            <td>${playlist.createdAt}</td>
           <div class="row">
           <a href="/api/${playlist.id_playlist}" class="btn btn-sm btn-warning">Abrir</a>
           <button class="btn btn-danger btn-sm"  data-id="${playlist.id_playlist}" >Eliminar</button>
           </div>
            </td>
        </tr>
    `
    })

    tablaElement.innerHTML = registros;




}

document.addEventListener('DOMContentLoaded', async () => {

    const tbody = document.querySelector('#playlist');
    const playList = await obtenerPlaylist()
    mostrarPlaylist(playList, tbody)


});