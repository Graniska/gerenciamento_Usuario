 let usuarios = require("./usuarios")

    function listarUsuarios() {
        usuarios.forEach((usuario, ) => {
            console.log(`Id: ${usuario.id}, nome:${usuario.nome}, Telefone: ${usuario.telefone},
                 Email: ${usuario.email}`)
        });
    }
    module.exports = listarUsuarios