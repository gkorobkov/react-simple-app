
rem # base packege package.json:
npm init -y 

rem # must have react packages: React and ReactDOM
npm install react react-dom

rem # install builder
npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
npm install babel-loader @babel/core @babel/preset-react @babel/preset-env --save-dev
npm fund

rem compiller
npm install -D babel-plugin-react-compiler@beta eslint-plugin-react-compiler@beta

# build app
npx webpack
   
