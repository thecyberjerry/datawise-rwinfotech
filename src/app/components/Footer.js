import Image from "next/image";
import React from "react";

export default function Footer({ footer }) {
  return (
    <div className="">
      <div className="footer">
        <div className="footer__upper-section">
          <Image
            className="footer__upper-section--img"
            src={footer?.logo ? footer.logo : "/logo.svg"}
            height={100}
            width={100}
            alt="Logo"
          />
          {footer?.sitemap &&
            footer.sitemap.map((item, index) => {
              return (
                <>
                  <div className="footer__upper-section-wrapper" key={index}>
                    <label htmlFor="footer__upper-section-wrapper--heading">
                      {item.title}
                    </label>
                    <ul
                      className="footer__upper-section-wrapper--list"
                      key={index}
                      >
                      {item.lists.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </>
              );
            })}
        </div>
        <div className="footer__lower-section">
          <div className="footer__lower-section--rights">
            <p>{footer?.trademark && footer.trademark}</p>
          </div>
          <div className="footer__lower-section--terms">
            <ul>
              {footer?.terms &&
                footer.terms.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
