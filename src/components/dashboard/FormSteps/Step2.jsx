import ProductShopInfo from "@/components/dashboard/FormSteps/ProductShopInfo";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { useState } from "react";
import { X } from "lucide-react";
import { useShopsQuery } from "@/hooks/react-query/useShop";
import ProductSelector from "../ProductSelector";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";

export default function Step2({ register, errors, getValues, setValue }) {
  const [updatePreview, setUpdatePreview] = useState(false);
  const handleUploadStatusChange = (file, status) => {
    setUpdatePreview(!updatePreview);
    if (status === "done") {
      // Update images array with all uploaded files
      setValue("images", [...getValues("images"), file]);
    }

    if (status === "removed") {
      // Remove the file from images array based on its UUID
      setValue(
        "images",
        getValues("images").filter((image) => image.meta.id !== file.meta.id)
      );
    }
  };

  const [selectedShop, setSelectedShop] = useState("");
  const handleCategoryChange = (shop) => {
    setSelectedShop(shop);
  };

  const { data: shops, isLoading, isError } = useShopsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Dropzone
          inputContent="Drop or click to upload images"
          onChangeStatus={(file, status) => {
            handleUploadStatusChange(file, status);
          }}
          accept="image/*"
          PreviewComponent={() => {}}
          maxFiles={10}
          inputWithFilesContent="Add more"
          styles={{
            dropzone: {
              border: "2px dashed #eaeaea",
              borderRadius: "10px",
              width: "100%",
              minHeight: "200px",
              maxHeight: "200px",
              overflowX: "auto",
              overflowY: "auto",
            },
            inputLabel: {
              color: "#666",
              fontSize: "16px",
              fontWeight: "bold",
            },
          }}
        />
        {/*images preview*/}
        <div className="flex gap-4 absolute top-10 left-1/2 transform -translate-x-1/2">
          {getValues("images").map((image) => (
            <div key={image.meta.id} className="relative">
              <img
                src={image.meta.previewUrl}
                alt={image.meta.name}
                className="h-24 w-24 object-cover rounded-md"
              />
              <X
                className="absolute right-0 top-0 w-5 h-5 rounded-full bg-white dark:bg-neutral-800 dark:bg-opacity-40 cursor-pointer"
                onClick={() => {
                  handleUploadStatusChange(image, "removed");
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {errors.images && <ErrorMessage message={errors.images.message} />}
      <div className="flex gap-4 w-1/4 self-end">
        <ProductSelector
          topic={"Shops"}
          items={shops.map((shop) => shop.name)}
          value={selectedShop}
          onChange={handleCategoryChange}
          img={shops.map((shop) => shop.logoimageurl)}
          flag="flag"
        />
      </div>
      {selectedShop ? (
        shops.map((shop, index) =>
          selectedShop === shop.name ? (
            <ProductShopInfo
              key={index}
              register={register}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
              index={index}
              shopid={shop._id}
            />
          ) : null
        )
      ) : (
        <div>Please select a shop</div>
      )}
      {errors.productShopInfo && <ErrorMessage message={errors.productShopInfo.message} />}
    </div>
  );
}
