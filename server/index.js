const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home page');
})

app.get('/search', async (req, res) => {
    try {
        const { keyword, thing } = req.query;
        const formattedKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
        // console.log(thing,keyword,">>>>>");
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
            prompt: `Tell me a ${thing} about ${formattedKeyword}.`,
            max_tokens: 100,
            temperature: 0.7,
            n: 1
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const search = response.data.choices[0].text.trim();
        // console.log(response.data, '>>>>>');
        res.send({ search });
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
