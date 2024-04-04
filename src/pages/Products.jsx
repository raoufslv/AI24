// Products.js
import React, { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import CategoriesBar from "@/components/shared/CategoriesBar";
import DividerLine from "@/components/customUI/forms/DividerLine";
import SidebarFilter from "@/components/shared/SidebarFilter";
import FilterOptions from "@/components/shared/FilterOptions";
import SearchBarV2 from "@/components/shared/SearchBarV2";
import ProductsList from "@/components/customUI/ProductsList";
import { useProductsQuery } from "@/hooks/react-query/useProduct";
import { getProducts } from "@/services/productsService";

export default function Products() {
  const [queryParameters] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    queryParameters.get("search") || ""
  );
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const categories = queryParameters.get("categories");
  const subcategories = queryParameters.get("subcategories");
  const subjects = queryParameters.get("subjects");
  const [selectedSoftware, setSelectedSoftware] = useState("");
  const [selectedLicense, setSelectedLicense] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [sort, setSort] = useState("Default");
  const [tags, setTags] = useState([]);
  const { error, data, isLoading, isPlaceholderData } = useProductsQuery(
    page,
    searchQuery,
    categories,
    subcategories,
    subjects,
    selectedSoftware,
    selectedLicense,
    minPrice,
    maxPrice,
    sort,
    tags
  );

  useEffect(() => {
    searchQuery !== "" && setPage(1);
    if (!isPlaceholderData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: [
          "products",
          page + 1,
          searchQuery,
          categories,
          subcategories,
          subjects,
          selectedSoftware,
          selectedLicense,
          minPrice,
          maxPrice,
          sort,
          tags,
        ],
        queryFn: () =>
          getProducts(
            page + 1,
            searchQuery,
            categories,
            subcategories,
            subjects,
            selectedSoftware,
            selectedLicense,
            minPrice,
            maxPrice,
            sort,
            tags
          ),
      });
    }
  }, [
    data,
    isPlaceholderData,
    page,
    queryClient,
    searchQuery,
    categories,
    subcategories,
    subjects,
    selectedSoftware,
    selectedLicense,
    minPrice,
    maxPrice,
    sort,
    tags,
  ]);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <CategoriesBar flag="products" />
        <SearchBarV2
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <FilterOptions
          selectedSoftware={selectedSoftware}
          setSelectedSoftware={setSelectedSoftware}
          selectedLicense={selectedLicense}
          setSelectedLicense={setSelectedLicense}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
        />
      </div>
      <DividerLine className={"opacity-40 mt-1"} />
      <div className="flex sm:flex-row flex-col gap-4 sm:items-start items-center">
        <SidebarFilter
          setSort={setSort}
          setTags={setTags}
          category={categories}
        />
        <ProductsList
          data={data}
          isLoading={isLoading}
          error={error}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}
