const puppeteer = require("puppeteer");
let email = "onandon@gmail.com";
let pass = "cLm@YFyij#-49vE";
let currentTab;

let browserPromise =  puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-minimized"],
    // executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
});// puppeteer.launch will give us browser instance

browserPromise.then(function (browser) {
    console.log("Browser Opened");
    let pagesPromise  = browser.pages();
    return pagesPromise;
}).then(function (tabsArr) {
    currentTab = tabsArr[0];
    let gotoPromise = currentTab.goto("https://www.hackerrank.com/auth/login");
    return gotoPromise;
}).then(function () {
    let emailP = currentTab.type("input[id=input-1]", email);
    return emailP;
})
.then(function () {
    let passP = currentTab.type("input[id=input-2]", pass);
    return passP;
})
.then(function () {
        let clickP = currentTab.click("#tab-1-content-1 > div.login-form.auth-form.theme-m > form > div.form-item.clearfix > button")
        return clickP;
})
.then(function () {
    console.log("Login Sucessful");
    let algoPagePromise = waitAndClick("div[data-automation='algorithms']");
    return algoPagePromise;
})
.then(function () {
    console.log("Algo page opened");
    questionsSelector = "a[class='js-track-click challenge-list-item']";
    let questionsP = currentTab.waitForSelector(questionsSelector); 
    return questionsP;
})
.then(function () {
    console.log("All questions Loaded");
    let allQuestions = document.querySelectorAll(questionsSelector);
    let linksArr = [];
    for (let i = 0; i < allQuestions.length; i++) {
    linksArr.push(allQuestions[i].getAttribute("href"));
    }
    console.log(linksArr);
})
.catch(function (err) {
    console.log(err, " Something went Wrong");
})

function waitAndClick(selector) {
    let myPromise = new Promise(function (resolve, reject) {
    let waitSelector = currentTab.waitForSelector(selector);
    waitSelector.then(function () {
    let click = currentTab.click(selector);
    click.then(function() {
         resolve();
    }).catch(function (err) {
        reject(err);
    })})})
    return myPromise;
}