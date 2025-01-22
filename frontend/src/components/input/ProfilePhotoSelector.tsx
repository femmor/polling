import { ChangeEvent, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";

import { LuUpload, LuTrash } from "react-icons/lu";

interface ProfilePhotoSelectorProps {
  id?: string;
  image: File | null;
  setImage: (image: File | null) => void;
}

const ProfilePhotoSelector = ({
  id,
  image,
  setImage,
}: ProfilePhotoSelectorProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Update the image state
      setImage(file);

      // Generate preview url from the file object
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl("");
  };

  const onChooseImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        id={id}
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleImageChange}
      />
      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-sky-100 rounded-full relative">
          <CgProfile className="text-4xl text-primary cursor-pointer" />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -right-1 -bottom-1"
            onClick={onChooseImage}
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="profile photo"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -right-1 -bottom-1"
            onClick={handleRemoveImage}
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
