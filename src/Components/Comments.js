import React from "react";

const Comments = ({ commentaire }) => {
  return (
    <div>
      {commentaire.map((el) => (
        <div style={{ display: "flex" }}>
          <img
            style={{ width: 40, height: 40, borderRadius: 90 }}
            src={el.imgs}
            alt=""
          />
          <div style={{ display: "block", marginLeft: 15 }}>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontFamily: "Roboto, Arial, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  color: " rgb(3, 3, 3)",
                }}
              >
                {" "}
                {el.name}
              </p>
              <p
                style={{
                  fontFamily: "Roboto, Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: " rgb(3, 3, 3)",
                  marginLeft: 5,
                }}
              >
                {el.per}
              </p>
            </div>

            <p>{el.body}</p>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                {" "}
                {el.like}
                <p
                  style={{
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "rgb(96, 96, 96)",
                    marginLeft: 5,
                  }}
                >
                  1,6 k
                </p>
              </div>
              <div style={{ marginLeft: 20, display: "flex" }}>
                {" "}
                {el.dilike}
                <p
                  style={{
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "rgb(96, 96, 96)",
                    marginLeft: 5,
                  }}
                >
                  Répondre
                </p>
              </div>
              
            </div>
           <div style={{display:"flex"}}>
               <div style={{width:15,height:15,color:"rgb(6, 95, 212)",marginTop:-5}}>{el.but}</div>
        <p  style={{
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "rgb(6, 95, 212)",
                    marginLeft: 5,
                    
                  }}>{el.aff}</p>

           </div>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Comments;
