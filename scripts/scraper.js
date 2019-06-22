const request = require("request");
const cheerio = require("cheerio");

const scraper = function(cb){
    request("http://www.nytimes.com", (err,res,body)=>{
        let articles = [];
        cheerio.load(body)(".return-summary").each()
    })
}