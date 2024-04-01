import React from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { useNavigate } from "react-router-dom";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function SelectCategory({ category, subcategories }) {
  const navigate = useNavigate();

  return (
    <MenubarMenu>
      <Button
        className="text-white dark:text-white 
          hover:bg-transparent dark:hover:bg-transparent bg-transparent 
          dark:bg-transparent border-0 p-0"
        onClick={() =>
          navigate({
            pathname: "/categories",
            search: `categories=${category}`,
          })
        }
      >
        {category}
      </Button>
      <MenubarTrigger>
        <ChevronDown color="#fff" />
      </MenubarTrigger>
      <MenubarContent>
        <ScrollArea className="h-96 w-48">
          {subcategories.map((subcategory, idx) =>
            subcategory.subjects ? (
              <MenubarSub key={idx}>
                <MenubarSubTrigger
                  onClick={() =>
                    navigate({
                      pathname: "/products",
                      search: `categories=${category}&subcategories=${subcategory.name}`,
                    })
                  }
                >
                  {subcategory.name}
                </MenubarSubTrigger>
                <MenubarSubContent>
                  {subcategory.subjects.map((subject, idx) => (
                    <MenubarItem
                      key={idx}
                      onClick={() =>
                        navigate({
                          pathname: "/products",
                          search: `categories=${category}&subcategories=${subcategory.name}&subjects=${subject}`,
                        })
                      }
                    >
                      {subject}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ) : (
              <MenubarItem
                key={idx}
                onClick={() =>
                  navigate({
                    pathname: "/products",
                    search: `categories=${category}&subcategories=${subcategory.name}`,
                  })
                }
              >
                {subcategory.name}
              </MenubarItem>
            )
          )}
        </ScrollArea>
      </MenubarContent>
    </MenubarMenu>
  );
}
