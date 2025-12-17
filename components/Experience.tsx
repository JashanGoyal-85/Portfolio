import React from "react";

// Assuming these imports are correct based on your setup
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <h1 className="heading">
        My <span className="text-purple">Coding</span> Profile
      </h1>

      {/* Container for centering cards in a row */}
      <div className="w-full mt-12 flex flex-wrap justify-center gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "#000000",
              backgroundColor: "#000000",
              borderRadius: `calc(1.75rem* 0.96)`,
              minWidth: "250px",
              maxWidth: "300px",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* Card Content: Stacked vertically (flex-col) */}
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4">
              {/* 1. TOP SECTION: Image + Title/Rating/ID (Side-by-Side) */}
              <div className="flex items-center gap-4">
                {/* Image (Left) */}
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="w-16 h-16 object-contain"
                />

                {/* Title, Rating, and ID Container (Right of Image) */}
                <div className="flex flex-col items-start justify-center flex-1">
                  {/* Title (Big Font) */}
                  <h1 className="text-start text-2xl md:text-3xl font-extrabold">
                    {card.title}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center mt-1">
                    <span className="text-xl font-bold text-yellow-400">
                      {card.rating}
                    </span>
                  </div>

                  {/* NEW: ID Name */}
                  {/* Assuming the ID name is stored in card.idName or card.handle */}
                  <p className="text-sm font-medium text-gray-400 mt-0.5">
                    @{card.idName}
                  </p>
                </div>
              </div>

              {/* 2. ACTION SECTION: Visit Profile Button (Glassy Effect with Hover) */}
              <a
                href={card.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4"
              >
                <button
                  className="w-full py-2 px-4 rounded-lg text-white font-bold transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
                  style={{
                    backgroundColor: "rgba(139, 92, 246, 0.4)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow:
                      "0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(139, 92, 246, 0.6)";
                    e.currentTarget.style.border =
                      "1px solid rgba(255, 255, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(139, 92, 246, 0.4)";
                    e.currentTarget.style.border =
                      "1px solid rgba(255, 255, 255, 0.1)";
                  }}
                >
                  Visit Profile
                </button>
              </a>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
