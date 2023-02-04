import React from 'react';
import {Submission} from '../../../backend/src/type/types';
import {
    Button, Link, Text, Popover, PopoverArrow,
    PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Flex
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

interface Props {
    submission: Submission;
}

export const SubmissionPopover: React.FC<Props> = ({ submission }) => {

    return (
        <Popover isLazy offset={[0, 8]}>
            <PopoverTrigger>
                <Button style={{ width: "100%" }}>
                    <Text noOfLines={1}>{submission.title}</Text>
                </Button>
            </PopoverTrigger>
            <PopoverContent zIndex={4} width="400px">
                <PopoverHeader borderBottom="1px solid #ddd" p={5}>
                    <Link href={submission.url} isExternal>
                        {submission.title}
                    </Link>
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody p={4}>
                    <Stack>
                        <Text noOfLines={8} fontSize="sm">
                            <ReactMarkdown children={submission.selftext} />
                        </Text>
                        <Flex justifyContent="space-between">
                            <Text fontWeight="semibold">Upvotes: {submission.ups}</Text>
                            <Text fontWeight="semibold">Comments: {submission.num_comments}</Text>
                        </Flex>
                    </Stack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );

};
