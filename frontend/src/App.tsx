import React, {useEffect, useState} from 'react'
import './App.css'
import {SearchForm} from "./component/SearchForm";
import {SortingTab} from "./component/SortingTab";
import {Box} from "@chakra-ui/react";
import {ShowToast} from "./component/ShowToast";
import {Posts} from '../../backend/src/type/types';
import {BackendApi} from "./api/backend-api";


function App() {
    const [subName, setSubName] = useState<string>('');
    const [posts, setPosts] = useState<Posts>({
        top: null,
        hot: null,
        new: null,
        controversial: null
    });
    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    const getPosts = async () => {
        return await BackendApi.getPosts(subName, 'week', 10);
    };

    useEffect(() => {
        if (subName) {
            getPosts().then((result) => {
                setPosts({
                    top: result.top,
                    hot: result.hot,
                    new: result.new,
                    controversial: result.controversial
                });
                setIsEmpty(Object.keys(result).every(key => result[key].length === 0));
            });
        } else {
            setPosts({ top: null, hot: null, new: null, controversial: null });
        }
    }, [subName]);

    return (
        <div className='App'>
            <Box width='60vw' mt={85}>
                <Box mb={3}>
                    <SearchForm setSubName={setSubName} />
                </Box>
                {subName && !isEmpty &&
                    <SortingTab posts={posts}/>
                }
                {isEmpty && <ShowToast />}
            </Box>
        </div>
    );

}

export default App
