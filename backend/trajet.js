let db = require("./db.js");

let Trajet = {

  addTrajet: function(trajet, callback)
  {
    console.log("Insert trajet en cours...");
    db.query('INSERT INTO trajet (depart, arrivee, book_places) VALUES ($1, $2, $3)', [trajet.depart, trajet.arrivee, trajet.places], callback);
  },

  // updateTrajet: function(Trajet, callback)
  // {
  //   console.log("Update trajet en cours...");
  //   db.query('UPDATE trajet SET nom = $1,prenom = $2,telephone = $3, sexe = $4, date_naiss = $5, descr = $6',callback);
  // },

  removeTrajet: function(trajet, callback)
  {
    return db.query('DELETE FROM trajet WHERE id_User = trajet.id_User', callback);
  },

  getTrajetById: function(callback)
  {
    console.log("getTrajetById : " + 1);
    return db.query('SELECT * FROM trajet', callback);
  },

  calcPrixTraj: function(callback)
  {
    console.log("Calcul du Prix du trajet");
    return db.query('SELECT book_places, distance FROM trajet',callback);
  }
};


module.exports = Trajet;
