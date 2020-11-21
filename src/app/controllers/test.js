import { Test } from '../models';

export default {
    get: (req, res) => {
        res.status(201).json({ message: 'ok' });
    },
};
