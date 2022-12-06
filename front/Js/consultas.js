async function consultaUsers() {
    const retorno = await fetch('http://localhost:3000/getusers');
    const users = await  retorno.json()
    console.log(users)
}

consultaUsers()