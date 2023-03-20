const users = [
                "usuario 1", 
                "usuario 2", 
                "usuario 3"];

function createUser(){
    console.log("Usuario Criado")
}

function updateUser(){
    console.log("Usuario Atualizado")
}

function listUser(){
    return "Lista de Usuario";
}

function deleteUser(){
    console.log("Usuario Deletado")
}

module.exports = {
    users,
    createUser,
    updateUser,
    listUser,
    deleteUser};