const dbConnect = require('./mongodb');

const insert = async () =>{
    const db =  await dbConnect();
    const docs = [
        {
            name:'Max 5',
            brand:'VIVO',
            price:1000,
            category:'Mobile'
        },
        {
            name:'Note 5',
            brand:'VIVO',
            price:1000,
            category:'Mobile'
        }
      ];
      // Prevent additional documents from being inserted if one fails
      const options = { ordered: true };
    const result = await db.insertMany(docs, options)
    if(result.acknowledged){
        console.log(result);
    }
    
}

insert();