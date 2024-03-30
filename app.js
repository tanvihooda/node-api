const express = require("express");
const app = express();

const hii = require("mysql");

// const db = hii.createConnection({
//     host: "localhost",
//         user: "root",
//         password: "",
//         database: "data1"
// });

// db.connect((error)=>{
//     if(error){
//         console.log(error);
//     } else{
//         console.log("Mysql connected");
//     }
// });


app.use(express.urlencoded({extended: false}));
app.use(express.json());

const jsondata = {name:"tanu singh", age: "twenty"};

app.get("/home", (req, res)=>{
    res.send("This is Home page of goexam.");
});

app.get("/jsondata", (req, res)=>{
  res.send(jsondata);
})

app.get('/data', (req, res) => {
    // Perform a query
    db.query('select id, name, title, msg from tanu', (error, results, fields) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
        res.status(500).send('Error retrieving data from database');
        return;
      }

      results.forEach((row) => {
        console.log(row.name);
        res.send(row); // Replace 'fieldName' with the actual field name
      });

    });
  });


    
  




  const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server started on Port ");
})