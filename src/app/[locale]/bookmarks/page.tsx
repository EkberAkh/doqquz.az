"use client";
import { Box, VStack, Text, Flex } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { BookmarkedJoobseeker, Jobseeker } from "./BookmarkedJoobseeker";
import BookmarkedPosts, { Post } from "./BookmarkedPosts";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

type Bookmark = {
  id: number;
  post: Post; // Add the post property
};
type BookmarkOrJobseeker = Bookmark | Jobseeker;

const Bookmarks = () => {
  const t = useTranslations();
  const [bookmark, setBookmark] = useState<BookmarkOrJobseeker[]>([]);

  useEffect(() => {
    const fetchBookmarkData = async () => {
      const url = "https://neo-814m.onrender.com/v1/bookmark/";
      const token = Cookies.get("token");

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Token: `${token}`,
        },
      };
      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setBookmark(data);

        console.log(data);
      } catch (error) {
        console.error("There was an error fetching the bookmark data:", error);
      }
    };
    fetchBookmarkData();
  }, []);
  console.log(bookmark);

  const handleDelete = async (id: number) => {
    const url = `https://neo-814m.onrender.com/v1/bookmark/${id}`;
    const token = Cookies.get("token");

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Token: `${token}`,
      },
    };

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      setBookmark((prevBookmarks) =>
        prevBookmarks.filter((bookmark) => bookmark.id !== id)
      );

      console.log(`Bookmark with ID ${id} deleted successfully)`);
    } catch (error) {
      console.error("There was an error deleting the bookmark:", error);
    }
  };

  return (
    <Box w={"100%"}>
      <Flex w={"100%"} justify={"center"}>
        <VStack w={"80%"} align={"flex-start"}>
          <Text fontSize={"1.6rem"} fontWeight={700} p={"1.5rem 0"}>
            {t("Common.Menu.profile.items.bookmarks")}
          </Text>
          <BookmarkedPosts
            bookmark={bookmark.filter(
              (item): item is Bookmark => "post" in item
            )}
            handleDelete={handleDelete}
          />

          <BookmarkedJoobseeker
            bookmark={bookmark.filter(
              (item): item is Jobseeker => "jobseeker" in item
            )}
            handleDelete={handleDelete}
          />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Bookmarks;
