import "./App.css";
import NavbarTop from "./components/NavbarTop";
import Hotpicks from "./components/Hotpicks";
import { useEffect, useState } from "react";
import data from "./data/btcdata.json";
import AllStocks from "./components/AllStocks";
import Pagnation from "./components/Pagnation";

function App() {
  const [info, setInfo] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(18);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentposts = info.slice(firstPostIndex, lastPostIndex);
  const nextLimit = Math.ceil(info.length / postPerPage);
  const [searchWord, setsearchWord] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  const searchHandler = (searchWord) => {
    setsearchWord(searchWord);
    if (searchWord !== "") {
      const newInfo = info.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      });
      setsearchResults(newInfo);
    }
    else {

    }
  };

  const nextPage = () => {
    if (nextLimit === currentPage) {
      return;
    }
    setcurrentPage(currentPage + 1);
    console.log(nextLimit);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }
    setcurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div>
      <NavbarTop word={searchWord} searchHandler={searchHandler} />
      <Hotpicks info={info} />
      <AllStocks info={searchWord.length < 1 ? currentposts : searchResults} />
      <Pagnation nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default App;
