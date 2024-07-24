import React from "react";

export default function FAQ({ faq }) {
  return (
    <div className="container faq">
      {faq &&
        faq.map((item, index) => {
          return (
            <div key={index} className="faq__wrapper">
              <div className="faq__wrapper-title">
                <p>{item.title}</p>
                <h2>{item.heading}</h2>
                <div className="faq__wrapper-title--paragraph">
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="faq__wrapper-cards">
                {item.faq &&
                  item.faq.map((item, index) => {
                    return (
                      <div key={index} className="faq__wrapper-cards--single">
                        <div className="faq__wrapper-cards--single--title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="faq__wrapper-cards--single--desc">
                          {item.body}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
