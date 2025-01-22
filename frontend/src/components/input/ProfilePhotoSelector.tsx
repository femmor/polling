import { useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";

import { LuUpload, LuTrash } from "react-icons/lu";

interface ProfilePhotoSelectorProps {
  image: string;
  setImage: (image: string) => void;
}

const ProfilePhotoSelector = ({
  image,
  setImage,
}: ProfilePhotoSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleRemoveImage = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onChooseImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleImageChange}
      />
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
    </div>
  );
};

export default ProfilePhotoSelector;
