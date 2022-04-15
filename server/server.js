const express = require("express");
// const mongoose = require("mongoose");

const app = express();

// mongoose.connect("mongodb+srv://pracbook_id:FPD4QI4Vnzz1dQ1R@clusterpracbook.im9qm.mongodb.net/Pracbook?retryWrites=true&w=majority");
// mongoose.connection.on("connected", () => {
//     console.log("connected to mongo.");
// })
// mongoose.connection.on("error", (err) => {
//     console.log(err);
// })

app.listen(2000, () => {
    console.log("server started..");
})