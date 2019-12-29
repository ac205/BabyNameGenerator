import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import ReactDOM from "react-dom";
import NamesList from "./components/NamesList";
import Favorites from "./components/Favorites";
import Messages from "./components/Messages";
import AddName from "./components/AddName";
import ConfirmDelete from "./components/ConfirmDelete";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Loading from "./components/Loading";
import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const favNamesDB = firebase.database();
const namelist = favNamesDB.ref("namelist/");
let currentData = [];

export default function App() {
  const [nameList, setNameList] = useState([]);
  const [favNames, setFavNames] = useState([]);
  const [message, setMessage] = useState("");
  const [msgGood, setMsgGood] = useState(true);
  const [popMessage, setPopMessage] = useState(false);
  const [open, setOpen] = useState(false);
  const [addNameOpen, setAddNameOpen] = useState(false);
  const [currentId, setCurrentId] = useState();

  const regions = [
    "&region=australia",
    "&region=england",
    "&region=canada",
    "&region=france",
    "&region=ireland",
    "&region=italy",
    "&region=new zealand",
    "&region=united states"
  ];

  const url = `https://uinames.com/api/?${
    regions[Math.floor(Math.random() * regions.length)]
  }&gender=male&maxlen=11&amount=25`;

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  const getNames = () => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        await setNameList(json);
      } catch (e) {
        alert("Too Many Request Try Again Later");
      }
    }
    fetchData();
  };

  useEffect(() => {
    const gotData = data => {
      currentData = data.val();
      currentData === null ? setFavNames([]) : setFavNames(currentData);
    };
    const errData = error => {
      console.log("Error!", error);
    };
    namelist.on("value", gotData, errData);
  }, []);

  const handleClick = (event, name) => {
    let id;
    addNameOpen ? (id = name) : (id = event.currentTarget.id);
    let newName = {
      name: id
    };
    let findDup = favNames.filter(favname => favname.name === String(id));
    if (findDup.length === 0) {
      let newList = [...favNames, newName];
      setFavNames(newList);
      namelist.set(newList);
      setMsgGood(true);
      setMessage("Name Added To Favorites!");
      setPopMessage(true);
    } else {
      setMsgGood(false);
      setMessage("Duplicate Name");
      setPopMessage(true);
    }
  };

  const handleButton = () => {
    getNames();
  };

  const handleAddName = () => {
    setAddNameOpen(true);
  };

  const handleClickOpen = event => {
    let id = event.currentTarget.id;
    setCurrentId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameClose = () => {
    setAddNameOpen(false);
  };

  const handleDelete = id => {
    let tempList = favNames.filter(name => {
      if (name.name !== id) {
        return name;
      }
      return null;
    });
    setFavNames(tempList);
    namelist.set(tempList);
    setMsgGood(false);
    setMessage("Name Deleted!");
    setPopMessage(true);
    setOpen(false);
  };

  const handleChecked = name => {
    let tempList = favNames.filter(favName => favName.name === name);
    let checked;
    tempList.length > 0 ? (checked = true) : (checked = false);
    if (checked) {
      return true;
    } else {
      return false;
    }
  };

  //Sidebar Handlers
  const [drawerSide, setDrawerSide] = useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerSide({ ...drawerSide, [side]: open });
  };

  return (
    <CssBaseline>
      <Router>
        <Switch>
          <Route path="/favorites">
            <Navbar toggleDrawer={toggleDrawer} handleAddName={handleAddName} />
            <Drawer toggleDrawer={toggleDrawer} drawerSide={drawerSide} />
            <Favorites favNames={favNames} handleClickOpen={handleClickOpen} />
            <Messages
              popMessage={popMessage}
              setPopMessage={setPopMessage}
              message={message}
              msgGood={msgGood}
            />
            <AddName
              handleAddName={handleAddName}
              handleNameClose={handleNameClose}
              addNameOpen={addNameOpen}
              currentId={currentId}
              handleClick={handleClick}
            />
            <ConfirmDelete
              handleDelete={handleDelete}
              handleClose={handleClose}
              open={open}
              currentId={currentId}
            />
          </Route>
          <Route path="/loading">
            <Navbar toggleDrawer={toggleDrawer} handleAddName={handleAddName} />
            <Drawer toggleDrawer={toggleDrawer} drawerSide={drawerSide} />
            <Loading />
          </Route>
          <Route path="/">
            <Navbar toggleDrawer={toggleDrawer} handleAddName={handleAddName} />
            <Drawer toggleDrawer={toggleDrawer} drawerSide={drawerSide} />
            <ScrollToTopOnMount />
            <NamesList
              handleButton={handleButton}
              handleClick={handleClick}
              handleChecked={handleChecked}
              nameList={nameList}
            />
            <AddName
              handleAddName={handleAddName}
              handleNameClose={handleNameClose}
              addNameOpen={addNameOpen}
              currentId={currentId}
              handleClick={handleClick}
            />
            <Messages
              popMessage={popMessage}
              setPopMessage={setPopMessage}
              message={message}
              msgGood={msgGood}
            />
          </Route>
        </Switch>
      </Router>
    </CssBaseline>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
