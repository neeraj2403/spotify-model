const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

//  CONNECT TO SERVER
app.listen(3001, () => {
    console.log("yey");

}
);

// CONNECT TO DATABSE
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./spotify.db", sqlite3.OPEN_READWRITE, (err) =>{
    if(err) return console.log(err.message);
    else return console.log("connected")
});

// GET ARTIST NAME
app.get('/getArtist',(req,res) => {
    db.all("SELECT id,Name FROM Artist",(err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            console.log("sucess")
            console.log(result)
        }
    }
    )
})

// GET SONG DATA
app.get('/getData',(req,res) => {
    db.all("SELECT * FROM Songs ORDER BY Average_rating DESC",(err,result) =>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
            // rate = res.Average_rating
            
            console.log("sucess")
            console.log(result)
        }
    }
    )
})

// ADD ARTIST
app.post("/addArtist", (req,res) =>{
    const name = req.body.name;
    const dob = req.body.dob;
    const bio = req.body.bio;
    console.log(dob)
    
    db.run(
        "INSERT INTO Artist (Name,DOB,Bio) VALUES (?,?,?)",
        [name,dob,bio],
        (err,result) =>{
            if(err) {
                console.log(err)
            }else{
                res.send("values inserted")
            }
        }
    );


});

// ADD SONG
app.post("/addSong", (req,res) =>{
    const name = req.body.name;
    const dor = req.body.dor;
    const artist = req.body.artist;
    const rating = 0;
    const users = 0
    
    db.run(
        "INSERT INTO Songs (Name,Date_of_release,Artist,Average_rating,no_users) VALUES (?,?,?,?,?)",
        [name,dor,artist,rating,users],
        (err,result) =>{
            if(err) {
                console.log(err)
            }else{
                
                res.send("values inserted")
            }
        }
    );


});

// UPDATE THE RATING
app.put("/addRating", (req,res) =>{
    const name = req.body.name;
    const rating = req.body.rating;
    const no_users = req.body.no_users;
    const avg_rating = req.body.avg_rating;
    console.log(req.body)
  
    
    db.run(
        "UPDATE Songs SET Average_rating = ?,no_users = ? WHERE Name = ?",
        [(rating + avg_rating*no_users)/(no_users+1),no_users + 1,name],
        (err,result) =>{
            if(err) {
                console.log(err)
            }else{
                res.send("values inserted")
                console.log("sucess")
            }
        }
    );


});

