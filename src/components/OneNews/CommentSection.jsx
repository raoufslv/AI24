import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import men1 from "@/assets/images/testimonials/men1.png";

export default function CommentSection() {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-bruno mt-10">Comments</h2>
      <div className="flex items-center relative w-full">
        <Input
          type="comment"
          placeholder="Share your thoughts..."
          className="w-full pr-8 text-black dark:text-white"
        />
        <Button
          type="submit"
          className="bg-transparent dark:bg-transparent dark:text-white dark:hover:text-black text-black hover:text-white hover:bg-black absolute right-0"
        >
          <Send className="" />
        </Button>
      </div>
      <div>
        <div className="flex items-start gap-4 mt-6  p-4 rounded-lg w-full">
          <img
            src={men1} // Path: client/public/images/avatars
            alt="user"
            className="w-12 h-12 rounded-full"
          />
          <div className="rounded-lg flex flex-col">
            <p className="text-sm font-bold">John Doe</p>
            <p className="text-xs text-gray-400">2 hours ago</p>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque, odio ut varius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
