import { useState, useEffect } from "react";
import sortList from "@/constants/sort";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import tags from "@/constants/tags";

export default function SidebarFilter({ setSort, setTags, category }) {
  // get the tags that belong to the category
  let FilteredTags = tags;
  if (category) {
    FilteredTags = tags.filter((tag) => tag.categories.includes(category));
  }

  const [unselectedTags, setUnselectedTags] = useState(FilteredTags);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    // put only the tag names in the tags array
    setTags(selectedTags.map((tag) => tag.name));
  }, [selectedTags]);

  useEffect(() => {
    // get the tags that belong to the category
    if (category) {
      FilteredTags = tags.filter((tag) => tag.categories.includes(category));
    }
    // set the unselected tags to the filtered tags
    setUnselectedTags(FilteredTags);
  }, [category]);

  return (
    <div
      className="bg-darky py-10 px-6 text-white rounded-lg 
    h-fit max-w-64 flex flex-col gap-6"
    >
      {/* Sort */}
      <div>
        <h3 className="font-bruno text-lg">Sort By</h3>
        <Select
          onValueChange={(value) => {
            setSort(value);
          }}
        >
          <SelectTrigger className="w-48 bg-transparent dark:bg-transparent">
            <SelectValue placeholder="Default" />
          </SelectTrigger>
          <SelectContent>
            {sortList.map((sort, idx) => (
              <SelectItem key={idx} value={sort}>
                {sort}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
