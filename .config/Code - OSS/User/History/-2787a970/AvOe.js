import React from 'react';
import {Box, Text, Code, Grid, VStack, Spacer, Heading, Button,Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react';
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
                <Button variant='solid'>
                    testi
                </Button>
                <Card variant='rounded'>
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
                </Card>
                <Spacer />
            </VStack>
        </Grid>
    </Box>

    );
};

export default Construction;
