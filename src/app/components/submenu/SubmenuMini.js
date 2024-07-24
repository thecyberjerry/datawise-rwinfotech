"use client";
import React, { useState } from "react";

export default function SubmenuMini({ navlist }) {
  const [toggle, settoggle] = useState(false);
  const [list, setlist] = useState("");
  return (
    <div className="container nav__wrapper">
      <div className="section">
        {navlist &&
          navlist.map((item, index) => {
            return (
              <div key={index} className="section__wrapper  ">
                <div className="section__wrapper--title justify-between">
                  <h3>{item.title}</h3>
                  <div
                    onClick={() => {
                      navlist[index]?.sublinks
                        ? (setlist(index), settoggle(!toggle))
                        : undefined;
                    }}
                    className="arrow"
                  >
                    &darr;
                  </div>
                </div>
                <div className="section__wrapper--list">
                  <ul>
                    {navlist[list]?.sublinks &&
                      toggle &&
                      index === list &&
                      navlist[list]?.sublinks.map((item, index) => {
                        return (
                          <>
                            <li key={index}>{item.title}</li>
                          </>
                        );
                      })}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
