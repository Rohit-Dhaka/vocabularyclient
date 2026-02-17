import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("Rohit Dhaka");
  const [status, setStatus] = useState(
    "Hey there! I am using Vocabify."
  );
  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState(null);

  const totalWords = 30;
  const learnedWords = 18;
  const joinedDate = "January 2026";

  const handleSave = () => {
    setEditMode(false);
    alert("Profile Updated ✅");
  };

  return (
    <section className="w-full">
      <div className="bg-white shadow rounded-lg overflow-hidden">

        
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-[150px] relative">

          
          <div className="absolute bottom-[-62px] left-[5%] w-[125px] h-[125px] rounded-full border-4 border-white bg-gray-200 overflow-hidden">

            {image ? (
              <img
                src={image}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : null}

          </div>
        </div>

        
        <div className="pt-20 px-6 pb-6">

          
          <div className="flex justify-end">
            <button
              onClick={() => setEditMode(!editMode)}
              className="text-purple-600 font-medium"
            >
              {editMode ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          
          <h5 className="text-[14px] font-semibold mt-2">
            Name
          </h5>

          {editMode ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded w-full mt-1"
            />
          ) : (
            <h3 className="text-[24px] font-medium pb-2">
              {name}
            </h3>
          )}

          
          <h5 className="text-[14px] font-semibold">
            Status
          </h5>

          {editMode ? (
            <textarea
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-2 rounded w-full mt-1"
            />
          ) : (
            <h3 className="text-[18px] pb-3">
              {status}
            </h3>
          )}

          
          {editMode && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Change Profile Picture
              </label>
              <input
                type="file"
                onChange={(e) =>
                  setImage(
                    URL.createObjectURL(e.target.files[0])
                  )
                }
              />
            </div>
          )}

          {editMode && (
            <button
              onClick={handleSave}
              className="bg-purple-600 text-white py-2 px-4 rounded-md"
            >
              Save Changes
            </button>
          )}

          
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">

            <div className="bg-gray-100 p-3 rounded">
              <h4 className="font-semibold">
                {totalWords}
              </h4>
              <p className="text-sm text-gray-500">
                Total Words
              </p>
            </div>

            <div className="bg-gray-100 p-3 rounded">
              <h4 className="font-semibold">
                {learnedWords}
              </h4>
              <p className="text-sm text-gray-500">
                Learned
              </p>
            </div>

            <div className="bg-gray-100 p-3 rounded">
              <h4 className="font-semibold">
                {joinedDate}
              </h4>
              <p className="text-sm text-gray-500">
                Joined
              </p>
            </div>

          </div>

          
          <div className="mt-4">
            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm">
               Vocabulary Explorer
            </span>
          </div>

          
          <Link to="/" className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full">
            Logout
          </Link>
          

        </div>
      </div>
    </section>
  );
};

export default Profile;
