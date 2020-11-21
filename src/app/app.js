import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log('waiting por changes');
});
