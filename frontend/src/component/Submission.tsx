import React from 'react';
import {Submission} from '../../../backend/src/type/types';
import {
    Button, Link, Text, Popover, PopoverArrow,
    PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Stack, Flex
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

interface Props {
    submission: Submission;
}

export const SubmissionPopover: React.FC<Props> = ({ submission }) => {

    return (
        <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Popover isLazy>
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
                            <div style={{ maxHeight: '10.3em', overflow: 'hidden', fontSize: '12px' }}>
                                <ReactMarkdown children={submission.selftext} />
                            </div>
                            <Flex justifyContent="space-between" pt={4}>
                                <Text fontWeight="semibold">Upvotes: {submission.ups}</Text>
                                <Text fontWeight="semibold">Comments: {submission.num_comments}</Text>
                            </Flex>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </motion.div>
    );

};
