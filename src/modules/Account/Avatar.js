import React, { useState } from "react";
import Edit from "../../images/Account/Edit.svg";

const Avatar = () => {
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem("avatar") || null;
  });

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      localStorage.setItem("avatar", imageUrl);
    }
  };

  return (
    <div className="relative size-[120px]">
      <div className="w-full h-full border-[1px] rounded-full">
        <img
          src={avatar}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div
        className="absolute bottom-1 right-1 backdrop-blur-md rounded-full 
        size-8 flex items-center justify-center bg-black/10"
      >
        <label
          htmlFor="upAvatar"
          className="size-[36px] rounded-full 
          cursor-pointer flex items-center justify-center"
        >
          <img src={Edit} alt="edit icon" />
        </label>
        <input
          id="upAvatar"
          type="file"
          accept="image/*"
          onChange={handleChangeAvatar}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Avatar;
