const dbConnect = require('./mongodb');
const deleteData = async () =>{
    let data =  await dbConnect();
    let result = await data.deleteMany({name:"Note 6"})
      console.log(result); 
      if(result.acknowledged){
        console.log("record Deleted")
      }
}
deleteData();