const express=require('express')
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("index",{title:'index page'})
   
   
})

router.get("/notes",(req,res)=>{
    res.render("notes",{title:'notes'})
})

router.get("/about",(req,res)=>{
    res.render("about",{title:'about page'})
})

router.get("/courses",(req,res)=>{
    res.render("courses",{title:'courses page'})
})

router.get("/notes",(req,res)=>{
    res.render("notes",{title:'notes page'})
})



router.get("/contact",(req,res)=>{
    res.render("contact",{title:'contact page'})
})

router.get("/blogs",(req,res)=>{
    res.render("blogs",{title:'blogs page'})
})

router.get("/html",(req,res)=>{
    res.render("html",{title:'html page'})
})
router.get("/css",(req,res)=>{
    res.render("css",{title:'css page'})
})
router.get("/js",(req,res)=>{
    res.render("js",{title:'js page'})
})
router.get("/c",(req,res)=>{
    res.render("c",{title:'c page'})
})
router.get("/cplus",(req,res)=>{
    res.render("cplus",{title:'c++ page'})
})
router.get("/java",(req,res)=>{
    res.render("java",{title:'java page'})
})

router.get("/notes/docs/html.pdf",(req,res)=>{
    res.download("./public/docs/html.pdf")
})
router.get("/notes/docs/css.pdf",(req,res)=>{
    res.download("./public/docs/css.pdf")
})
router.get("/notes/docs/js.pdf",(req,res)=>{
    res.download("./public/docs/js.pdf")
})
router.get("/notes/docs/c.pdf",(req,res)=>{
    res.download("./public/docs/c.pdf")
})
router.get("/notes/docs/java.pdf",(req,res)=>{
    res.download("./public/docs/java.pdf")
})
router.get("/notes/docs/htmlcheatsheet.pdf",(req,res)=>{
    res.download("./public/docs/htmlcheatsheet.pdf")
})
router.get("/notes/docs/csscheatsheet.pdf",(req,res)=>{
    res.download("./public/docs/csscheatsheet.pdf")
})
router.get("/notes/docs/javascript-Cheat-Sheet.pdf",(req,res)=>{
    res.download("./public/docs/javascript-Cheat-Sheet.pdf")
})
router.get("/notes/docs/C.CheatSheet.pdf",(req,res)=>{
    res.download("./public/docs/C.CheatSheet.pdf")
})
router.get("/notes/docs/JavaCheatSheet.pdf",(req,res)=>{
    res.download("./public/docs/JavaCheatSheet.pdf")
})


module.exports=router