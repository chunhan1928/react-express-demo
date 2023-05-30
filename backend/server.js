import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

let movies = [
  { name: "靈魂急轉彎", comment: "發人深省、重新思考人生" },
  {
    name: "樂來樂愛你",
    comment: "用色活潑的音樂劇，超推",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!!!");
  console.log("GET / Request responded!");
});

app.get("/movies", (req, res) => {
  res.json({ movies });
  console.log("GET movies/ Request responed!");
});

app.post("/movie", (req, res) => {
  console.log(req.body);
  movies.push(req.body);
  res.status(200);
});

app.listen(8080, () => {
  console.log("server running on PORT 8080");
});
