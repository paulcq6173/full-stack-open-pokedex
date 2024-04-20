const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

// eslint-disable-next-line no-constant-condition
if (true) throw new Error('error');

app.get('/version', (req, res) => {
  res.send('2'); // change this string to ensure a new version deployed
});

// health cehck endpoint
app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
