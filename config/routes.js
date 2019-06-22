module.exports = router => {
    router.get("/", (req,res)=> {
        res.render("index")
    })
    router.get("/svd", (req,res)=>{
        res.render("savedArticles")
    })
}