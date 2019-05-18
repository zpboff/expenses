const ConnectionStrings = {
    DbRoute: 'mongodb://localhost:27017/expenses'
}

const AppSettings = {    
    Secret: 'cmsplanetstarpro',
    Port: 3001,
    SaltRounds: 10
}

module.exports = {
    ConnectionStrings, 
    AppSettings
}
