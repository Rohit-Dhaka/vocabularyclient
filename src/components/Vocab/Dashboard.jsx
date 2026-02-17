import React from "react";
import { Arrow,   StatusIcon } from "../../common/icon";

const Dashboard = () => {
  const today = new Date();

  const prev = new Date(today);
  prev.setDate(today.getDate() - 1);

  const next = new Date(today);
  next.setDate(today.getDate() + 1);

  const getDayName = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const totalWords = 898;
  const learnedWords = 90;

  const percentage = Math.round((learnedWords / totalWords) * 100);

  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  // Weekly Data
  const weeklyData = [12, 18, 8, 20, 15, 10, 22];

  // Recent Words
  const recentWords = [
    { word: "Abundant", meaning: "In large quantity", status: "New" },
    { word: "Brisk", meaning: "Quick and energetic", status: "New" },
    { word: "Calm", meaning: "Peaceful state", status: "New" },
  ];

  return (
    <section className="w-full">
      <div>
        <div className="flex gap-[32px]">

          
          <div className="bg-[#141522] p-4 rounded-[10px] w-[280px]">
            <p className="font-semibold text-white">Total Words</p>

            
            <h5 className="text-[32px] text-white font-semibold py-1">
              {totalWords}
            </h5>

            <div className="flex gap-6 items-center">
              <div className="relative w-[70px] h-[70px]">
                <svg height="70" width="70">
                  <circle
                    stroke="#2A2C45"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx="35"
                    cy="35"
                  />
                  <circle
                    stroke="#546FFF"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx="35"
                    cy="35"
                    transform="rotate(-90 35 35)"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
                  {percentage}%
                </div>
              </div>

              <div>
                <h5 className="text-white text-[20px] font-semibold">
                  {learnedWords}
                </h5>
                <h6 className="text-[#8E92BC] text-[14px]">
                  Learned Words
                </h6>
              </div>
            </div>
          </div>

          
          <div className="bg-[#F5F5F7] rounded-[10px] w-full p-5">
            <div className="flex justify-between">
              <h5 className="text-[#141522] font-outfit font-semibold">
                Weekly Learning Activity
              </h5>
              <select className="bg-transparent border border-black rounded-md py-1 px-2">
                <option>This Week</option>
                <option>Last Week</option>
              </select>
            </div>

            
            <div className="flex items-end gap-4 h-[150px] mt-6">
              {weeklyData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#546FFF] w-6 rounded-t-md transition-all duration-500"
                  style={{ height: `${item * 4}px` }}
                />
              ))}
            </div>
          </div>

        </div>

        
        <div className="pt-[32px] flex gap-[32px]">

          
          <div className="bg-white rounded-[10px] p-[24px]">
            <h6 className="font-outfit font-semibold leading-[150%]">
              {today.toLocaleDateString("en-US", { month: "long" })}{" "}
              {today.getFullYear()}
            </h6>

            <div className="flex gap-[18px] pt-[36px] items-center">

              {[prev, today, next].map((date, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-[12px] ${
                    date === today ? "bg-[#141522] rounded-full p-2" : ""
                  }`}
                >
                  <h5
                    className={`font-outfit font-medium ${
                      date === today ? "text-white" : "text-[#121322]"
                    }`}
                  >
                    {getDayName(date)}
                  </h5>

                  <h6
                    className={`w-[32px] h-[32px] flex items-center justify-center rounded-full font-semibold ${
                      date === today
                        ? "bg-[#546FFF] text-white"
                        : "bg-[#F5F5F7] text-[#141522]"
                    }`}
                  >
                    {date.getDate()}
                  </h6>
                </div>
              ))}

            </div>
          </div>

          
          <div className="w-full flex flex-col justify-between">
            <div className="flex justify-between">
              <h3 className="font-outfit font-semibold text-[24px]">
                Recently Added Words
              </h3>
              <Arrow />
            </div>

            <div className="flex gap-3">

              {recentWords.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-[24px] rounded-[10px] flex flex-col justify-between hover:shadow-lg transition duration-300"
                >
                  <div>
                    <h4 className="font-outfit font-semibold">
                      {item.word}
                    </h4>
                    <h5 className="font-outfit text-[#54577A]">
                      {item.meaning}
                    </h5>
                  </div>
                  <div className="flex gap-2">
                    <StatusIcon />
                    <h6 className="font-outfit text-[#141522]">
                      Status - {item.status}
                    </h6>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
