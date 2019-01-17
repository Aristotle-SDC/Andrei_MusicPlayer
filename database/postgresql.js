const promise = require('bluebird');
const options = { promiseLib: promise };
const pgp = require('pg-promise')(options);


const databaseConfig = {
  "host": "localhost",
  "port": 5432,
  "database": "soundcloud",
  "user": "andrei",
  "password": "privet",
};

// Creating a reusable/static ColumnSet for generating INSERT queries:
const cs = new pgp.helpers.ColumnSet([
  'id',
  'album',
  'artist', 
  'duration',
  'released',
  'title',
  'image',
  'song_url',
], {table: 'songs'});

// console.log(playlist);

const db = pgp(databaseConfig);

db.connect()
  .then(obj => {
    console.log('connected to database');
      obj.done(); // success, release the connection;
  })
  .catch(error => {
      console.log('ERROR:', error.message || error);
});

module.exports = { db, cs };

