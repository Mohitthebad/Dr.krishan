import React from "react";
import signatureImg from "../assets/signature.png";

const DEFAULT_NAV_LINKS = ["Overview", "Experience", "Awards", "Coaching"];
const DEFAULT_CONNECT_LINKS = ["LinkedIn", "Executive Bio", "Privacy Policy"];

function FooterLinkList({ items, className = "" }) {
  return (
    <nav className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) =>
        typeof item === "string" ? (
          <a
            key={item}
            href="#"
            className="text-[#444748] hover:text-[#775a19] transition-colors flex items-center gap-2"
          >
            {item}
          </a>
        ) : (
          <a
            key={item.label}
            href={item.href || "#"}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="text-[#444748] hover:text-[#775a19] transition-colors flex items-center gap-2"
          >
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}

export default function Footer({
  name = "Dr. Krishan Singh",
  description = "Strategic HR leader dedicated to transforming organizational culture and driving human capital excellence through visionary leadership.",
  navLinks = DEFAULT_NAV_LINKS,
  connectLinks = DEFAULT_CONNECT_LINKS,
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="bg-[#f5f3f3] border-t border-[#c4c7c7]/30 w-full mt-20">
      <div className=" max-w-[1140px] mx-auto px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
          <div className="md:col-span-5">
            <img
              src={signatureImg}
              alt="Dr. Krishan Singh Signature"
              className="h-10 md:h-12 w-auto object-contain mb-4"
              style={{
                filter: "invert(1)",
              }}
            />
            <p className="text-[#444748] max-w-sm leading-relaxed">{description}</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs text-[#775a19] tracking-widest mb-6 uppercase font-semibold">
              Navigation
            </h4>
            <FooterLinkList items={navLinks} />
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs text-[#775a19] tracking-widest mb-6 uppercase font-semibold">
              Connect
            </h4>
            <FooterLinkList items={connectLinks} />
          </div>
        </div>

        <div className="pt-8 border-t border-[#c4c7c7]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444748] text-sm">
            © {year} {name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-[8px] md:gap-[10px] p-[6px_10px] md:p-[8px_12px] border border-black/10 rounded-[10px] w-fit bg-black/5 backdrop-blur-[10px]">
            <a
              href="https://play.fabulousmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FabulousMedia"
              className="flex items-center justify-center bg-[#fff] p-[4px] rounded-[6px] opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                alt="FabulousMedia"
                className="h-[10px] md:h-[12px] w-auto block"
              />
            </a>

            <div className="w-[1px] h-[12px] bg-black/10"></div>

            <a
              href="https://gocommercially.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GoCommercially"
              className="flex items-center justify-center bg-[#fff] p-[4px] rounded-[6px] opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                alt="GoCommercially"
                className="h-[10px] md:h-[12px] w-auto block"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}