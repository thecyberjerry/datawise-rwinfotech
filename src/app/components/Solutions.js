import Image from "next/image";
import React from "react";

export default function Solutions({ solutions }) {
  return (
    <>
      {solutions &&
        solutions.map((item, index) => {
          return (
            <div key={index} className="solutions">
              <div className="solutions__textwrapper flex-center">
                <div className="solutions__textwrapper--text">
                  <p>{item.title}</p>
                  <h1>{item.heading}</h1>
                </div>
              </div>
              <div className="solutions__analytics">
                {item?.cards &&
                  item.cards.map((item, index) => {
                    return (
                      <div key={index} className="solutions__analytics-inner ">
                        <div className="solutions__analytics-inner--logo">
                          <Image
                            className="img"
                            src={item.img}
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="solutions__analytics-inner--text">
                          <h1>{item?.title}</h1>
                          <p>{item?.desc}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </>
  );
}
