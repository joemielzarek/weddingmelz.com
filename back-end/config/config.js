require('dotenv').config();

module.exports = {
    USER: process.env.MAILER_USERNAME,
    PASS: process.env.MAILER_PASSWORD
}
