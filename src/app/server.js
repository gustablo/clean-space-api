const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/test', (request, response) => {
    response.status(200).json({ message: 'OK' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('waiting por changes');
});
