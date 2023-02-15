const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express()
const port = 3000

const movieRoutes = require("./routes/movieRoutes");

const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://admin:1018@cluster0.iwy5b9d.mongodb.net/videoclub",  // URL de la base de datos
    connectionOptions  // Opciones de conexión
  )
  .then(() => console.log("Connected successfully"))  // Si la conexión es exitosa, muestra un mensaje de éxito
  .catch((err) => console.error(err));  // Si hay un error, muestra un mensaje de error

// Usa las rutas específicas para las tareas
app.use("/movies", movieRoutes);

// Inicia el servidor y muestra un mensaje indicando en qué puerto está escuchando
app.listen(port, () => {
  console.log("This server is listening on port: " + port);
});

