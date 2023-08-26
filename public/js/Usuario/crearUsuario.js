const formCrearUsuario = document.querySelector('#formCrearUsuario')


formCrearUsuario.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const nombre_completo = document.querySelector('#nombre_completo').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const username = document.querySelector('#username').value
    const telefono = document.querySelector('#telefono').value

    const Usuario = {
        nombre_completo,
        email,
        password,
        username,
        telefono
    }

    const data = await fetch('/api/',{
        method: 'POST',
        body: JSON.stringify(Usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responses = await data.json()

    alert(responses.menssage)
})