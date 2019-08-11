# React File Explore

This project is basic demonstration of file explore. Here in this project we have used following tech stack.

| SI. No | Technology             | Description                                                                       |
| :----- | :--------------------- | :-------------------------------------------------------------------------------- |
| 1      | React Js               | Library for building user interfaces                                              |
| 2      | Redux                  | State management library for storing data                                         |
| 3      | React Router Dom       | Library for mimicking navigation in SPA                                           |
| 4      | Docker                 | Running software packages inside containers                                       |
| 5      | Story Book             | User interface development environment and playground for UI components           |
| 6      | SCSS                   | CSS preprocessor                                                                  |
| 7      | ESlint                 | Airbnb Style Guide for best coding practices.                                     |
| 8      | Prettier and Stylelint | For maintaining and consistency in CSS                                            |
| 9      | Husky & lint-staged    | Used to integrate with git version control, to maintain code clean and structured |

# How can I work with React File Explore

We have run this application via **docker** or **local** using *npm* or *yarn*


# Using docker
You need to install docker in your system [click here](https://docs.docker.com/install/) to install.

> To run docker locally use following command and open browser [http://localhost:3000/](http://localhost:3000/)

```
sudo docker-compose up --build dev
```

To get production ready application using docker
```
sudo docker-compose up --build -d prod
```

# Without docker
You need to install node.js in your system [click here](https://nodejs.org/en/) to install. You can use any package manager you want of your choose. Either `npm` or `yarn`. **npm** comes default with node.js where as you need to install **yarn** package manager. To install yarn [click here](https://yarnpkg.com/lang/en/docs/install).

## 1. Install dependance
To install all dependance package for this application you can use either of this command based on preferred package manager.

```bash
npm install
```
\- **OR** -
```bash
yarn
```

## 2. Run application
Once you run this application. It will automatically open browser in [http://localhost:3000/](http://localhost:3000/). To get up with dev server started we need to run either of this commands

```bash
npm start
```
\- **OR** -
```bash
yarn start
```

## 3. Production ready application
To get optimized code which you can deploy over server, run the following command that will bundled code in `build` directory. Which you can ship it to server.

```bash
npm run build
```
\- **OR** -
```bash
yarn build
```

# Checkout component using Storybook
Storybook is an fantastic tool which can be used to build individual components separately. It gives to access to create your own component in an isolated environment and test by passing difference props to the component and see it's behavior.

In this application we have build few components. To check those run following commands. This will open a server in your browser [http://localhost:9001/](http://localhost:9001/). You can play around with the components props and check it's behavior.

```bash
npm run storybook
```
\- **OR** -
```bash
yarn storybook
```

# Conclusion
This application is visual representation of file system. Where user can do following tasks:

1. User can navigate and view all files and directory.
2. User are also allowed to create file or directory.
3. User can delete a file or a directory.
4. User can search file in current directory.
5. User can also view files info such as who created a file or a directory, it's name, size and date of creation.
6. User can navigate via following:
   - URL based on url, application will show nested directory content, if URL is invalid then it will redirect to root directory.
   - Using side navigation bar. When clicked on side navigation bar that particular directory contents are be displayed.
   - Double clicking on Directory icon. Note if you double click on directory you'll get file info.
   - Right click you'll get an pop up. On click of that open option, you'll be redirected to that content.