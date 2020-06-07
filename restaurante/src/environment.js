const dev = {
  NAME: "Development Mode",
  API_URL: "http://localhost:4000",
};

const prod = {
  NAME: "Production",
  API_URL: "http://localhost:5000",
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
  ...config,
};
