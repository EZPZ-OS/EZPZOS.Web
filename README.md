
# Devops information
This **Devops** branch is the main branch for Devops team for aws UAT environment. There is another branch called devops-prod for the aws production environment. 

This **Devops** branch is used for merging from the main branch as long as developers generate a new version on the main branch and it will generate a CI/CD job to AWS UAT environment. 

## Devops deploy instruction
Make sure the following Git Repository is cloned:

1. EZPZOS.Core is on the same level of this project\
    ./EZPZOS.Web\
    ./EZPZOS.Core
2. Make sure EZPZOS.Core is reinstall the dependencies. 

Before building web, you NEED to run build EZPZOS.CORE.
For EZPZOS.Web , you need run npm clear and install to reinstall the dependencies: 
```console
npm ci 
```

Type run build sciprt of `webpack.config.js`
```
npm run build
```

Runs the app in the development mode. 
```
run start
```
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Git Repository



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# ezpzosfe
