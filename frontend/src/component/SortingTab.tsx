import {Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue} from '@chakra-ui/react';
import React, {useState} from 'react';
import {PostListing, Posts} from '../../../backend/src/type/types';
import {SubmissionPopover} from './Submission';
import {AnimatePresence, motion} from 'framer-motion';

interface Props {
    posts: Posts
}

export const SortingTab: React.FC<Props> = ({ posts }) => {
    const [tabIndex, setTabIndex] = useState<number>(0);

    const colors = useColorModeValue(
        ['teal.50', 'red.50', 'blue.50', 'yellow.50'],
        ['teal.900', 'red.900', 'blue.900', 'yellow.900']
    );
    const bg = colors[tabIndex];
    const tabStyles = {
        w: '22%',
        fontWeight: 'semibold',
        fontSize: '1.2rem',
        borderRadius: '1rem 1rem 0 0',
        bg: {bg}
    };

    const listing = (submissions: PostListing) => {
        if (!submissions) return;
        return (
            <Stack spacing={4}>
                {submissions.map(submission => (
                    <SubmissionPopover key={submission.name} submission={submission} />
                ))}
            </Stack>
        );
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Tabs defaultIndex={0} isLazy onChange={(index) => setTabIndex(index)} bg={bg}>
                    <TabList>
                        <Tab {...tabStyles} p={2}>Top</Tab>
                        <Tab {...tabStyles} p={2}>Hot</Tab>
                        <Tab {...tabStyles} p={2}>New</Tab>
                        <Tab {...tabStyles} p={2} w='34%'>Controversial</Tab>
                    </TabList>
                    <TabPanels p='2rem'>
                        <TabPanel>{listing(posts.top)}</TabPanel>
                        <TabPanel>{listing(posts.hot)}</TabPanel>
                        <TabPanel>{listing(posts.new)}</TabPanel>
                        <TabPanel>{listing(posts.controversial)}</TabPanel>
                    </TabPanels>
                </Tabs>
            </motion.div>
        </AnimatePresence>
    );

};
