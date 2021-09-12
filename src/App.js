import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike,AiFillDownCircle } from "react-icons/ai";
import Comments from "./Components/Comments";
import SuggessioVedio from "./Components/SuggessioVedio";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBare from "./Components/NavBare";
import MainVedio from "./Components/MainVedio";
import { BiCaretDown } from "react-icons/bi";



function App() {
  let comment = [
    {imgs: "https://yt3.ggpht.com/ytc/AKedOLSfWKsQDuwGQsVA3KQkAjty1-POXle0NsbztNm5NQ=s88-c-k-c0x00ffffff-no-rj",
      name: "Sh Nam",
      per:"il y a 1 an",
      body: "Your could do some projects using React or React/Redux. I'm not sure if you have any courses on udemy?",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 10 réponse"
    },
    {imgs: "https://yt3.ggpht.com/ytc/AKedOLQkGNK-WgyKecdvL1y89_UL82iYdsCyrJsWHbQH3w=s88-c-k-c0x00ffffff-no-rj",
      name: "Anoop Vasudevan",
      per:"il y a 1 an",
      body: "   I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 15 réponse"
    },
    {imgs: "https://yt3.ggpht.com/ytc/AKedOLRN7CrnU4EvCJq9Hg07X_KbKTx5m4bBhOqtqhFE=s88-c-k-c0x00ffffff-no-rj",
      name: "David Redmond",
      per:"il y a 1 an",
      body: "  Man...thanks for these videos, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 25 réponse"
    },
    {
      imgs: "https://yt3.ggpht.com/ytc/AKedOLR-c8xtjSpRJF8HBkpQ2w7i_5RzK9_yuKXsLA=s88-c-k-c0x00ffffff-no-rj",
      name: "Gim Vasudevan",
      per:"il y a 1 an",
      body: "  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 105 réponse"
    },
    {
      imgs: "https://yt3.ggpht.com/ytc/AKedOLSrgetrEOGgLHckrPpECTLoU0iOLwknGZcrUTaCow=s88-c-k-c0x00ffffff-no-rj",
      name: "James Privett",
      per:"il y a 2 an",
      body: "  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 305 réponse"
    },
    {
      imgs: "https://yt3.ggpht.com/ytc/AKedOLTksCvRHRkQybOPPFMN2LawgVt3a7NhXmogEw=s88-c-k-c0x00ffffff-no-rj",
      name: "D.R. Just",
      per:"il y a 3 an",
      body: "  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 52 réponse"
    },
    {
      imgs: "https://yt3.ggpht.com/ytc/AKedOLSjgtEPFTuSCZoTdEZNfhEP4A1N_gIoZcHYfvGREg=s88-c-k-c0x00ffffff-no-rj",
      name: "A M",
      per:"il y a 4 an",
      body: "  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 15 réponse"
    },
    {
      imgs: "https://yt3.ggpht.com/ytc/AKedOLQzTbH1jwNJ00nH4Wjwuwx5hNpbttrM4ws9_yA2PQ=s88-c-k-c0x00ffffff-no-rj      ",
      name: "Lester J",
      per:"il y a 2 an",
      body: "  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",
      like: <AiOutlineLike />,
      dilike: <AiOutlineDislike />,
      but:<BiCaretDown/>,
      aff:"Afficher les 65 réponse"
    },
  ];
  let vedio = [
    {
      srcve: "https://www.youtube.com/embed/qi9VQqYcXqY",
      titleve: "Learning Outside Of Your Full Time Job & Time Management",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/Cla1WwguArA",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/qi9VQqYcXqY",
      titleve: "Learning Outside Of Your Full Time Job & Time Management",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/qi9VQqYcXqY",
      titleve: "Learning Outside Of Your Full Time Job & Time Management",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      title: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/qi9VQqYcXqY",
      titleve: "Learning Outside Of Your Full Time Job & Time Management",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/qi9VQqYcXqY",
      titleve: "Learning Outside Of Your Full Time Job & Time Management",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/qi9VQqYcXqY",
      titleve: "Learning Outside Of Your Full Time Job & Time Management",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/qi9VQqYcXqY",
      titleve: "Learning Outside Of Your Full Time Job & Time Management",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
    {
      srcve: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      titleve: "ReactJS Tutorial - 5 - Functional Components",
      vu:"887 498 vues ",
      poi:".",
      dat:"22 juin 2018",
      pt:"Traversy Media",
      ic:<AiFillDownCircle/>,
    },
  ];

  return (
    <div className="App" style={{ backgroundColor: "#F9F9F9" }}>
      <NavBare />
      <div style={{ marginLeft: 100, marginRight: 20 }} className="row">
        <div className="col-md-8">
          <MainVedio  />
          <Comments commentaire={comment} />
        </div>
        <div className="col-md-4">
        <SuggessioVedio listVedio={vedio} />
      </div>
    </div>
    </div>
  );
}

export default App;
