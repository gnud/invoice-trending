require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.MYSQL_USER || 'trendusr',
        "password": process.env.MYSQL_PASSWORD || 'userexample',
        "database": process.env.MYSQL_DATABASE_NAME || 'trendapp',
        "host": process.env.MYSQL_HOST || 'localhost',
        "dialect": "mysql"
    },
    // We skip the different environments for a demo ;)
    "test": {
        "username": process.env.MYSQL_USER_TEST || 'trendusr',
        "password": process.env.MYSQL_PASSWORD_TEST || 'userexample',
        "database": process.env.MYSQL_DATABASE_NAME_TEST || 'trendapp_test',
        "host": process.env.MYSQL_HOST || 'localhost',
        "dialect": "mysql"
    },
    // "production": {
    //     "username": "root",
    //     "password": null,
    //     "database": "database_production",
    //     "host": "127.0.0.1",
    //     "dialect": "mysql"
    // }
}
