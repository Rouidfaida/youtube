import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike,AiFillDownCircle } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import Comments from "./Components/Comments";
import SuggessioVedio from "./Components/SuggessioVedio";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBare from "./Components/NavBare";
import MainVedio from "./Components/MainVedio";
import { useState } from "react";
import "./Components/Style.css"
import { DataComm, dataVed } from "./Components/DataCommentaire";
import Add from "./Components/Add";



function App() {
const [commentaires, setCommentaires] =  useState(DataComm);
const [vedio, setVedio] = useState(dataVed)
  const handelAdd = (newText) => {
    let newAction = {     imgs: "https://yt3.ggpht.com/ytc/AKedOLTksCvRHRkQybOPPFMN2LawgVt3a7NhXmogEw=s88-c-k-c0x00ffffff-no-rj",
         name: "D.R. Just",
         per:"il y a 3 an",
         body: newText,
         like: <AiOutlineLike />,
         dilike: <AiOutlineDislike />,
         but:<BiCaretDown/>,
         aff:"Afficher les 52 réponse"
        };
        setCommentaires([...commentaires, newAction]);
  };
 
  const handelAddVed = (x,y,z,) => {
    let newVed = {srcve: x,
    titleve: y,
    vu:"887 498 vues ",
    poi:".",
    dat:z,
    pt:"Traversy Media",
    ic:<AiFillDownCircle/>,
        };
        setVedio([...vedio, newVed]);
  };
  return (
    <div className="App" >
      <NavBare />
      <div style={{ marginLeft: 100, marginRight: 20 }} className="row">
        <div className="col-md-8">
          <MainVedio  />
          <Comments add={handelAdd}commentair={commentaires} />
        </div>
        <div className="col-md-4">
        <SuggessioVedio listVedio={vedio} addv={handelAddVed}/>
        <Add  vd={vedio}/>
      </div>
    </div>
    </div>
  );
}

export default App;
