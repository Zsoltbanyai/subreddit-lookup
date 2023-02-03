import React, {useEffect, useState} from 'react'
import './App.css'
import {SearchForm} from "./component/SearchForm";
import {SortingTab} from "./component/SortingTab";
import {Box} from "@chakra-ui/react";
import {ShowToast} from "./component/ShowToast";
import {PostListing, PostType} from '../../backend/src/type/types';
import {BackendApi} from "./api/backend-api";


function App() {
    const [subName, setSubName] = useState<string>('');
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [posts, setPosts] = useState<PostListing>();
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    const getPosts = async () => {
        const postType: string = PostType[tabIndex];
        return await BackendApi.getPosts(subName, postType, 'week', 10);
    };

    useEffect(() => {
        if (subName) {
            getPosts().then((result) => {
                setPosts(result);
                setIsEmpty(Object.keys(result).length === 0);
            });
        } else {
            setPosts(undefined);
        }
    }, [tabIndex, subName]);

    return (
        <div className='App'>
            <Box width='60vw' mt={85}>
                <Box mb={3}>
                    <SearchForm setSubName={setSubName} />
                </Box>
                {subName && !isEmpty &&
                    <SortingTab setTabIndex={setTabIndex} tabIndex={tabIndex} posts={posts}/>
                }
                {isEmpty && <ShowToast />}
            </Box>
        </div>
    );

}

export default App
