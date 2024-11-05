module.exports = {
    url: "mongodb://127.0.0.1:27017/websterP", // Replace "testdb" with your database name
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 5,              // Maximum number of connections in the pool
      connectTimeoutMS: 30000,  // Connection timeout in milliseconds
      socketTimeoutMS: 10000,   // Socket timeout in milliseconds
    }
  };
  