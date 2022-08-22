const express = require("express");
const cors = require("cors");
const Countries = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", async (req, res) => {
//   const snapshot = await Countries.get();
//   const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   res.send(list);
// });

app.get("/", async (req, res) => {
  //res.send("hello");
  const serial = req.query.serial;
  res.redirect(
    `https://pocketalks.bjitgroup.com/sl/ptapp-serial/?serial=${serial}`
  );
});
//todo stage
app.get("/redirect_stage", async (req, res) => {
  //res.send("hello");
  const serial = req.query.serial;
  res.redirect(req.baseUrl + `/sl/ptapp-serial_test?serial=${serial}`);
  // res.redirect(`/sl/ptapp-serial_test?serial=${serial}`);
});
//todo production
app.get("/redirect_production", async (req, res) => {
  //res.send("hello");
  const serial = req.query.serial;
  res.redirect(`/sl/ptapp-serialt?serial=${serial}`);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  // console.log(data);
  await Countries.add({ data });
  res.send({ msg: "Countries Added" });
});

app.post("/update", async (req, res) => {
  const id = req.body.id;
  //console.log(id);
  delete req.body.id;
  const data = req.body;
  await Countries.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await Countries.doc(id).delete();
  res.send({ msg: "Deleted" });
});
// app.listen(4000, () => console.log("Up & RUnning *4000"));
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
