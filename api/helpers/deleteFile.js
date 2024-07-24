const fs = require('fs').promises;

const deleteFile = async(filePath) => {
    try{

        fs.unlink(filePath)

    } catch(error){
        console.log(error.message);
    }
}

module.exports = {
    deleteFile
}