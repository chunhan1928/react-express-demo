import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const instance = axios.create({ baseURL: "http://localhost:8080" });
  const [getReqReslt, setGetReqResult] = useState("none");
  const [movie, setMovie] = useState("");
  const [comment, setComment] = useState("");
  return (
    <div id="app">
      <section id="getSection">
        <h2>GET Request Section</h2>
        <button
          onClick={() => {
            getRequest("/");
          }}
        >
          GET / Request
        </button>
        <button
          onClick={() => {
            getRequest("/movies");
          }}
        >
          GET /movies Request
        </button>
        <div>
          GET Request Result: <b> {getReqReslt} </b>
        </div>
      </section>
      <section id="postSection">
        <h2>POST Request Section</h2>
        <form>
          <label htmlFor="movieName">movie name</label>
          <input
            type="text"
            name="movieName"
            id="movieName"
            onChange={(e) => {
              setMovie(e.target.value);
            }}
          />
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            name="comment"
            id="comment"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              postRequest(movie, comment);
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );

  async function getRequest(path) {
    try {
      const { data } = await instance.get(path);
      console.log("response data: ", data);
      setGetReqResult(JSON.stringify(data));
    } catch (err) {
      console.error(err);
    }
  }

  async function postRequest(movie, comment) {
    try {
      const { data } = await instance.post("/movie", { name: movie, comment });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
}

export default App;
