module.exports = {
  diff: true,
  extension: ["js"],
  package: "./package.json",
  reporter: "mochawesome",
  timeout: 5000,
  require: ["@babel/register", "setup/local.js"],
  retries: 1,
  spec: ["test/spec/*.js"],
};
