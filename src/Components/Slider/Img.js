import React from "react";

function Images({ src }) {
    let ImgStyle = {
            width: 100 + "%",
            height: "auto"
    };
    return <img src={src} alt="slide-img"></img>
}

export default Images;