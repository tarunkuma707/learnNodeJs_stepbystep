// const { error } = require('console');
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// if (!fs.existsSync(dirPath)){
//     fs.mkdirSync(dirPath);
// }
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'This is simple file');
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath,'This is appended file',(err)=>{
//     if(!err) console.log("file updated");
// }
// );

// const { rejects } = require("assert");
// const { resolve } = require("path");

// // fs.rename(filePath,`${dirPath}/fruit.ext`,(err)=>{
// //     if(!err) console.log('File Renamed');
// // })

// // fs.unlinkSync(filePath,(err)=>{
// //     if(!err) console.log("file deleted");
// // })

// let a = 10;
// let b = 0;
// let waitingData = new Promise((resolve,rejects)=>{
//     setTimeout(() => {
//         resolve(30);
//     }, 5000);
// })

// waitingData.then((data)=>{
//     b = data;
//     console.log(a+b);
// }).catch((err)=>console.log(err));
//console.log("Hello home");
// const express = require('express');
// const path = require('path');
// const app = express();
// const publicPath = path.join(__dirname,'public');
// app.set('view engine','ejs');
//app.use(express.static(publicPath));
//app.use(express.static(path.join(__dirname, 'public')));
// app.get('',(__,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`);
// });

// app.get('/about',(__,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// });

// app.get('/help',(__,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`);
// });

// app.get('/profile',(__,resp)=>{
//     const user ={
//         name:'Tarun',
//         email:'tarunkuma07@gmail.com',
//         city:'Chandigarh',
//         skills: [
//             'PHP',
//             'JS',
//             'Jquery'
//         ]
//     }
//     resp.render('profile',{user});
// });

// app.get('/login',(__,resp)=>{    
//     resp.render('login');
// });

// app.use((req, res, next) => {
//     res.sendFile(`${publicPath}/notvalidpage.html`);
//   });
// app.listen(3000);
////////////// Middle Ware ///////////
// const express = require('express');
// const app = express();
// const reqFilter = require('./middleware');
// const route = express.Router();
// route.use(reqFilter);
// //app.use(reqFilter);
// app.get('/',(req,resp)=>{
//     resp.send('Welcome to home page')
// })

// route.get('/users',(req,resp)=>{
//     resp.send('Welcome to users page')
// })
// route.get('/about',(req,resp)=>{
//     resp.send('Welcome to about page');
// });

// route.get('/contact',(req,resp)=>{
//     resp.send('Welcome to Contact page');
// });

// app.use('/',route);
// app.listen(5000)

//////////// Mongo Db connectivity /////////////
//  const dbConnect = require('./mongodb');
// // dbConnect().then((resp) => {
// //     resp.find().toArray().then((data) => {
// //         console.log(data);
// //     });
// // });
// const main = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data);
// }
// main()
////////////////// Mongo db Sepreate file connection //////////////////
////////////////// Mongoose Validations ////////////////
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm");
const productSchema =  new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDB = async() => {   
    const Products = mongoose.model('products',productSchema);
    let data = new Products({name:"m10",price:1000,brand:"MicroMax",category:"Mobile"});
    let result  = await data.save();
    console.log(result);
}
const updateDB= async ()=>{
    const Product = await mongoose.model('products',productSchema);
    let data = await Product.updateOne(
        { name:"Max 5" },
        {
            $set : {
                price:700
            }
        }
    );
    console.log(data);
}


const deleteInDB = async () => {
    const Product = await mongoose.model('products',productSchema);
    let data = await Product.deleteOne({
        name:'m40'
    })
}
updateDB();
deleteInDB();