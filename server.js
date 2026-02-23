const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static('public'));

app.post('/submit-newsletter', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    // Log the subscription (In production, save to a DB or Google Sheet)
    console.log(`New subscriber: ${email}`);

    res.status(200).json({ message: "Thank you for subscribing!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
