import React from "react";

export default function Aboutus({ aboutus }) {
  return (
    <>
      {aboutus &&
        aboutus.map((item, index) => {
          return (
            <div key={index} className="container parent-wrapper">
              <div className="content-wrapper">
                <div className="title-wrapper">
                  <p>{item.title}</p>
                  <h1>{item.heading}</h1>
                </div>
                <div className="paragraphs-wrapper">
                  <p>{item.paragraph}</p>
                </div>
              </div>
              <div className="number-counter">
                {item?.counts &&
                  item.counts.map((item, index) => {
                    return (
                      <div key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="read-more">
                <p>{item.minibtn} &rarr;</p>
              </div>
            </div>
          );
        })}
    </>
  );
}
