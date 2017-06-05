import massive = require('massive');

module.exports = {

    connection: null,

    get: function() {
        return this.connection;
    },

    connect: function(connectionInfo) {
        /*
        this.connection = Massive.connectSync({connectionString: dbConnectionStr});
        console.log(`Connect to Contact DB successfully`);
        */

        massive(connectionInfo).then(db => {
            this.connection = db;
            console.log(`Connect to Contact DB successfully`);
        }).catch(err => {
            console.error(`Error connecting to DB: ${JSON.stringify(err)}`);
        });
    }

}
