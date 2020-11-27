const { connect } = require('http2')
const mongoose = require('mongoose')


// Creating the connecttion and creating the database
mongoose.connect("mongodb://localhost:27017/suhastest",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{console.log("Connection created...")}).catch((err)=>{console.log(err)})

// Creating the schema 
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// creating the models 
const Playlist = new mongoose.model("Playlist",playlistSchema)

// Simple method to add document 
// const reactPlaylist = new Playlist({
//     name:"React Js",
//     ctype:"Front End",
//     videos:80,
//     author:"Suhas Kamble",
//     active:true,
   
// })

// reactPlaylist.save()


// async await method to add document
// const createDocument = async()=>{
//     try{
//         const nodePlaylist = new Playlist({
//             name:"Node Js",
//                 ctype:"Back End",
//                 videos:50,
//                 author:"Suhas Kamble",
//                 active:true,
//         })
//         const result = await nodePlaylist.save()
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
   

// }


// createDocument()


// Inserting many Documents 
const createDocuments = async()=>{
    try{
        const expressPlaylist = new Playlist({
            name:"Express Js",
                ctype:"Back End",
                videos:50,
                author:"Suhas Kamble",
                active:true,
        })
        const jsPlaylist = new Playlist({
            name:"Javascrip",
                ctype:"Front end",
                videos:130,
                author:"Suhas Kamble",
                active:true,
        })
        const pythonPlaylist = new Playlist({
            name:"Python",
                ctype:"Back End",
                videos:124,
                author:"Suhas Kamble",
                active:true,
        })
        const result = await Playlist.insertMany([expressPlaylist,jsPlaylist,pythonPlaylist])
        console.log(result)
    }catch(err){
        console.log(err)
    }
   

}


// createDocuments()

// const getDocument = async()=>{
//     const result = await Playlist.find({ctype:"Back End"}).select({name:1}).limit(2)
//     console.log(result)
// }

// getDocument()

// Operator in MongoDb
// https://docs.mongodb.com/manual/reference/operator/query/



// const getDocument= async ()=>{
    // 1.gt
    // const result = await Playlist.find({videos: {$gt:50}}).select({name:1})

    // 2.gte 
    // const result = await Playlist.find({videos:{$gte:50}}).select({name:1})  
    
    // 3.lt
    // const result = await Playlist.find({videos:{$lt:100}}).select({name:1})     
    
    // 4.lte 
    // const result = await Playlist.find({videos:{$lte:100}}).select({name:1}) 
    
    // 5.in
    // const result = await Playlist.find({ctype:{$in:['Back End',"Front End"]}}).select({name:1})                   

    // console.log(result)
// }

// getDocument()



// Logical Operator  
// https://docs.mongodb.com/manual/reference/operator/query-logical/
// const getDocument = async ()=>{
//     // 1.or 
//     // const result = await Playlist.find({$or:[{ctype:"Back End"},{author:"Suhas Kamble"}]}).select({name:1})
//     // 2 And 
//     const result = await Playlist.find({$and:[{ctype:"Back End"},{videos:50}]}).select({name:1})
//     console.log(result)
// } 

// getDocument()



// Update The Document 

// const upateDocument = async (id)=>{
//     const result = await Playlist.updateOne({_id:id},{$set:{
//         name:"JavaScript"
//     }})
//     console.log(result)
// }

// upateDocument("5fbcce122bf7442f98754631")


// delete the document

const deleteDocumemt=async (id)=>{
    const result =await Playlist.deleteOne({_id:id})
    console.log(result)
}

deleteDocumemt("5fbcce122bf7442f98754630")
