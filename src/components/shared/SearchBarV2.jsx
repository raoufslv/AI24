// SearchBar.js
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBarV2({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-96 relative mt-4">
      <Input
        placeholder="Search for products"
        className=""
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute right-3 top-2 p-0" />
    </div>
  );
}
