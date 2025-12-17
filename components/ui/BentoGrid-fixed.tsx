import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "lottie-react";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import CollaborationNetwork from "./CollaborationNetwork";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Corrected grid layout
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  // removed unecessary items from destructuring if they are not used
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // NOTE: These lists should come from the parent component or data file,
  // but they are kept here for the demonstration of the JSX structure.
  // When using this inside a map function for a Bento Grid, you should
  // use item.leftLists and item.rightLists if 'item' is the prop name.
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["RESTful API", "NextJS", "RESTful API"];

  const [copied, setCopied] = useState(false);

  // defaultOptions is not strictly needed if only animationData is used in Lottie
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "goyaljashan85@gmail.com";
    // Check if navigator.clipboard is available before using it (good practice for hydration errors)
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback for older browsers
        console.warn("Clipboard API not supported");
    }
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // Corrected base styles
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        // Corrected background style
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // added background animation
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Special layout for collaboration card (id=1) */}
        {id === 1 ? (
          <div className="relative h-full w-full flex flex-col">
            {/* Collaboration Network Visual - Top */}
            <div className="flex-1 relative">
              <CollaborationNetwork />
            </div>
            
            {/* Text Content - Bottom */}
            <div className="px-5 pb-5 lg:px-10 lg:pb-10">
              <div className="font-sans font-extralight text-sm text-[#C1C2D3] mb-2 z-10">
                {description}
              </div>
              <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold z-10">
                {title}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            {/* Description (first) */}
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            {/* Title (second) */}
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              {title}
            </div>

            {/* for the github 3d globe (id=2) */}
            {id === 2 && <GridGlobe />}

            {/* Tech stack list div (id=3) */}
            {id === 3 && (
              <div className="flex gap-3 lg:gap-2 w-fit absolute -right-3 lg:-right-2 h-full">
                  <div className="flex">
                      
                      {/* 1. Left List Container: Divider (border-r) */}
                      <div className="flex flex-col gap-2 md:gap-2 lg:gap-4 pr-2 border-r border-gray-700">
                          {/* NOTE: Using 'leftLists' defined earlier for demonstration */}
                          {leftLists.map((tech, i) => ( 
                              <span
                                  key={i}
                                  className="lg:py-6 lg:px-6 py-3 px-4 text-sm lg:text-lg opacity-50 
                                  lg:opacity-100 rounded-xl text-center bg-[#10132E] min-w-[120px]" 
                              >
                                  {tech}
                              </span>
                          ))}
                          <span className="lg:py-6 lg:px-6 py-4 px-4 rounded-xl text-center bg-[#10132E] min-w-[120px]"></span>
                      </div>

                      {/* 2. Right List Container */}
                      <div className="flex flex-col gap-4 md:gap-4 lg:gap-10 pl-5">
                          <span className="lg:py-6 lg:px-6 py-4 px-4 rounded-xl text-center bg-[#10132E] min-w-[120px]"></span>
                          {/* NOTE: Using 'rightLists' defined earlier for demonstration */}
                          {rightLists.map((tech, i) => ( 
                              <span
                                  key={i}
                                  className="lg:py-6 lg:px-6 py-3 px-4 text-sm lg:text-lg opacity-50 
                                  lg:opacity-100 rounded-xl text-center bg-[#10132E] min-w-[120px]"
                              >
                                  {tech}
                              </span>
                          ))}
                      </div>
                  </div>
              </div>
            )}
            
            {/* Contact Grid Item (id=6) */}
            {id === 6 && (
              <div className="mt-5 relative">
                <div
                  className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                    }`}
                >
                  <Lottie
                    animationData={animationData}
                    loop={copied}
                    autoplay={copied}
                    style={{ height: 200, width: 400 }}
                  />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};