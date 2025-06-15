"use client";

import React, { useEffect, useState } from "react";
import { team } from "../../shared/data";
import Image from "next/image";
import Icon from "../../ui/SocialIcons";
import Link from "next/link";

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Kenali Tim Ahli{" "}
          <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            techbros
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tim kami terdiri dari para developer dan programmer handal yang siap
          membantu kamu menyelesaikan tugas coding dengan hasil terbaik dan
          tepat waktu.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((person, idx) => (
          <div
            key={idx}
            className={`
              bg-white flex flex-col rounded-2xl px-7 py-14 my-auto shadow-lg text-center transform transition-all duration-700 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
              hover:shadow-xl hover:-translate-y-2
            `}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <Image
              src={person.avatar}
              alt={person.name}
              width={500}
              height={500}
              placeholder="empty"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {person.name}
            </h3>
            <p className="text-gray-500 mb-4">{person.role}</p>
            <div className="flex justify-center space-x-4 text-gray-500">
              <Link href="#" aria-label="Instagram">
                <Icon.Ig className="w-5 h-5 hover:text-gray-700 transition" />
              </Link>
              <Link href="#" aria-label="X (Twitter)">
                <Icon.X className="w-5 h-5 hover:text-gray-700 transition" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Icon.Fb className="w-5 h-5 hover:text-gray-700 transition" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
