import { Box, VStack, Text, Flex } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { BookmarkedJoobseeker } from "./BookmarkedJoobseeker";
import { BookmarkedPosts } from "./BookmarkedPosts";

const Bookmarks = () => {
    const t = useTranslations();
    return (
        <Box w={'100%'}>
            <Flex w={'100%'} justify={'center'}>
                <VStack w={'80%'} align={'flex-start'}>
                    <Text fontSize={'1.6rem'} fontWeight={700} p={'1.5rem 0'}>{t('Common.Menu.profile.items.bookmarks')}</Text>
                    <BookmarkedPosts />
                    <BookmarkedJoobseeker />
                </VStack>
            </Flex>
        </Box>
    )
}

export default Bookmarks;