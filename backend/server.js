const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//Config

dotenv.config({ path: "backend/config/config.env" });

//connecting database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is workin on port ${process.env.PORT} `);
});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);

  server.close(() => {
    process.exit(1);
  });
});
