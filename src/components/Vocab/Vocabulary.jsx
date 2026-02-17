import React, { useState } from "react";
import { Eye, EyeOff, Star, Trash2, ArrowUpDown } from "lucide-react";

const Vocabulary = () => {
  const [showHindi, setShowHindi] = useState(false);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("All");
  const [sortAZ, setSortAZ] = useState(false);

const [vocabData, setVocabData] = useState([
  { id: 1, english: "Beautiful", hindi: "सुंदर", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?nature" },
  { id: 2, english: "Brave", hindi: "बहादुर", level: "A2", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?warrior" },
  { id: 3, english: "Opportunity", hindi: "अवसर", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?success" },
  { id: 4, english: "Happy", hindi: "खुश", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?smile" },
  { id: 5, english: "Strong", hindi: "मजबूत", level: "A2", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?strength" },
  { id: 6, english: "Knowledge", hindi: "ज्ञान", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?books" },
  { id: 7, english: "Peace", hindi: "शांति", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?peace" },
  { id: 8, english: "Victory", hindi: "विजय", level: "B1", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?victory" },
  { id: 9, english: "Future", hindi: "भविष्य", level: "A2", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?future" },
  { id: 10, english: "Dream", hindi: "सपना", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?dream" },
  { id: 11, english: "Success", hindi: "सफलता", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?success" },
  { id: 12, english: "Freedom", hindi: "स्वतंत्रता", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?freedom" },
  { id: 13, english: "Confidence", hindi: "आत्मविश्वास", level: "A2", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?confidence" },
  { id: 14, english: "Growth", hindi: "विकास", level: "B1", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?growth" },
  { id: 15, english: "Kindness", hindi: "दयालुता", level: "A2", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?kindness" },
  { id: 16, english: "Energy", hindi: "ऊर्जा", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?energy" },
  { id: 17, english: "Courage", hindi: "साहस", level: "B1", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?courage" },
  { id: 18, english: "Wisdom", hindi: "बुद्धिमत्ता", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?wisdom" },
  { id: 19, english: "Respect", hindi: "सम्मान", level: "A2", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?respect" },
  { id: 20, english: "Discipline", hindi: "अनुशासन", level: "B1", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?discipline" },
  { id: 21, english: "Hope", hindi: "आशा", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?hope" },
  { id: 22, english: "Challenge", hindi: "चुनौती", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?challenge" },
  { id: 23, english: "Believe", hindi: "विश्वास करना", level: "A2", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?believe" },
  { id: 24, english: "Focus", hindi: "ध्यान", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?focus" },
  { id: 25, english: "Effort", hindi: "प्रयास", level: "A2", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?effort" },
  { id: 26, english: "Patience", hindi: "धैर्य", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?patience" },
  { id: 27, english: "Ambition", hindi: "महत्वाकांक्षा", level: "B1", confidence: "Medium", favorite: false, image: "https://source.unsplash.com/300x200/?ambition" },
  { id: 28, english: "Talent", hindi: "प्रतिभा", level: "A2", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?talent" },
  { id: 29, english: "Victory", hindi: "जीत", level: "A1", confidence: "Easy", favorite: false, image: "https://source.unsplash.com/300x200/?win" },
  { id: 30, english: "Leadership", hindi: "नेतृत्व", level: "B1", confidence: "Hard", favorite: false, image: "https://source.unsplash.com/300x200/?leader" }
]);



  let filteredData = vocabData.filter((item) => {
    return (
      item.english.toLowerCase().includes(search.toLowerCase()) &&
      (levelFilter === "All" || item.level === levelFilter)
    );
  });


  if (sortAZ) {
    filteredData = [...filteredData].sort((a, b) =>
      a.english.localeCompare(b.english)
    );
  }


  const toggleFavorite = (id) => {
    setVocabData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, favorite: !item.favorite }
          : item
      )
    );
  };


  const deleteWord = (id) => {
    setVocabData((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const levelColor = (level) => {
    switch (level) {
      case "A1":
        return "bg-green-100 text-green-600";
      case "A2":
        return "bg-blue-100 text-blue-600";
      case "B1":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="">

      
      <div className="flex flex-wrap gap-4 mb-6 items-center">

        <input
          type="text"
          placeholder="Search English word..."
          className="border p-2 rounded w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
        </select>

        <button
          onClick={() => setShowHindi(!showHindi)}
          className="border p-2 rounded bg-purple-600 text-white"
        >
          {showHindi ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

        <button
          onClick={() => setSortAZ(!sortAZ)}
          className="border p-2 rounded bg-gray-800 text-white"
        >
          <ArrowUpDown size={18} />
        </button>

        <div className="ml-auto font-semibold">
          Total Words: {filteredData.length}
        </div>

      </div>

      
      {filteredData.length === 0 ? (
        <div className="text-center text-gray-500">
          No words found 
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="border rounded p-4 shadow hover:shadow-lg transition flex gap-4 items-center bg-white"
            >
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold">
                    {item.english}
                  </h2>

                  <button
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <Star
                      size={20}
                      className={
                        item.favorite
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-400"
                      }
                    />
                  </button>
                </div>

                {showHindi && (
                  <p className="text-gray-600">
                    {item.hindi}
                  </p>
                )}

                <div className="flex gap-2 mt-2 items-center">
                  <span
                    className={`text-xs px-2 py-1 rounded ${levelColor(
                      item.level
                    )}`}
                  >
                    {item.level}
                  </span>

                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                    {item.confidence}
                  </span>
                </div>

                <button
                  onClick={() => deleteWord(item.id)}
                  className="text-red-500 mt-2 flex items-center gap-1 text-sm"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>

              <img
                src={item.image}
                alt={item.english}
                className="w-24 h-20 object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vocabulary;
