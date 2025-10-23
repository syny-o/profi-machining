"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 100,
    endCountText: "+",
    text: "Projects Completed",
  },
  {
    endCountNum: 10,
    endCountText: "K",
    text: "Lines of Code",
  },
  {
    endCountNum: 50,
    endCountText: "+",
    text: "Active Users",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });

  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col xl:flex-row justify-between items-center h-full gap-12 text-center">
          {statsData.map((stat, index) => {
            return (
              <div key={index} className="w-full">
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{stat.endCountText}</span>
                </div>
                <p className="">{stat.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
