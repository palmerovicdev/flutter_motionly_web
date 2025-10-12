const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public-flutter')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public-flutter', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

