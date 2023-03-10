const storage = require('./users.storage')

const auth = (res) => {
    
}

const list = async () => {
    const users = await storage.selectAll();
    return users
}

const create = async (res) => {
    const { body } = res;
    console.log(res)
    const data = [
        body.level,
        body.name, body.lastname,
        body.username, body.password
    ];
    await storage.insert(data);
}

const edit = (res) => {

}

const remove = (res) => {

}

module.exports = {
    auth,
    list,
    create,
    edit,
    remove
}