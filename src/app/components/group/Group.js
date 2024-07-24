import React from "react";
import Image from "next/image";
export default function Group({ group }) {
  return (
    <>
      {group &&
        group.map((item, index) => {
          return (
            <div className="wrapperimg" key={index}>
              <Image
                width={100}
                height={100}
                className="green_img"
                src={item?.someclass[0]?.rotate[0]}
                alt="some image"
              />
              <div className="img__wrapper">
                <div className="empty__area"></div>
                <div className="width-1">
                  <Image
                    width={100}
                    height={100}
                    className="width-1--img"
                    src={item?.width1[0]}
                    alt="some image"
                  />
                </div>
                <div className="width-2">
                  <Image
                    width={100}
                    height={100}
                    src={item?.width2[0]}
                    alt="some image"
                  />
                </div>
              </div>
              <div className="img__wrapper2">
                <div className="someclass__rotate someclass">
                  <Image
                    width={100}
                    height={100}
                    className="rotate"
                    src={item?.someclass[0]?.rotate[1]}
                    alt="some image"
                  />
                </div>
                <div className="someclass">
                  <Image
                    width={100}
                    height={100}
                    src={item?.someclass[1]}
                    alt="some image"
                  />
                </div>
                <div className="someclass">
                  <Image
                    width={100}
                    height={100}
                    src={item.someclass[2]}
                    alt="some image"
                  />
                </div>
              </div>
              <div className="img__wrapper">
                <div className="img__wrapper2">
                  <div className="someclass">
                    <Image
                      width={100}
                      height={100}
                      src={item?.someclass[3]}
                      alt="some image"
                    />
                  </div>
                </div>
                <div className="width-2">
                  <Image
                    width={100}
                    height={100}
                    className="width-1--img"
                    src={item?.width2[1]}
                    alt="some image"
                  />
                </div>
                <div className="width-1">
                  <Image
                    width={100}
                    height={100}
                    src={item?.width1[1]}
                    alt="some image"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
{
  /* <div className="wrapperimg">
<img className="green_img" src="/group/green.svg" alt="some image" />
<div className="img__wrapper">
  <div className="empty__area"></div>
  <div className="width-1">
    <img className="width-1--img" src="/group/first.jpg" alt="some image" />
  </div>
  <div className="width-2">
    <img src="/group/second.jpg" alt="some image" />
  </div>
</div>
<div className="img__wrapper2">
  <div className="someclass__rotate someclass">
    <img
      className="rotate"
      src="/group/transparentbackground.svg"
      alt="some image"
    />
  </div>
  <div className="someclass">
    <img src="/group/third.jpg" alt="some image" />
  </div>
  <div className="someclass">
    <img src="/group/fourth.jpg" alt="some image" />
  </div>
</div>
<div className="img__wrapper">
  <div className="img__wrapper2">
    <div className="someclass">
      <img src="/group/fifth.jpg" alt="some image" />
    </div>
  </div>
  <div className="width-2">
    <img className="width-1--img" src="/group/sixth.jpg" alt="some image" />
  </div>
  <div className="width-1">
    <img src="/group/seventh.jpg" alt="some image" />
  </div>
</div>
</div> */
}
