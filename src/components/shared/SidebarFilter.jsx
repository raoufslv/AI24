import React, { useState } from "react";
import { categories } from "@/constants/Categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RatingGroup from "@/components/customUI/RatingGroup";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import tags from "@/constants/tags";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function SidebarFilter() {
  const selectedTagsArray = [];
  const unselectedTagsArray = tags;

  const [selectedTags, setSelectedTags] = useState(selectedTagsArray);
  const [unselectedTags, setUnselectedTags] = useState(unselectedTagsArray);

  return (
    <div
      className="bg-darky py-10 px-6 text-white rounded-lg 
    h-fit max-w-64 flex flex-col gap-6"
    >
      {/* Sort */}
      <div>
        <h3 className="font-bruno text-lg">Sort By</h3>
        <Select>
          <SelectTrigger className="w-48 bg-transparent dark:bg-transparent">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((categorie) => (
              <SelectItem key={categorie.id} value={categorie.name}>
                {categorie.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Rating  */}
      <div>
        <h3 className="font-bruno text-lg">Rating</h3>
        <div className="flex flex-col gap-2">
          <RadioGroup>
            <div className="flex items-center gap-4">
              <Label htmlFor="r4" className="text-white">
                <RatingGroup filled={4} />
              </Label>
              <RadioGroupItem
                value="default"
                id="r4"
                className="bg-white dark:text-darky"
              />
            </div>

            <div className="flex items-center gap-4">
              <Label htmlFor="r3" className="text-white">
                <RatingGroup filled={3} />
              </Label>
              <RadioGroupItem
                value="comfortable"
                id="r3"
                className="bg-white dark:text-darky"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="r2" className="text-white">
                <RatingGroup filled={2} />
              </Label>
              <RadioGroupItem
                value="compact"
                id="r2"
                className="bg-white dark:text-darky"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="r1" className="text-white">
                <RatingGroup filled={1} />
              </Label>
              <RadioGroupItem
                value="compacst2"
                id="r1"
                className="bg-white dark:text-darky"
              />
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-bruno text-lg">Tags</h3>
        <div className="flex gap-2 flex-wrap">
          {
            // create a button for each selected tag
            selectedTags.map((tag) => (
              <Button
                key={tag.id}
                onClick={() => {
                  // remove the tag from the selected tags
                  setSelectedTags(
                    selectedTags.filter(
                      (selectedTag) => selectedTag.id !== tag.id
                    )
                  );
                  // add the tag to the unselected tags
                  setUnselectedTags([...unselectedTags, tag]);
                }}
                className="bg-white text-black hover:bg-transparent border hover:text-white"
              >
                <X size={16} />
                {tag.name}
              </Button>
            ))
          }
          {
            // create a button for each tag
            unselectedTags.map((tag) => (
              <Button
                key={tag.id}
                onClick={() => {
                  // add the tag to the selected tags
                  setSelectedTags([...selectedTags, tag]);
                  // remove the tag from the unselected tags
                  setUnselectedTags(
                    unselectedTags.filter(
                      (unselectedTag) => unselectedTag.id !== tag.id
                    )
                  );
                }}
                variant="outline"
                className="bg-transparent dark:bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                {tag.name}
              </Button>
            ))
          }
        </div>
      </div>
    </div>
  );
}
