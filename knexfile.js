module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/wastime'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
