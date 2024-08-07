let usuarios = require('./usuarios.js')

function atualizarUsuario(index, novoUsuario) {
    usuarios[index] = novoUsuario

}

module.exports = atualizarUsuario