const express = require('express');
const app = express();

// El puerto lo define Firebase mediante una variable de entorno (PORT)
// Si no existe, usamos el 8080 por defecto
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Servidor de Administraciones de Diego Fernandez funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});
