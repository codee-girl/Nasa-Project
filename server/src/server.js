//if the port is not defined runs the defult port at 8000
// const PORT = process.env.PORT || 8000;

const http = require("http");
const mongoose = require('mongoose');

const app = require("./app");

const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;
const MONGO_URL = 'mongodb+srv://nasa-api:i7R7YqPjWyqM8PT@nasacluster.vrnzb.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open' , () =>{
  console.log('MongoDB Connection Ready');
});
mongoose.connection.on('error' , (err) =>{
  console.error(err);
})

async function startServer(){
  
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser : true,
    // useFindAndModify : false,
    // useCreateIndex : true,
    useUnifiedTopology: true,
  });

  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Lisitng to port ${PORT}....`);
  });
  
}

startServer();
