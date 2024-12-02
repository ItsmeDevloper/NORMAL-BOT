const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUy46jRhT9lVFtTY95GBtbaikY/MAvjMFtcDSLAoqHeVOFbdzyNllnPZofiBTl1+YTIuxudS8ykw6LEiqKc0+dc+59BmkWYjRHNRg8g7wMj5Cg5pXUOQIDMKw8D5WAAi4kEAzAcj2JFrYvD/fqojCyE5v62MRylmm4v9kW0yo2W3EWJW6yfARXCuSVHYfOTwAPVWszQviYEyVwXVZxFlYgWSuHURVBgonrm8uYRsFFjTuP4NogwrAMU3+UByhBJYznqF7DsPwYfWWq1qhtGsdZ7EvEsDqssantdC6veU3GBXLKyyryvBKOnI/RX7CJ0JvwlotkFzHbiLcUUtWddVeIxpnUmbVlPG5bT9u0Fu70ceinyFVclJKQ1B/WnR2FuYjMgsdos7bMUTfThQM7Gy781gUzK06p2vt0bpxLRvsY8bUXZZq0FOD26Le79cTuCnq2l1o68hYjxNDpoecohtbS/Og98XX5mpXo/+i+VUfShSvSyVEXYS6rxLNQf6msdnsGdjKtnfLGdlLsF8XO/xh9fXMa1obEyhavP9Vm1xgj7qC29Y5lRFo5J5dE8AXmUGBffKMPSVX+jKWzOCctGwtEYQ7QuRSMu6Vnrrj2jOXsUOuKPeuGurJ1slZY7bXTdngkfEvGFd3bHI7OeGXvnqTVnulM+FQSM8Uo1Jkqi4+3G0WoVlwwYK4UKJEfYlJCEmZps8cKFIDuUUdOichNXeD1eYtj1yqZi+cR3sC2K6fBZKwL0tjp0RYSZiYRudQXOOERUCAvMwdhjNxpiElW1kuEMfQRBoNfv1AgRWdy962pxjEU8MISk21a5XEG3VdTXz9Cx8mqlOh16kjNCyrBgH7bRoSEqY8bGasUlk4QHpEUQILBwIMxRlcKuOgYOqjBA/76KJjLfWQcCt18GB6euO5uKjaUgyy9H2Fo2GV6qP9gM073ocPy7AOkkf3Ad3osi2jOtjsIUCB8aZnmnx/HIhlDMqYDpXOQzZCvxslu6pcjsRedbi7cpUclcsGAlBWigA2dqMqNLELpT3Cn7BnGnpdPeisyT7yUCdr+ujVi6JH4DvduKRg8v40pKXMbvN5iKC83/T6gQHJLYHi7Ocv1e50Oz7D0gOv/gj+fGh1hnn9OEQEUSGFzGHz/9vXPT9+//fF7s/z26fu3r381y99N4RdXGkgXERjGGAyApBjdg5pJo7UaVotsMhk6vij5jeyvLr52wz1ubjTVBKPVRZqUL4YTjrVWT5nimEwgetDeZcKQntGeXhSG9vgvIGAAntY9E7nu6VLIp2G2qcb21gqj/vKYV33O7+g7KxO5AKltcXpSdIaYSTsY4ouaScVoLgplxDucy9Yrl9lMfLbaWWQ/k7XHpto9Te+LbbaXbN9rQ5me4C2KxgutvZpeyvlGDeApcoMWr85sXuQDHPY7saDXWp2pclwEaOEI/lniGZo7H+JDQbZRlz7MZ/n5LPv3Pr3NifhlPoe3Fnp+yZ4Xotu4e7Hlv9x76wL6Sr2DeJmfP0ja0NwP6fWoXaWRWOinDekn8hOUpuO+pU3ZhCnWoiu5U7ooIhpcr18okMeQeFmZgAHAiQ0BBWKIifjWxUaYIExgkoMB0+M4ptvnuS4FklrMc51A8tr8QGweiU7B9R8WZo2SFwgAAA==',
    PREFIXE: process.env.PREFIX || "@",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

