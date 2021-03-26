const express =require('express') ;
var session = require('express-session')
const path = require('path');
const fs = require('fs');
const cors = require('cors');
var schedule = require('node-schedule');
const fileUpload = require('express-fileupload');


var cookieParser = require('cookie-parser');

const { ApolloServer, gql } =require('apollo-server-express') ;
const { fileLoader, mergeResolvers }= require('merge-graphql-schemas');

const models = require('./database/models')

const app = express();
const typeDefs =gql`${fs.readFileSync(__dirname.concat('/schema/schema.graphql'))}`;
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));
const {getMe} = require('./middleware/authJWT')

require('dotenv').config()
const APP_PATH= process.env.APP_PATH 

app.use(fileUpload());


app.use(cors());

app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  
  let sampleFile = req.files.file;

  // Use the mv() method to place the file somewhere on your server
  file_path = '/files/bg/' + sampleFile.name
  sampleFile.mv(APP_PATH + file_path, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send(file_path);
  });
});


app.use(express.static('public'))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async({req}) => {
    const me = await getMe(req);
    return {        
        models,
        me,
        SECRET: process.env.SECRET                   
    }
  }
});

server.applyMiddleware({ app, path: '/api' });

app.listen({ port: 3000 }, () => {
  console.log('Apollo Server on http://localhost:3000/api');
});