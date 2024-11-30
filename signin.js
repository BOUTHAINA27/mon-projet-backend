const express = require('express');
const router = express.Router();


const users = [
    {
        username: 'user1',
        password: 'password123' 
    }
];

router.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Page de connexion</h1>
                <form action="/signin" method="POST">
                    <label for="username">Nom d'utilisateur:</label>
                    <input type="text" id="username" name="username" required><br><br>
                    <label for="password">Mot de passe:</label>
                    <input type="password" id="password" name="password" required><br><br>
                    <button type="submit">Se connecter</button>
                </form>
            </body>
        </html>
    `);
});


router.post('/', (req, res) => {
    console.log('Données envoyées dans le formulaire :', req.body);  

    const { username, password } = req.body;

   
    if (!username || !password) {
        return res.status(400).json({ error: "Nom d'utilisateur et mot de passe requis." });
    }

   
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(401).json({ error: "Nom d'utilisateur ou mot de passe incorrect." });
    }

   
    if (user.password !== password) {
        return res.status(401).json({ error: "Nom d'utilisateur ou mot de passe incorrect." });
    }

    res.json({ message: `Connexion réussie pour ${username}!` });
});


module.exports = router;
