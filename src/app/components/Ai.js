import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Ai({ business }) {
  return (
    <div className="container-fluid">
      <div className="fluid__textcontent">
        <div className="fluid__textcontent-heading">
          <h1>{business?.title}</h1>
          <p>{business?.desc}</p>
        </div>
        <div className="fluid__textcontent-list">
          <ul>
            {business && business.list.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="fluid__textcontent-btn">
          {business && (
            <Button
              title={business.btntitle}
              className={business.className ? business.className : "btn--green"}
            />
          )}
        </div>
      </div>
      {business?.img && business?.ai_img && (
        <div className="fluid__imgarea">
          <div className="img__wrapper">
            <div className="img__wrapper--img">
              <Image
                className="img"
                src={business.img}
                height={100}
                width={100}
              />
              <div className="img__wrapper--ai">
                <Image src={business.ai_img} height={100} width={100} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
