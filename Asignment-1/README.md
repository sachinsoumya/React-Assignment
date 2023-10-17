## 1. What is Emmet ?
Ans - Emmet is a plug in for many popular text editors which greatly  improves HTML , CSS work flows . And Emmet does full-fill what they promise . We can use short expression for generating html markup , CSS . 

Examaple -  If we want to generate HTML skeleton that is html , head abd body tags . Then we need to just type "!" in text editor  and press enter and there we have our html skeleton . 

## 2. Difference between library and framework ?
Ans - Library :- A library performs specific and well defined operations . A library provides a set of pre-defined functions or methods that you can use in your own programs. example - Network protocol , compression , image      manipulation , string utilities , regular expression evalution , math etc . 

Framework - framework gives you the basic structure. It is known to be the skeleton where the application defines the content of the operation just by filling out the skeleton . Example - Web application system , Plug-in manager , GUI system .The framework only defines the concept but an application further defines the functionality that is useful for end-users.

## 3. What is CDN and why do we use it ?
Ans - CDN can stand for content delivery network or content distribution network. A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer.If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.

why do we use it : - 
-----------------
Content delivery networks (CDNs) provide many benefits that improve website performance and support core network infrastructure. For example, a CDN can do the following tasks: 

 1.Reduce page load time 
 2.Reduce bandwidth costs
 3.Increase content availability
 4.Improve website security

 ## Why React known as React ?
 ans - React is a JavaScript library for building user interfaces, that was developed by Facebook. It was originally released in 2013 and has since become one of the most popular libraries for building web applications.React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data. The library was designed to “react” to changes in data.When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.

 ## What is cross-origin in the script tag ?
 ans - The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in.A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.CORS is used to manage cross-origin requests.CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

 Example - <script crossorigin="anonymous|use-credentials"> 

 specifies the mode of the CORS request .
 ------------------------------------------
 anonymous - A cross-origin request is performed. No credentials are sent
 use-credentials - A cross-origin request is performed. Credentials are sent (e.g. a cookie, a certificate, a HTTP Basic authentication)

 ## What is the difference between React and ReactDOM ?
 ans - React : React is a JavaScript library for building User Interfaces and it is the core of react algorithim .
       ReactDOM : ReactDOM is the JavaScript library that allows React to interact with the DOM . It helps to manipulate the DOM . It acts as bridge or glue between react and browser .

 ## What is react.development.js and what is react.production.js ?
 Ans - 
 react.development.js(More developer friendly, readable, will take more size) :
 ----------------------------------------------------------------------------- 
 The react.development.js file is typically larger in size compared to react.production.js. The development version contains additional code, comments, and debugging information that aids in development and troubleshooting .
 The development version (react.development.js) provides more detailed error messages and warnings compared to the production version. This helps developers identify and diagnose issues during the development process. The development version includes additional checks and warnings to provide useful information when something goes wrong. However, these additional checks and messages are not included in the production version for performance reasons.When using a CDN, it's common to load the development version (react.development.js) during development and debugging stages. This allows developers to take advantage of the detailed error messages and warnings provided by the development version for easier debugging .

 react.production.js(Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.) :
 -------------------------------------------------------------------------------------------------------------------------------
 The production version is optimized for performance and has undergone various optimizations, including minification and removal of unnecessary code, resulting in a smaller file size. The production version (react.production.js) is optimized for performance and is typically used in production environments. It includes various optimizations, such as dead code elimination, to make the React library run more efficiently. These optimizations help reduce the overall bundle size, improve runtime performance, and enhance the user experience.However, in production environments, it is recommended to use the production version (react.production.js) for better performance and reduced file size.

 ## What is async and defer ?
 Ans - 1. Async in script tag in JavaScript is a way to load scripts asynchronously. That means, if a script is async, it will be loaded independently of other scripts on the page, and will not block the page from loading.If you have a page with several external scripts, loading them all asynchronously can speed up the page load time, because the browser can download and execute them in parallel.

 To use async, simply add the async attribute to your script tag:

<script async src="script.js"></script>
 2 .By using the defer attribute in HTML, the browser will load the script only after parsing (loading) the page. This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load.

 To use defer, simply add the defer attribute to your script tag:

 <script defer src="script.js"></script>

