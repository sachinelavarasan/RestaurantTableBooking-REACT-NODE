## JungleCat API v2
![API CI](https://github.com/bititude/junglecat-api-v2/workflows/API%20CI/badge.svg)

### How to run

Clone project, update `.env` file, the structure can be copied from `.env.example`
```sh
git clone git@github.com:bititude/junglecat-api-v2.git
cd junglecat-api-v2
cp .env.example .env
```
Install dependancies and run

```sh
npm install
npm start
```

**Important!** 
Run the following before pushing any commit and make sure lint and test are properly running. 

```sh
npm run lint
npm test
```
