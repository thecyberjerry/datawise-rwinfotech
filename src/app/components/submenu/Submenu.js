import React from "react";

export default function Submenu({ data, className }) {
  return (
    <div className={`submenu__wrapper ${className}`}>
      <div className="submenu__wrapper--text">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="submenu__wrapper--text-list">
                <label htmlFor="submenu__wrapper--text-list-ul">
                  {item.label}
                </label>
                {item.list.map((item, index) => {
                  return (
                    <div key={index} className="submenu__wrapper--text-list-ul">
                      <ul>
                        <li>
                          <div className="list__heading">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                          </div>
                          <div className="arrow">&rarr;</div>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}
