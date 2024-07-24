"use client";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Submenu from "./submenu/Submenu";
import SubmenuMini from "./submenu/SubmenuMini";
export default function Navbar({ data, btn }) {
  const [toggle, settoggle] = useState(false);
  const [toggleHam, settoggleHam] = useState(false);
  const [hoveredItem, sethoveredItem] = useState("");
  const router = useRouter();
  return (
    <>
      <nav className="container space-between navbar">
        <div className="navbar__initial flex-center gap--6">
          <Image
            alt="Logo Datawise"
            className="navbar__initial--img"
            src={data?.logo ? data.logo : "logo.svg"}
            width={100}
            height={100}
          />
          <ul className="flex-center gap--4">
            {data?.navlist &&
              data.navlist.map((item, index) => {
                return (
                  <li
                    className="lists"
                    key={index}
                    onMouseOver={() => {
                      data?.subnavs[item.toLowerCase().split(" ").join("")]
                        ? (sethoveredItem(item), settoggle(true))
                        : undefined;
                    }}
                    onMouseLeave={() => {
                      settoggle(false);
                    }}
                    onClick={() => {
                      router.push("#");
                    }}
                  >
                    {item}
                    {item == hoveredItem ? (
                      <Submenu
                        className={`${toggle ? "box--toggled" : "box"}`}
                        data={
                          data.subnavs[
                            hoveredItem.toLowerCase().split(" ").join("")
                          ]
                        }
                      />
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="navbar__btns flex-center gap--2 ">
          {btn &&
            btn.map((item, index) => {
              return (
                <Button
                  key={index}
                  title={item.name}
                  className={item.className ? item.className : "btn--green"}
                />
              );
            })}
          <div>
            <Image
              onClick={() => {
                settoggleHam(!toggleHam);
              }}
              className="btn__menu--toggle"
              src={!toggleHam ? data?.hamburgernav : data?.closehamburgernav}
              width={100}
              height={100}
            />
          </div>
        </div>
      </nav>
      {toggleHam ? <SubmenuMini navlist={data?.mobilenavlist} /> : ""}
    </>
  );
}
