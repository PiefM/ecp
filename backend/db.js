let pg = require("pg");

let config = {
  user: 'postgres',
  database: 'ECP',
  password: '1397', // !!!!!!!!!! Il faut mettre votre mdp de votre database sinon ca fonctionne pas
  port: 5432
};

let pool = new pg.Pool(config);
console.log("Connexion");

module.exports = pool;
