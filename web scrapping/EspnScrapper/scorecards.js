const request = require("request");
const cheerio = require("cheerio");
const fs= require("fs");
const xlsx = require("xlsx");

function getInfoFromScorecard(url){
    // we have url of a scorecard and we want a html of the scorecard 
    // console.log("from scorecards.js",url);
    request(url,cb);
}
function cb(err,res,body){
    if(err){
        console.log(err);
    }
    else { 
        getMatchDetails(body);
    }
}
function getMatchDetails(html){
    //selector tool contains html of ith scorecard
    let selecTool = cheerio.load(html);
    //1 get venue
    //2 get date
    //we have used descended slector below
    let desc = selecTool(".match-header-info.match-info-MATCH");
    // console.log(desc.text());
    let decArr= desc.text().split(",");
    //Match (N), Abu Dhabi, Oct 25 2020, Indian Premier League
    // console.log(descArr);
    let dateOfMatch = decArr[2];
    let venueOfMatch = decArr[1];
    console.log("Date of the Match : "+dateOfMatch);
    console.log("Venue of the match : " +venueOfMatch);
    //3 get result
    let matchResult =selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text");
        console.log("Result : "+matchResult.text());

    //4 get team names

}
function processInformation(dateOfMatch,venueOfMatch,matchResult,team1,team2,playerName,runs,balls,numberOf4,numberOf6,sr){
    let teamNamePath = path.join(__dirname,"IPL",team1);
    if(!fs.existsSync(teamNamePath)){
        fs.mkdirSync(teamNamePath);
    }
}
let playerPath=path.join(teamNamePath, playerName+".xlsx");
let content=excelReader(playerPath,playerName);

function excelReader(playerPath,playerName){
    if(!fs.existsSync(playerPath)){
        return[];
    }
}

let playerObj = {dateOfMatch,venueOfMatch,matchResult,team1,team2,playerName,runs,balls,numberOf4,numberOf6,sr};
content.push(playerObj);
excelWriter(playerPath,content,playerName)

function excelWriter(playerPath, jsObject, sheetName){
    //create a new workbook
    let newWorkbook = xlsx.utils.book_new();
    //convert an array of jsobject into a worksheet
    let newWorksheet = xlsx.utils.json_to_sheet(jsObject);
    //it appends the workshhet to a workbook
    xlsx.utils.book_append_sheet(newWorkbook,newWorksheet,sheetName);
    xlsx.writeFile(newWorkbook, playerPath);
}

//visit every scorecard and get the info
module.exports = {
    gifs:getInfoFromScorecard
}