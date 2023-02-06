import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Button, Grid, Input} from '@chakra-ui/react';

interface Prop {
    setSubName: (subName: string) => void
}

export const SearchForm: React.FC<Prop> = ({ setSubName }) => {
    const [value, setValue] = useState<string>('');

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
            >
                <Grid templateColumns='1fr auto' alignItems='center'>
                    <Input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={e => {
                            if (e.key === 'Enter') {
                                setSubName(value);
                            }
                        }}
                    />
                    <Button onClick={() => setSubName(value)}>Search</Button>
                </Grid>
            </motion.div>
        </AnimatePresence>
    );

};
