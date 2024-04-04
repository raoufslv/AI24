import DividerLine from "@/components/customUI/forms/DividerLine";
import { Star } from "lucide-react";
export default function ProductSpecificationList({
  license,
  software,
  category,
  price,
  rating,
  tags,
  author,
}) {
  return (
    <div className="rounded-lg 2xl:w-[30rem] xl:w-[25rem]">
      <h2 className="text-lg font-bold font-bruno">Specification</h2>

      <ul className="list-disc list-inside mt-6">
        <li className="flex justify-between">
          <h4 className="font-bold">License :</h4>
          <p>{license}</p>
        </li>
        <DividerLine className="opacity-30" />
        <li className="flex justify-between">
          <h4 className="font-bold">Software :</h4>
          <p>{software}</p>
        </li>
        <DividerLine className="opacity-30" />
        <li className="flex justify-between">
          <h4 className="font-bold">Category :</h4>
          <p>{category}</p>
        </li>
        <DividerLine className="opacity-30" />
        <li className="flex justify-between">
          <h4 className="font-bold">Price :</h4>
          <p>{price}$</p>
        </li>
        <DividerLine className="opacity-30" />
        <li className="flex justify-between">
          <h4 className="font-bold">Rating :</h4>
          <p className="flex gap-1 items-center">
            {rating} <Star />{" "}
          </p>
        </li>
        <DividerLine className="opacity-30" />
        <li className="flex justify-between">
          <h4 className="font-bold">Author :</h4>
          <p className="flex gap-1 items-center">{author}</p>
        </li>
        <DividerLine className="opacity-30" />
        <li className="flex justify-between">
          <h4 className="font-bold">Tags :</h4>
          <p>{tags.join(", ")}</p>
        </li>
      </ul>
    </div>
  );
}
