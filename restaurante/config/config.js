
const EXECUTION_MODE = process.env.REACT_APP_NODE_ENV ? process.env.REACT_APP_NODE_ENV : "development";

const resultEnvFile = require('dotenv').config({
    path: `./config/env/.env.${EXECUTION_MODE.toLowerCase()}`
});

if (!resultEnvFile.error) {
    module.exports = {
        EXECUTION_MODE: EXECUTION_MODE,
        API_BASE_URL: process.env.API_BASE_URL,
        API_URL: process.env.API_URL
    }
} else {
    console.log(resultEnvFile.error);
    process.exit(-1);
}