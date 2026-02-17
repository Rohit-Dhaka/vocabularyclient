import React from "react";

const About = () => {

//     window.scrollTo({
//   top: 0,
//   behavior: "smooth"
// });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-[#4F2CBC]">Vocabify</span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            Vocabify is a modern vocabulary management platform designed to
            help learners improve their English fluency, crack interviews,
            and communicate confidently in real life.
          </p>
        </div>

        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Vocabify?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>✔ Smart word tracking system</li>
              <li>✔ Interview-focused vocabulary</li>
              <li>✔ Daily learning progress</li>
              <li>✔ Clean & distraction-free interface</li>
              <li>✔ Designed for serious learners</li>
            </ul>
          </div>

          
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-4">
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make vocabulary learning structured,
              powerful, and practical. We believe that strong vocabulary
              builds confidence, and confidence builds success.
            </p>

            <div className="mt-6">
              <div className="bg-[#4F2CBC] text-white py-3 px-6 rounded-lg inline-block">
                Empowering Learners Every Day 
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
