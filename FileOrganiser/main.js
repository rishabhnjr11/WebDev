//entry point of my command line
let helpFunc = require("./commands/help");
let inputArr = process.argv.slice(2);
//console.log(helpFunc.ghoda());
let command = inputArr[0];
let path = inputArr[1];
switch (command){
    case "tree":
        //call tree function 
        console.log("tree fn called and  executed successfully on path" + path);
        break;
    case "organise":
        //call organise function 
        console.log()
}