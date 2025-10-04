import multer from "multer";

const storage = multer.diskstorage({
    destination: function(req,file,cb){
        cb(null, "./Public/temp")
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage
})