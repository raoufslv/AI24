import { ImagePlus, X } from "lucide-react";


export default function ProfilPicUpload({ LocalImage, setLocalImage, setValue}) {
  return (
    <>
      <input
        type="file"
        id="image"
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setValue("image", file);
            setLocalImage(URL.createObjectURL(file));
          }
        }}
      />

      <div className="flex items-center justify-center mt-6">
        {LocalImage ? (
          <div className="relative w-24 h-24 rounded-full">
            <img
              src={LocalImage}
              alt="profile pic"
              className="w-24 h-24 rounded-full object-cover"
            />
            <X
              className="absolute right-0 top-0 w-6 h-6 rounded-full bg-white dark:bg-neutral-800 cursor-pointer"
              onClick={() => {
                setValue("image", null);
                setLocalImage(null);
              }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <label
              htmlFor="image"
              className="cursor-pointer flex items-center justify-center w-24 h-24 rounded-full bg-neutral-200 dark:bg-neutral-700"
            >
              <ImagePlus className="w-10 h-10" />
            </label>
            <span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              Upload a profile picture
            </span>
          </div>
        )}
      </div>
    </>
  );
}
