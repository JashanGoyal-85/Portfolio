import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia, education } from "@/data";
import RippleButton from "./RippleButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
      id="contact"
    >
      {/* Contact and Education Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Section */}
        <div className="edu-card rounded-2xl p-[2px]">
          <div className="flex flex-col items-center justify-center edu-card-inner group bg-black/[0.5] p-12 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-black/[0.7] relative overflow-hidden">
            {/* decorative circles behind content */}
            <div className="edu-decor">
              <div className="circle primary" />
              <div className="circle secondary" />
              <div className="circle accent" />
            </div>

            <h1 className="heading lg:max-w-[45vw] text-3xl md:text-4xl mb-4 group-hover:text-purple transition-colors duration-300 relative z-10">
              Ready to take{" "}
              <span className="text-purple group-hover:text-white transition-colors duration-300">
                your
              </span>{" "}
              digital presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-6 my-6 text-center text-lg leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
            <a
              href="mailto:goyaljashan85@gmail.com"
              className="transform transition-transform duration-300 hover:scale-105 relative z-10"
            >
              <RippleButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Education Grid Section */}
        <div className="flex flex-col">
          <h2 className="heading lg:max-w-[45vw] mb-8">
            My <span className="text-purple">Educational</span> Journey
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="edu-card rounded-2xl p-[1.5px] bg-gradient-to-r from-transparent via-purple to-transparent"
              >
                <div className="edu-card-inner card-anim group rounded-2xl bg-black/[0.5] p-8 hover:shadow-2xl hover:bg-black/[0.7] transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* decorative circles behind content (ApproachCard-style) */}
                  <div className="edu-decor">
                    <div className="circle primary" />
                    <div className="circle secondary" />
                    <div className="circle accent" />
                  </div>

                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0">
                      <img
                        src={edu.logo || "/iiita.jpg"}
                        alt={edu.school + " logo"}
                        className="w-20 h-20 rounded-lg object-cover group-hover:scale-110 transition-transform duration-500 shadow-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-3xl mb-1 group-hover:text-purple transition-colors duration-300">
                        {edu.school}
                      </h3>
                      <p className="text-purple font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                        {edu.degree}
                      </p>
                      <p className="text-white-200 text-base mb-2 font-semibold">
                        {edu.field}
                      </p>
                      <p className="text-white-200 text-sm font-light mb-3 border-l-2 border-purple/[0.5] pl-3 group-hover:border-purple transition-colors duration-300">
                        {edu.year}
                      </p>
                      <p className="text-white-200 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright and Social Icons */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Jashan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-100 transition-colors"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
