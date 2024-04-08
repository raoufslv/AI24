import { Bookmark } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  useAddProductBookmark,
  useCheckProductBookmarks,
} from "@/hooks/react-query/useUser";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function BookmarkButton({ productId, size }) {
  const { connected, setOpenLogin } = useAuth();
  const [bookmarked, setBookmarked] = useState(false);
  const { toast } = useToast();
  const AddProductBookmark = useAddProductBookmark();
  const {
    data: isProductBookmarked,
    isLoading,
    isError,
  } = useCheckProductBookmarks(productId, connected);

  const handleBookmarkClick = async (event) => {
    event.preventDefault();
    if (connected) {
      const response = await AddProductBookmark.mutateAsync(productId);
      setBookmarked(!bookmarked);
      toast({
        description: response.message,
      });
    } else {
      setOpenLogin(true);
    }
  };

  useEffect(() => {
    if (!isLoading && !isError && isProductBookmarked) {
      setBookmarked(isProductBookmarked.message);
    } else {
      setBookmarked(false);
    }
  }, [isProductBookmarked, isLoading, isError]);

  return (
    <Bookmark
      onClick={handleBookmarkClick}
      className={`cursor-pointer ${
        bookmarked ? "fill-black dark:fill-white" : ""
      }`}
      size={size}
    />
  );
}
