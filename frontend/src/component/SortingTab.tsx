import {Stack, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue} from '@chakra-ui/react';
import React from 'react';
import {PostListing} from '../../../backend/src/type/types';
import {SubmissionPopover} from "./Submission";

interface Props {
    setTabIndex: (tabIndex: number) => void,
    tabIndex: number,
    posts: PostListing | undefined
}

export const SortingTab: React.FC<Props> = ({setTabIndex, tabIndex, posts}) => {
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

    const listing = () => {
        if (!posts) return;
        return (
            <Stack spacing={4}>
                {posts.map(submission => (
                    <SubmissionPopover key={submission.name} submission={submission} />
                ))}
            </Stack>
        );

    };

    return (
        <Tabs defaultIndex={0} isLazy onChange={(index) => setTabIndex(index)} bg={bg}>
            <TabList>
                <Tab {...tabStyles} p={2}>Top</Tab>
                <Tab {...tabStyles} p={2}>Hot</Tab>
                <Tab {...tabStyles} p={2}>New</Tab>
                <Tab {...tabStyles} p={2} w='34%'>Controversial</Tab>
            </TabList>
            <TabPanels p="2rem">
                <TabPanel>{listing()}</TabPanel>
                <TabPanel>{listing()}</TabPanel>
                <TabPanel>{listing()}</TabPanel>
                <TabPanel>{listing()}</TabPanel>
            </TabPanels>
        </Tabs>
    );

};
