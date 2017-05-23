import Massive = require('massive');

module.exports = {

    connection: null,

    get: function() {
        return this.connection;
    },

    connect: function(dbConnectionStr) {
        this.connection = Massive.connectSync({connectionString: dbConnectionStr});
        console.log(`Connect to Contact DB successfully`);
    }

}
