const fs=require("fs"); //fsmodule
const path=require("path") //pathmodule
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}
function organise(srcPath){
    if(srcPath==undefined){
        //the process.cwd() method returns the current workingdirectory of the Node.js process.
        //console.log(srcpath); //undefined 
        srcPath=process.cwd();
        //console.log(srcPath);
    }
    let organisedFiles = path.join(srcPath,"organized_files");
    // console.log('organised files folder path is ", organisedFiles);
    if(fs.existsSync(organisedFiles)==false){//organisedfiles naam ka folder exist nhi krta to ek folder 
    //bana do warna rhne do
        fs.mkdirSync(organisedFiles);
    }
    else console.log("folder already exits");
  //3. scan the entire srcPath(doenloads folder in this case)

  //Reads the contents of the directory.-> basically reads the names of files present in directory
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);

//4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for (let i = 0; i < allFiles.length; i++){
        // // let ext = allFiles[i].split(".")[1];
        // let ext = path.extname(allFiles[i]);
        // console.log(ext);
        let fullPathOfFile=path.join(srcPath, allFiles[i]);
        //1.check if it is a file or a folder
        //lstatsync gives the information regarding the link provided,
        let isFile= fs.lstatSync(fullPathOfFile).isFile();
        console.log(allFiles[i]);
        if(isFile){
            //1.1 get ext name
            let ext = path.extname(allFiles[i]).split(".")[1];
            //1.2 get folder name from extension 
            let folderName= getFolderName(ext);
            //1.3 copy from src folder (srcpath) and paste in dest folder (folder_name)

        }

}




//(paste your own path) let srcPath="/Users/abhishekgoel/Desktop/Desktop/AbhishekGoel/FJP5/Node/fileOrganizer/downloads"
organize(srcPath);
//adskjdaksjcskjbvcksjl
