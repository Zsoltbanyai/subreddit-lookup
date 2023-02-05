import {useEffect, useState} from 'react'
import './App.css'
import {SearchForm} from './component/SearchForm';
import {SortingTab} from './component/SortingTab';
import {Box, Spinner, Text} from '@chakra-ui/react';
import {ShowToast} from './component/ShowToast';
import {Posts} from '../../backend/src/type/types';
import {BackendApi} from './api/backend-api';


function App() {
    const [subName, setSubName] = useState<string>('');
    const [posts, setPosts] = useState<Posts>({
        top: null,
        hot: null,
        new: null,
        controversial: null
    });
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const getPosts = async () => {
        setLoading(true);
        const result = await BackendApi.getPosts(subName, 'week', 10);
        setLoading(false);
        return result;
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
                <Text fontWeight='bold' fontSize='30px' mb={5}>What are you interested in?</Text>
                <Box mb={3}>
                    <SearchForm setSubName={setSubName} />
                </Box>
                {loading && (
                    <Box mt='10vh'>
                        <Spinner
                            thickness='6px'
                            speed='0.8s'
                            emptyColor='gray.300'
                            color='blue.600'
                            size='xl'
                        />
                    </Box>
                )}
                {!loading && subName && !isEmpty && <SortingTab posts={posts} />}
                {isEmpty && <ShowToast />}
            </Box>
        </div>
    );

}

export default App
