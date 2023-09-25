const express = require('express')
const morgan = require('morgan')

const {
    globalErrHandler,
    notFoundErr,
  } = require("../middlewares/globalErrHandler");

const app = express();
app.use(express.json());
app.use(morgan('dev'))

const leavesRouter = require("../routes/leaves/leaveRouter");

//Routes
app.use("/api/v1/leaves", leavesRouter);

//404 error
// app.use("*", (req, res) => {
//     console.log(req.originalUrl);
//     res.status(404).json({
//       message: `${req.originalUrl} - Route Not Found`,
//     });
//   });

//Error middlewares
app.use(notFoundErr);
app.use(globalErrHandler);
console.log(`inside App => ${app}`);
module.exports = app;