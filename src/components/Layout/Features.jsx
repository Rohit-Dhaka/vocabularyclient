import React from "react";

const Features = () => {
  const features = [
    {
      title: "Smart Word Management",
      desc: "Save, edit, and organize your vocabulary in a structured way to boost retention.",
      icon: "📚",
    },
    {
      title: "Interview Focused",
      desc: "Curated vocabulary designed to help you crack interviews confidently.",
      icon: "🎯",
    },
    {
      title: "Daily Progress Tracking",
      desc: "Track your learning journey and stay consistent every single day.",
      icon: "📈",
    },
    {
      title: "Clean Learning Interface",
      desc: "Distraction-free design that keeps you focused on what matters most.",
      icon: "✨",
    },
    {
      title: "Search & Filter Words",
      desc: "Quickly find saved words and revise smarter, not harder.",
      icon: "🔍",
    },
    {
      title: "Confidence Builder",
      desc: "Strong vocabulary leads to powerful communication skills.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful <span className="text-[#4F2CBC]">Features</span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            Everything you need to build strong vocabulary and communicate
            confidently.
          </p>
        </div>

        
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:shadow-xl transition duration-300 p-8 rounded-2xl text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;
