const formCrearPlaylist = document.querySelector('#formCrearPlayList')


formCrearPlaylist.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const nombre_playlist = document.querySelector('#nombre_playlist').value
    const genero_musica = document.querySelector('#genero_musica').value

    const nueva_playlist ={
        nombre_playlist,
         genero_musica
    }

    console.log(nombre_playlist,genero_musica)
    const data = await fetch('/api/',{
        method: 'POST',
        body: JSON.stringify(nueva_playlist),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responses = await data.json()

    alert(responses.message)

})