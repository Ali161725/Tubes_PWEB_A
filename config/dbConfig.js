const sequalize =  require('sequelize')
const db = new sequalize('resigniert', 'root', '', {
    host    : "localhost",
    dialect : "mysql"
})

module.exports = db