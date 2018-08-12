


// ==========================
// PORT
// ==========================
process.env.PORT = process.env.PORT || 8082;


// ==========================
// ENTORNO
// ==========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==========================
// Base De Datos
// ==========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/noderest'
} else {
    urlDB = 'mongodb://cafe-user:Okplokpl123456@ds119662.mlab.com:19662/cafe';
}

process.env.URLDB = urlDB;