const env = process.env.ENV == undefined ? "local" : process.env.ENV;

module.exports = {
  diff: true,
  extension: ["js"],
  package: "./package.json",
  reporter: "mochawesome",
  timeout: 5000,
  require: ["@babel/register", "setup/env_" + env + ".js"],
  retries: 1,
  spec: ["test/spec/*.js"],
};
