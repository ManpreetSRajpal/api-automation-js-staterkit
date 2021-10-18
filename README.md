**To start json-server:**

- npm run start-server
- To validate run GET http://localhost:3000/posts from postman

**To run test:** 

npm test

**Prettier**
- Check: npm run prettier:check
- Write: npm run prettier:write

**Setting up husky pre commit hooks**
- npx husky install
- npx husky add .husky/pre-commit "npx --no-install lint-staged"

Make sure node version >=12.13.0

**Known issue:**

Path resolver in _.babelrc_ is not working for _alias pages_.