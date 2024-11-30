const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Formulaire d'inscription</h1>
                <form action="/signup" method="POST">
                    <label for="username">Nom d'utilisateur:</label>
                    <input type="text" id="username" name="username" required><br><br>
                    <label for="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required><br><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br><br>
                    <button type="submit">S'inscrire</button>
                </form>
            </body>
        </html>
    `);
});

router.post('/', (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).send('Tous les champs sont requis.');
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send('Email invalide.');
    }
    res.send(`Utilisateur ${username} inscrit avec succès avec l'email: ${email}!`);
});
module.exports = router;