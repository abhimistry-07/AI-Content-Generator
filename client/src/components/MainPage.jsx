import React, { useState } from "react";
import axios from "axios";
import "./MainPage.css";

function MainPage() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState("");
  const [thing, setThing] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://server-5loa.onrender.com/search?thing=${thing}&keyword=${keyword}`
      );
      setData(response.data.search);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Data:", error);
    }
  };

  const Loader = () => {
    return (
      <div className="loader-container" style={{ marginTop: "20px" }}>
        <div className="spinner"></div>
      </div>
    );
  };

  return (
    <div>
      <h1>{thing ? thing : "Welcome"}</h1>
      <div id="flexContainer">
        <input
          style={{
            margin: "auto",
            width: "180px",
            border: "0px",
            borderRadius: "10px",
            padding: "12px",
          }}
          type="text"
          placeholder="Enter a keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <select
          style={{
            margin: "auto",
            width: "180px",
            border: "0px",
            borderRadius: "10px",
            padding: "12px",
          }}
          name=""
          onChange={(e) => setThing(e.target.value)}
          id="selectWhatToSearch"
        >
          <option value="">Select</option>
          <option value="Shayari">Shayari</option>
          <option value="Joke">Joke</option>
          <option value="Story">Story</option>
          <option value="Quote">Quote</option>
        </select>
        <button
          style={{
            width: "180px",
            margin: "auto",
          }}
          onClick={fetchData}
        >
          Generate {thing ? thing : "Data"}
        </button>
      </div>

      {loading ? <Loader /> : ""}

      {data && !loading ? (
        <div id="container">
          <h2>{thing ? thing : "Data"}:</h2>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>{data}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainPage;
