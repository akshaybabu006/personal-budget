const express = require("express")
const nameModel = require("./model/names_schema")
const router = express.Router()

router.get("/budget", async (req, res) => {
	const posts = await nameModel.find()
	res.send(posts)
})

//To call this API send title, relatedValue, color in params, shown in ss
router.post("/add", async (req, res) => {
    try{
        const post = new nameModel({
            title: req.query.title,
            relatedValue: req.query.relatedValue,
            color: req.query.color,
        })
        await post.save()
        res.send(post)

    }catch(e){
        res.status(404)
		res.send({ error: e })

    }
	
})

module.exports = router