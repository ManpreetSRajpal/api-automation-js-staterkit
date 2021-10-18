**To start json-server:**

- npm run start-server
- To validate if server started successfully, run GET http://localhost:3000/posts from postman

**To run test:** 

1. npm install 
2. npm test

**Prettier**
- Check: npm run prettier:check
- Write: npm run prettier:write

**Eslint**
- npm run validate

**To setup husky pre commit hooks**
- npx husky install
- npx husky add .husky/pre-commit "npx --no-install lint-staged"

Make sure node version >=12.13.0

**Known issue:**

Path resolver in _.babelrc_ is not working for _alias pages_.
