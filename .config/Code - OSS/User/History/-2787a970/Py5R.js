import React from 'react';
import {Box, Text, Code, Grid, VStack, Spacer, Heading, Button} from '@chakra-ui/react';
import config from '../data/text/config';
import { Logo } from '../themes/Logo';

const Construction = (props) => {
    props = config.construction
    return (

    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Spacer />
                <Logo h="40vmin" pointerEvents="none" />
                <Spacer />
                <Button variant='outline'>
                    testi
                </Button>
                <Card>
                    <Heading mt={6} maxW={60} size='lg' textAlign='center'>
                        <Code fontFamily="heading" fontSize="lg">{props}</Code>
                    </Heading>
                    <Heading mt={6} maxW={60} size='lg' textAlign='center' color='blue'>
                        Welcome back, Eric
                    </Heading>
                    <Text mt={6} mb={6} size='sm' color='blue'>
                        Use your fingerprint to continue.
                    </Text>
                </Card>
                <Spacer />
            </VStack>
        </Grid>
    </Box>

    );
};

export default Construction;
