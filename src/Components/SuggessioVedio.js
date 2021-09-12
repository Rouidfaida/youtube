import React from "react";

const SuggessioVedio = ({ listVedio }) => {
  return (
    <div style={{ marginTop: "80px" }}>
      {listVedio.map((el) => (
        <div style={{ display: "flex" }}>
          <iframe
            style={{ marginBottom: 20 }}
            width="150"
            height="100"
            src={el.srcve}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;
			   encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div style={{ display: "block", marginLeft:10 }}>
            <p
              style={{
                fontFamily: "Roboto, Arial, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "18px",
                color: " rgb(3, 3, 3)",
              }}
            >
              {el.titleve}
            </p>
            <div style={{ display: "flex" ,marginTop:"-10px"}}>
              <p
                style={{
                  fontFamily: "Roboto, Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: " rgb(96, 96, 96)",
                }}
              >
                {el.pt}
              </p>
              <div
                style={{
                  color: "#606060",
                  marginTop: "-5px",
                  marginLeft: "5",
                  height: "10",
                }}
              >
                {el.ic}
              </div>
            </div>
            <div style={{ display: "flex",marginTop:"-15px" }}>
              <p
                style={{
                  fontFamily: "Roboto, Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: " rgb(96, 96, 96)",
                }}
              >
                {el.vu}
              </p>
              <p
                style={{
                  fontFamily: "Roboto, Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: " rgb(96, 96, 96)",
                }}
              >
                {el.poi}
              </p>
              <p
                style={{
                  fontFamily: "Roboto, Arial, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: " rgb(96, 96, 96)",
                }}
              >
                {el.dat}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggessioVedio;
