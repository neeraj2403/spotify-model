const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.listen(3001, () => {
    console.log("yey");

}
);

const sqlite3 = require("sqlite3").verbose();
// let sql;

const db = new sqlite3.Database("./spotify.db", sqlite3.OPEN_READWRITE, (err) =>{
    if(err) return console.log(err.message);
    else return console.log("connected")
});



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


// db.getConnection(function (err,connection) {
//     if (err) {
//       console.log(err);
//     }
//   });



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



app.post("/addSong", (req,res) =>{
    const name = req.body.name;
    const dor = req.body.dor;
    const artist = req.body.artist;
    const rating = 0;
    const users = 0
    // console.log(dob)
    
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
