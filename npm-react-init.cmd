
# base packege package.json:
npm init -y 

# must have react packages: React and ReactDOM
npm install react react-dom

# install builder
npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
npm install babel-loader @babel/core @babel/preset-react @babel/preset-env --save-dev
npm fund

# build app
npx webpack
   
