import React, { useState } from "react";
import { DropdownArrow } from "../../common/icon";

const Addword = () => {
  const [formData, setFormData] = useState({
    english: "",
    hindi: "",
    level: "A1",
    confidence: "Easy",
  });

  const [image, setImage] = useState(null);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.english || !formData.hindi) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Word Added:", formData);
    alert("Word Added Successfully ✅");

    // Reset
    setFormData({
      english: "",
      hindi: "",
      level: "A1",
      confidence: "Easy",
    });
    setImage(null);
  };

  return (
    <section className="w-full">
      <div>
        <h2 className="font-outfit font-semibold text-[24px] pb-4">
          Add Word
        </h2>

        <div className="flex flex-row flex-wrap gap-8">

          
          <div className="sm:w-6/12 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">

              
              <div>
                <label
                  htmlFor="english"
                  className="text-[14px] font-medium block pb-1"
                >
                  English Word
                </label>
                <input
                  id="english"
                  type="text"
                  value={formData.english}
                  onChange={handleChange}
                  placeholder="Enter english word"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-[#546FFF] outline-none"
                />
              </div>

              
              <div>
                <label
                  htmlFor="hindi"
                  className="text-[14px] font-medium block pb-1"
                >
                  Hindi Word
                </label>
                <input
                  id="hindi"
                  type="text"
                  value={formData.hindi}
                  onChange={handleChange}
                  placeholder="Enter hindi word"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-[#546FFF] outline-none"
                />
              </div>

              
              <div className="w-[200px]">
                <label
                  htmlFor="level"
                  className="text-[14px] font-medium block pb-2"
                >
                  Level
                </label>

                <div className="relative">
                  <select
                    id="level"
                    value={formData.level}
                    onChange={handleChange}
                    className="w-full appearance-none bg-[#F5F5F7]
                    border border-[#E2E5F1]
                    py-2 px-3 pr-8
                    rounded-lg text-sm font-medium
                    outline-none
                    focus:ring-2 focus:ring-[#546FFF]"
                  >
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                  </select>

                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <DropdownArrow />
                  </div>
                </div>
              </div>

              
              <div className="w-[200px]">
                <label
                  htmlFor="confidence"
                  className="text-[14px] font-medium block pb-1"
                >
                  Confidence
                </label>
                <select
                  id="confidence"
                  value={formData.confidence}
                  onChange={handleChange}
                  className="w-full border border-gray-300 py-2 px-3 rounded-md focus:ring-2 focus:ring-[#546FFF] outline-none"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              
              <button
                type="submit"
                className="bg-[#4F2CBC] hover:bg-[#3d22a8] transition duration-200 cursor-pointer text-white w-full py-2 px-4 rounded-md"
              >
                Add Word
              </button>
            </form>
          </div>

          
          <div className="sm:w-3/12 w-full">
            <div>
              <label className="text-[14px] font-medium block pb-1">
                Upload Image
              </label>

              <div className="border-2 border-dashed border-gray-400 p-5 rounded-md text-center">

                <input
                  type="file"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                />

                {image && (
                  <img
                    src={image}
                    alt="preview"
                    className="mt-3 rounded-md"
                  />
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Addword;
