import David from "./images/david.png";
import { ReactComponent as WKIT } from "./images/wkit.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import PageTwo from "./pages/pageTwo";
import PageThree from "./pages/pageThree";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const App = (): JSX.Element => {
  return (
    <>
      <header>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/pageTwo">Page two</Link>
          </Button>
          <Button>
            <Link to="/pageThree">Page three</Link>
          </Button>
        </ButtonGroup>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pageTwo" element={<PageTwo />} />
        <Route path="/pageThree" element={<PageThree />} />
      </Routes>
      <footer>
        <img src={David} alt="David smiling" style={{ width: "25vw" }} />
        <span style={{ fontSize: "6vw", paddingBottom: "6vw" }}>💚</span>
        <WKIT
          style={{
            width: "20vw",
            paddingBottom: "7.5vw",
          }}
        />
      </footer>
    </>
  );
};

export default App;
