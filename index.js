
    const prompt = require('prompt-sync')();
    const listarUsuarios = require('./listar.js')
    const adicionarUsuario = require ('./adicionar.js')
    const atualizarUsuario = require ("./atualizar.js")
    const removerUsuario = require ('./remover.js')
    const usuarios = require('./usuarios.js')

        function mainMenu() {
            console.log(`
                1. Listar usuarios
                2. Adicionar usuario
                3. Atualizar usuario
                4. Remover usuario
                5. Sair`
            );
                const opcao = prompt ("Escolha uma opção: ")
                let index;

                switch (opcao) {
                    case "1":
                        listarUsuarios();
                        mainMenu();
                        break;

                        case "2":
                        const nome = prompt("Nome: ")
                        const telefone = prompt('Telefone: ')
                        const email = prompt("Email: ")
                        let id = usuarios[usuarios.length -1 ].id +1;
                        adicionarUsuario(usuarios,{id: id, nome: nome, telefone: telefone, email: email})
                        console.log("Usuário adicionado com sucesso!")
                        mainMenu()
                        break;

                        case "3":
                        listarUsuarios();
                        index = parseInt(prompt("Numero do usuario a atualizar: ")) -1;
                        const novoNome = prompt("Novo telefone: ")
                        const novoTelefone = prompt("Novo telefone: ")
                        const novoEmail = prompt("Novo email: ")
                        atualizarUsuario(index, {nome: novoNome, telefone: novoTelefone, email: novoEmail})
                        console.log("Usuario atualizado com sucesso")
                        mainMenu()
                        break;

                        case "4":
                        listarUsuarios();
                        index = parseInt(prompt("Numero do usuario a remover: ")) -1
                        removerUsuario(index);
                        console.log("Usuario removido com sucesso>");
                        mainMenu()
                        break;
                    
                        case "5":
                            return
                            break;
                
                    default:
                        console.log("Opção inválida!")
                            mainMenu();
                        break;
                }
        }
        mainMenu()