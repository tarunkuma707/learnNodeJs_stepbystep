const dbConnect = require('./mongodb');
const updateData = async () =>{
    let data =  await dbConnect();
    let result = await data.updateOne(
        { name: "m40" }, {
          $set: {
              price: 300,
              brand: "sam"
            }
        }
      );
      console.log(result);    
}
updateData();