import React from "react";
import Button from "./Button";
import Group from "./group/Group";

export default function Hero({ hero, group }) {
  return (
    <div className="hero gap--4">
      <div className="wrapper hero--content gap--2">
        <div className="hero--content-heading">
          <h1>{hero?.heading}</h1>
        </div>
        <div className="hero--content-paragraph">
          <p>{hero?.desc}</p>
        </div>
        <div className="hero--content-btns">
          {hero?.btn &&
            hero.btn.map((item, index) => {
              return (
                <Button
                  key={index}
                  title={item.name}
                  className={item.className ? item.className : "btn--green"}
                />
              );
            })}
        </div>
      </div>
      <div className="hero--group-img">
        <Group group={group} />
      </div>
    </div>
  );
}
