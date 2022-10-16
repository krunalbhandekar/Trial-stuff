const router=require("express").Router()
const Movie=require("../models/Movie")

const Data=require("../config/data.json")


router.get("/try",async(req,res)=>{
	const data=await Movie.aggregate([{$group:{_id:"$name",maxMarks:{$max:"$marks"}}}])
	res.send(data)
})
router.get("/try1",async(req,res)=>{
	const data=await Movie.find( { name : { $gte : "k" , $lte : "z" } } )
	console.log('data:', data)
	res.send(data)
})

// const insertMovies = async () => {
//     try {
//         const docs = await Movie.insertMany(Data);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertMovies()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports = router;