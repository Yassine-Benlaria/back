const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Sous_chapitre = require("./models/Sous_chapitre.model")
const Chapitre = require("./models/chapitre.model")
const Article = require("./models/article.model")


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established succesfully");
})

const chapitreRouter = require('./routes/chapitres');
const sous_chapitreRouter = require('./routes/sous_chapitres');
const articleRouter = require('./routes/articles');

app.use('/chapitres', chapitreRouter);
app.use('/sous_chapitres', sous_chapitreRouter);
app.use('/articles', articleRouter);


//search
app.get('/search/:text', (req, res) => {
    var regex = new RegExp(req.params.text,'i');
   const searchResult = []
    Chapitre.find({titre: regex})
        .then((result) => {
            searchResult.push(result);

            Sous_chapitre.find({titre: regex})
            .then((result) => {
                searchResult.push(result);
                Article.find({titre: regex})
                .then((result) => {
                    searchResult.push(result);
                    res.json({
                        chapitres : searchResult[0],
                        sous_chapitres : searchResult[1],
                        articles : searchResult[2]
                    });
                })
                .catch((err) => res.status(400).json("Error:" + err));
            })
            .catch((err) => res.status(400).json("Error:" + err));
        })
        .catch((err) => res.status(400).json("Error:" + err));
});


app.listen(port, ()=>{
    console.log('server is running on port: ' + port);
});