import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 46px;
`;

const Label = styled.h3`
  margin-top: ${(props) => (props.prefix ? "8vh" : "12vh")};
  margin-bottom: 5vh;
`;

const Input = styled.input`
  width: 50vw;
  border-radius: 8px;
  border: 1px solid black;
  height: 25px;
  min-width: 200px;
  &:focus {
    border: 1px solid blue;
    outline: none;
    box-shadow: 0 0 2px 2px #888;
  }
`;

const UrlItem = styled.div`
  margin: 20px 0;
`;

const Submit = styled.button`
  margin: 30px 20vw;
  align-self: center;
  color: "white";
  font-size: 1em;
  padding: 0.45em 1.5em;
  border: 2px solid #354d9e;
  border-radius: 3px;
  background-color: #189fe3;
`;

function App() {
  const [url, setUrl] = useState("");
  const [prefix, setPrefix] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleChange = (event, target) => {
    if (target === "url") {
      setUrl(event.target.value);
    } else {
      setPrefix(event.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url.length < 8) {
      alert("Please enter valid URL");
    }
    try {
      const { data: postedUrlResult } = await axios.post("/", {
        hello: "dedede",
        url,
        prefix,
      });
      const newUrl = {
        originalUrl: postedUrlResult.url,
        link: `http://localhost:3001/${postedUrlResult.prefix}`,
      };
      setShortenedUrls((prev) => [newUrl, ...prev]);
      localStorage.setItem(
        "urls",
        [newUrl, ...shortenedUrls]
          .map((url) => JSON.stringify(url))
          .join("#$&splitingSpot&$#")
      );
      Swal.fire(`succesfully shortened ${url}`, "", "success");
    } catch (e) {
      if (e.response?.status === 429) {
        Swal.fire("please wait 15 seconds between each request", "", "error");
      } else if (e.response?.status === 400) {
        Swal.fire(e.response.data?.message, "", "error");
      }
    }
  };

  useEffect(() => {
    let listOfUrls = localStorage.getItem("urls");
    if (listOfUrls) {
      listOfUrls = listOfUrls
        .split("#$&splitingSpot&$#")
        .map((url) => JSON.parse(url));

      setShortenedUrls(listOfUrls);
    }
  }, []);

  return (
    <div className='App'>
      <Main>
        <header>
          <Title>URL Shoretener</Title>
        </header>
        <form onSubmit={handleSubmit}>
          <Label>Enter the url that you want to get shorter</Label>
          <Input
            type='text'
            value={url}
            required
            onChange={(e) => handleChange(e, "url")}
          ></Input>
          <Label prefix='true'>Enter prefix for the url if you want</Label>
          <Input
            type='text'
            value={prefix}
            onChange={(e) => handleChange(e, "prefix")}
          ></Input>
          <br />
          <Submit type='submit'>submit</Submit>
        </form>
        <ul>
          <h3>List of your shortened urls</h3>
          {shortenedUrls.map((url) => {
            return (
              <UrlItem key={url.link}>
                original link: {url.originalUrl}
                <br />
                Shortened Link: <a href={url.link}>{url.link}</a>
              </UrlItem>
            );
          })}
        </ul>
      </Main>
    </div>
  );
}

export default App;
