import React from 'react';
import {Box, Text, Code, Grid, VStack, Spacer, Heading, Button, CardHeader, CardBody, CardFooter} from '@chakra-ui/react';
import config from '../data/text/config';
import { Logo } from '../themes/Logo';
import Card from '../themes/Card';


const Construction = (props) => {
    props = config.construction
    return (

    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Spacer />
                <Logo h="40vmin" pointerEvents="none" />
                <Spacer />
                <Button variant='solid'>
                    testi
                </Button>
                <Card>
                    <CardHeader>
                        <Heading>
                            <Code fontFamily="heading" fontSize="lg">{props}</Code>
                        </Heading>
                    </CardHeader>

                    <CardBody>
                        <Text mt={6} maxW={60} size='lg' textAlign='center'>
                            Welcome back, Eric
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Text mt={6} mb={6} size='sm'>
                            Use your fingerprint to continue.
                        </Text>
                    </CardFooter>
                </Card>
                <Spacer />
            </VStack>
        </Grid>
    </Box>

    );
};

export default Construction;
