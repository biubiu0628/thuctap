import React, { useState } from "react";
import Camera from "../../images/Create/Camera.svg";

const FileImage = () => {
  const [selectedImage, setSelectedImage] = useState([]);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage([...selectedImage, imageUrl]);
    }
  };

  const removeImage = (index) => {
    setSelectedImage(selectedImage.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap gap-3 py-4">
      <div>
        <label
          htmlFor="upImage"
          className="w-[100px] h-[80px] flex items-center justify-center 
          rounded-md border-dashed border-[#FBEFF2] border-[2px] cursor-pointer"
        >
          <img src={Camera} alt="" />
        </label>
        <input
          id="upImage"
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />
      </div>
      {selectedImage.map((image, index) => (
        <div
          key={index}
          className="relative w-[100px] h-[80px] border-[1px] rounded-md"
        >
          <button
            className="absolute top-1 right-1 size-5 rounded-full bg-gray-300 
            flex items-center justify-center hover:bg-white"
            onClick={() => removeImage(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={image}
            alt={`Selected ${index}`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default FileImage;
