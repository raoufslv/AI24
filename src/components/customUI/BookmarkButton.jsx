import { Bookmark } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  useAddProductBookmark,
  useCheckProductBookmarks,
} from "@/hooks/react-query/useUser";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function BookmarkButton({ productId, size }) {
  const { connected, openLogin, setOpenLogin } = useAuth();
  const { toast } = useToast();
  const [bookmarked, setBookmarked] = useState(false);

  const AddProductBookmark = useAddProductBookmark();

  const handleBookmarkClick = async (event) => {
    event.preventDefault();
    if (connected) {
      const response = await AddProductBookmark.mutateAsync(productId);
      setBookmarked(!bookmarked);
      toast({
        description: response.message,
      });
    } else {
      // i want here to open the login modal
      setOpenLogin(true);
    }
  };

  if (connected) {
    const {
      data: isProductBookmarked,
      isLoading,
      isError,
    } = useCheckProductBookmarks(productId);

    useEffect(() => {
      if (!isLoading && !isError) {
        setBookmarked(isProductBookmarked.message);
      }
    }, [isLoading, isProductBookmarked]);
  }
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
