import React, {useState} from 'react';
import {Button, Grid, Input} from '@chakra-ui/react';

interface Prop {
    setSubName: (subName: string) => void
}

export const SearchForm: React.FC<Prop> = ({ setSubName }) => {
    const [value, setValue] = useState<string>('');

    return (
        <Grid templateColumns="1fr auto" alignItems="center">
            <Input value={value} onChange={(e) => setValue(e.target.value)} />
            <Button onClick={() => setSubName(value)}>Search</Button>
        </Grid>
    );

};
