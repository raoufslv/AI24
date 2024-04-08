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
  const { toast } = useToast();
  const [bookmarked, setBookmarked] = useState(false);

  const AddProductBookmark = useAddProductBookmark();
  const checkProductBookmarks = useCheckProductBookmarks(productId);

  useEffect(() => {
    if (connected) {
      const {
        data: isProductBookmarked,
        isLoading,
        isError,
      } = checkProductBookmarks;
      if (!isLoading && !isError) {
        setBookmarked(isProductBookmarked.message);
      }
    }
  }, [connected, checkProductBookmarks.data, checkProductBookmarks.isLoading]);

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
