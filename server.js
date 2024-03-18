const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// need to add routes


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

