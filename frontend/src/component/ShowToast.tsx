import React, {useEffect, useState} from "react";
import {useToast} from "@chakra-ui/react";

export const ShowToast: React.FC = ({}) => {
    const [show, setShow] = useState<boolean>(true);
    const toast = useToast();

    useEffect(() => {
        if (show) {
            toast({
                title: "Subreddit not found",
                description: "The subreddit you are looking for does not exist or cannot be found.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            });
            setShow(false);
        }
    }, [show, toast]);

    return null;

};
