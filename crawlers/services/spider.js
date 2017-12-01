const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

var thread = "/r/Brazil";

exports.crawler = function(list) {

    var array = list.split(';');
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        
        var url = "https://www.reddit.com/r/" + array[i];

        request(url, (err, resp, body) => {
            if (err) {
                console.log(err);
                return;
            }
            var $ = cheerio.load(body);
            $("div#siteTable > div.link").each(async function () {
                var titulo = $(this).find("p.title a.title").text().trim();
                var score = $(this).attr("data-score");
                var linkThread = $(this).find("p.title  > a").attr("href");
                var linkComentarios = $(this).find("a.bylink.comments.may-blank").attr("href");
                var subreddit = $(this).attr("data-subreddit");
                if (score > 5000) {
                    await fs.appendFileSync(`./services/${array[i]}.txt`, score + " "
                        + titulo + " "
                        + linkThread + " "
                        + linkComentarios + " "
                        + subreddit + "\n"
                    );
                }

            });
        });

    }
}

