//connec to database
let db;
let openRequest= indexedDB.open('myDatabase');

opendRequest.addEventListener('success',()=>{
    console.log('db connnected');
    db=openRequest.result;
})
openRequest.addEventListener('upgradeneeded',()=>{
    console.log("dataBase upgraded OR dataBase intialized"̀);
    db=openRequest.result;
})
openRequest.addEventListener('error',()=>{
    console.log("dataBase Error")
})