/*
* @Author: tuo
* @Date:   2016-04-11 23:09:09
* @Last Modified by:   tuo
* @Last Modified time: 2016-04-11 23:14:11
*/

'use strict';

// Define JSON File
 var fs = require("fs");
 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("test.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
// Get Value from JSON
 console.log("User Name:", jsonContent.username);
 console.log("Email:", jsonContent.email);
 console.log("Password:", jsonContent.password);
 console.log("\n *EXIT* \n");
