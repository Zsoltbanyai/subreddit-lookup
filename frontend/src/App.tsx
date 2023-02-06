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
    const [posts, setPosts] = useState<Posts | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [shouldToast, setShouldToast] = useState<boolean>(false);

    const getPosts = async () => {
        setLoading(true);
        const result = await BackendApi.getPosts(subName, 'week', 10);
        setLoading(false);
        return result;
    };

    useEffect(() => {
        if (subName) {
            getPosts().then((result) => {
                if (!result || result.new.length === 0) {
                    setPosts(null);
                    setShouldToast(true);
                } else {
                    setPosts({
                        top: result.top,
                        hot: result.hot,
                        new: result.new,
                        controversial: result.controversial
                    });
                    setShouldToast(false);
                }
            });
        } else {
            setPosts(null);
            setShouldToast(false);
        }
    }, [subName]);

    return (
        <div className='App'>
            <Box w='66vw' mt={85}>
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
                {!loading && subName && posts && <SortingTab posts={posts} />}
                {!loading && subName && shouldToast && <ShowToast />}
            </Box>
        </div>
    );

}

export default App
