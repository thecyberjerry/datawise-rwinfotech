import Image from "next/image";
import React from "react";

export default function Blogs({ content }) {
  return (
    <div className="blogs flex-center">
      {content &&
        content.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="blogs__textcontent ">
                <div className="blogs__textcontent-title">
                  <p>{item.title}</p>
                </div>
                <div className="blogs__textcontent-heading">
                  <h1>{item.heading}</h1>
                </div>
                <div className="blogs__textcontent-para">
                  <p>{item.desc}</p>
                </div>
              </div>
              <div className="blogs__wrapper">
                {item?.blogs &&
                  item.blogs.map((item, index) => {
                    return (
                      <div key={index} className="blogs__wrapper-cards">
                        <div className="blogs__wrapper-cards--img">
                          <Image
                            className="img"
                            src={item.img}
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="blogs__wrapper-cards--desc">
                          <p>{item.type}</p>
                          <h2>{item.title}</h2>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}
