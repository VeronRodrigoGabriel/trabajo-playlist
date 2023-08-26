const obtenerPlaylist = async () =>{

    const data = await fetch('',{
        method: 'GET'
    })

    const playlist = data.json()

    return playlist
}


const mostrarPlaylist = (playlist, tablaElement) => {
    let registros = '';
    playlist.forEach(playlist => {
        registros += `
        <tr>
            <td>${playlist.nombre_playlist}</td>
            <td>${playlist.genero_musica}</td>
            <td>
           <div class="row">
           <a href="/editar-reserva/${playlist.id}" class="btn btn-sm btn-warning">Editar</a>
           <button class="btn btn-danger btn-sm" onclick=eliminarReserva(event)  data-id="${reserva.id}" >Eliminar</button>
           </div>
            </td>
        </tr>
    `
    })

    tablaElement.innerHTML = registros;




}