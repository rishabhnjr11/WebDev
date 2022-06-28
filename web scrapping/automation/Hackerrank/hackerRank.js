
//resolve-> there will be .then file which will be using return statement but in waitforclick we are not using any .then function
const puppeteer = require("puppeteer");
let email = "onandon@gmail.com";
let pass = "cLm@YFyij#-49vE";
let curTab;
let browserOpenPromise = puppeteer.launch(
    {
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        // executablePath:"//Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    }
);
browserOpenPromise //fulfill
.then(function (browser){
    console.log("browser is opened");
    //an array of all open pages inside the browser.
    //browser.pages=returns an array with all the pages in all browser contexts and all will be stored in allTabspromise.
    let allTabsPromise = browser.pages();
    return allTabsPromise;
})
.then(function (allTabsArray){
    curTab=allTabsArray[0];
    console.log("Access a first tab");
    let visitLoginPagePromise = curTab.goto("https://www.hackerrank.com/auth/login");
    return visitLoginPagePromise;
})
.then(function (data){
    //lets enter the username
    console.log("hacker login page is opened now");
    let emailTypingPromise = curTab.type("#input-1",email);

    return emailTypingPromise;
    // return passwordTypePromise;
})
.then(function(){
    //now we will enter the password
    let passwordTypePromise= curTab.type("#input-2",pass);
    console.log("Password has been typed");
    return passwordTypePromise;
})
.then(function(){
    // now we gonna click on the login button
    let loginPromise = curTab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginPromise;
})
.catch(function(err){
    console.log(err);
});