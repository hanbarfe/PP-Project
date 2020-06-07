const EXECUTION_MODE = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

const resultEnvFile = require('dotenv').config({
    path: `./config/env/.env.${EXECUTION_MODE.toLowerCase()}`
});

if (!resultEnvFile.error) {
    module.exports = {
        EXECUTION_MODE: EXECUTION_MODE,
        MONGODB_URL: process.env.MONGODB_URL,
        SERVER_PORT: process.env.SERVER_PORT,
        SECRET: process.env.SECRET,
        API_BASE_URL: process.env.API_BASE_URL,
        TIMEOUT_SESSION: process.env.TIMEOUT_SESSION
    }
} else {
    console.log(resultEnvFile.error);
    process.exit(-1);
}