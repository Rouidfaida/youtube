import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { CgPlayListAdd } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const MainVedio = () => {
  return (
    <div style={{ marginTop: "80px",marginBottom:"40px"}}>
      <iframe
        width="900"
        height="506"
        src="https://www.youtube.com/embed/w7ejDZ8SWv8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write;
			   encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h5>React JS Crash Course 2021</h5>
      <div style={{ display: "flex" }}>
        <p
          style={{
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "rgb(96, 96, 96)",
          }}
        >
          2 145 vues{" "}
        </p>
        <p
          style={{
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "rgb(96, 96, 96)",
          }}
        >
          .{" "}
        </p>
        <p
          style={{
            marginLeft: "5px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "20px",
            color: "rgb(96, 96, 96)",
          }}
        >
          25 sept. 2020{" "}
        </p>
        <AiOutlineLike
          style={{ marginLeft: "300px", width: "24px", height: "24px" }}
        />
        <p
          style={{
            marginLeft: "5px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "normal",
            color: "rgb(3, 3, 3)",
          }}
        >
          85{" "}
        </p>

        <AiOutlineDislike
          style={{ marginLeft: "20px", width: "24px", height: "24px" }}
        />
        <p
          style={{
            marginLeft: "5px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "normal",
            color: "rgb(3, 3, 3)",
          }}
        >
          85{" "}
        </p>
        <RiShareForwardLine
          style={{ marginLeft: "25px", width: "24px", height: "24px" }}
        />
        <p
          style={{
            marginLeft: "5px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "normal",
            color: "rgb(3, 3, 3)",
          }}
        >
          PARTAGER{" "}
        </p>
        <CgPlayListAdd
          style={{ marginLeft: "20px", width: "24px", height: "24px" }}
        />
        <p
          style={{
            marginLeft: "5px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "normal",
            color: "rgb(3, 3, 3)",
          }}
        >
          ENREGISTRER{" "}
        </p>
        <BiDotsHorizontalRounded
          style={{ marginLeft: "20px", width: "24px", height: "20px" }}
        />
      </div>
      <hr
        style={{
          marginLeft: "450px",
         
          width: "150px",
          marginTop: "-5px",
          height: "3px",
          backgroundColor: "black",
          border: "none",
        }}
      />

      <hr style={{ border: "2px", marginTop: "-17px" }} />
      <div style={{ display: "flex" }}>
        <img
          style={{ width: 40, height: 40, borderRadius: 90 }}
          src=" https://yt3.ggpht.com/ytc/AKedOLQNNdMoVv4oz_Owgw-ndHJqr2tc5Tvn0MmT-QKc=s176-c-k-c0x00ffffff-no-rj"
          alt=""
        />

        <div style={{ display: "block", marginLeft: "20px" }}>
          <p
            style={{
              marginLeft: "5px",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: "rgb(3, 3, 3)",
            }}
          >
            React Js Developer
          </p>
          <p
            style={{
              marginLeft: "5px",
              marginTop: "-15px",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "18px",
              color: "rgb(96, 96, 96)",
            }}
          >
            1,16 k abonnés
          </p>
          <p
            style={{
              marginLeft: "5px",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(3, 3, 3)",
            }}
          >
            This Video Shows you How to create an #User Interface website to
            #react .<br />
            Subscribe my channel and press the bell icon for new notification.
          </p>
          <p
            style={{
              marginLeft: "5px",
              marginTop: "30px",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "18px",
              color: "rgb(96, 96, 96)",
            }}
          >
            PLUS
          </p>
        </div>
        <button
          style={{
            backgroundColor: " #e7e7e7",
            color: "black",
            width: 80,
            height: 32,
            marginLeft: "250px",
            border: "none",
          }} /* Gray */
        >
          Abonné
        </button>
        <IoIosNotificationsOutline
          style={{ width: "30px", height: "30px", marginRight: "12px" }}
        />
      </div>
      <hr style={{ border: "2px", marginTop: "10px" }} />

      <div style={{ display: "flex" }}>
        <p
          style={{
            marginLeft: "5px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "22px",
            color: "rgb(3, 3, 3)",
          }}
        >
          1 899 commentaires
        </p>
        <HiOutlineMenuAlt2 style={{ marginLeft: 50 }} />
        <p
          style={{
            marginLeft: "5px",
            fontFamily: "Roboto, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "22px",
            color: "rgb(3, 3, 3)",
          }}
        >
          TRIER PAR
        </p>
      </div>
      <div style={{display:"flex",marginTop:"10px"}}>
      <img
          style={{ width: 40, height: 40, borderRadius: 90 }}
          src=" https://yt3.ggpht.com/yti/APfAmoG7rAAZHK3ivvaDC5rgprEcfl2GKSoI464T6g=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        /><div style={{display:"block"}}>
             <p
          style={{
            marginLeft: "15px",
            fontFamily: "Roboto, Noto, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "grey",
            
          }}
        >
Ajouter un commentaire public...        </p>
              <hr style={{ border: "2px" ,width:850,marginLeft:15,marginTop:-15}} />
              </div>
              </div>


    </div>
  );
};

export default MainVedio;
