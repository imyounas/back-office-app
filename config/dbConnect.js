const mongoose = require('mongoose');

const dbConnect = async()=>{
      
    try{
        //console.log(`DB Connection ${process.env.MONGO_CONNECTION_URL}`);
        await mongoose.connect(process.env.MONGO_CONNECTION_URL);
        console.log('DB Connection has been successfully established !');
    }
    catch(err){
        console.log(`Some error while connecting to DB. Error => [${err}]`);
        process.exit(1);
    }
}

dbConnect();