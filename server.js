require("dotenv").config();

const express = require("express");
const createErrors = require("http-errors");
const UserRouter = require("./routes/user.route");

require("./helpers/connections_mongodb");
const client = require('./helpers/connections_redis')

// client.set('foo', 'loc')
// client.get('foo', (err, result)=>{
//     if(err) throw createErrors.BadRequest()
//     console.log(result)
// })
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
  console.log("A::::::", a);
  res.send("Home Page");
});
app.use("/users", UserRouter);

app.use((req, res, next) => {
  // const error = new Error("Not Found")
  // error.status = 404;
  next(createErrors.NotFound("This route does not exist"));
});

app.use((err, req, res, next) => {
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
