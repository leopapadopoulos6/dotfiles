import React from 'react';
import {Box, Text, Code, Grid, VStack, Spacer, Heading, Button, CardHeader, CardBody, CardFooter} from '@chakra-ui/react';
import config from '../data/text/config';
import { Logo } from '../themes/Logo';
import Card1 from '../themes/Card';



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
                <Card1 variant='smooth'>
                    <CardHeader>
                        <Heading>
                            <Code fontFamily="heading" fontSize="lg">{props}</Code>
                        </Heading>
                    </CardHeader>

                    <CardBody>
                        <Text >
                            Welcome back, LEONIDAS
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Text >
                            Use your fingerprint to continue.
                        </Text>
                    </CardFooter>
                </Card1>
                <Spacer />
            </VStack>
        </Grid>
    </Box>

    );
};

export default Construction;
