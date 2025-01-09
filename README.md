installing react bootstrap
----------------------------
1.Intsall react bootstrap choose bootsstrap theme inorder to apply bootstrap properly in react project.
2.use bootswatch for selecting theme. download bootstrap.min.css and add file inside project src folder.
3.import it into main.jsx


react with API project steps
------------------------------

1.create a react project using vite.
2.Remove unwanted code from App.jsx,index.css and App.css
3.install any styling library to project
4.create a folder for different pages for this application in src folder, and create different components for each page in the folder.
5.set up a path for components using react-router-dom library
6.create a component folder inorder to held reusablle coddes in different pages of react app,create component file inside it.


JSON server creation
-----------------------

1.Create a server folder to store json file.
2.Create a package.json (npm configuration file) file inside server folder : use command 'npm init -y'
3.Install json-server package in server folder to run json file,use command to install json server : npm i json-server / to get stable version i json-server@0.17.4
4.Create json(db.json) file for storing project data.
5.To run json file in browser port use command in server folder : npx json-server fileName.

Api call using Axios library
-------------------------------

Axios is a promise-based HTTP Client for node.js and the browser. 

1.Intsall axios : npm install axios
2.To make http request using axios : axios(config)
    config : It is a predefined object with keys (method,URL,data,headers)
3.HTTP response using axios will always return an object with pre-defined keys(data(server response),status)
4.Create a services folder inside src of your react app.


Data sharing between components in react:
-------------------------------------------

- state Lifting : data sharing using props : We will create a state in common parent of data to be shared components.share state updation function on component and state to another component.


JSON server deployment using NODE JS
----------------------------------------

1. Create a index.js file inside server folder 
2. Update scripts keyy of package.json file with {"start":"node index.js"} and remove test key from it.
3. Create a .gitignore file to add node_modules
4. Define steps to run db.json file using json-server in index.js
   - import json-server
   - create  a server for media player   app inorder to run our server app.
   - Create a middleware to convert json data to js.
   - create a port for executing our app.
   - set up path/route db.json file so that client can make the request.
   - use middleWare ,route inside the server.
   - run the server using given port.
   - to execute our app we have to use node index.js in terminal,so that we can see the output in localhost:3000.