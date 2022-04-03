
//resolve-> there will be .then file which will be using return statement but in waitforclick we are not using any .then function
const puppeteer = require("puppeteer");
let {email,password} = require('/.secrets';)
// let email = " ";
//let password = " ";

let curTab;
let browserOpenPromise = puppeteer.launch(
    {
        headless: false,
        defaultViewport: null,
        args: [""]
    }
)