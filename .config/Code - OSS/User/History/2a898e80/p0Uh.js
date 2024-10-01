import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import config from '../../data/text/config';
import NavDrawer from './drawer';


const Header = ({name}) => {
    name = config.name
    return (
        <Flex
            pt='4'
            borderBottom='1px solid'
            borderBottomColor='yellow'
        >
            <Box p='4'>
                <Text color='aqua' fontFamily='heading'>{name}</Text>
            </Box>
            <Spacer />
            {/* <Box p='4'> 
                <ColorModeSwitcher />
            </Box> */}
            <Box p='4'>
                <NavDrawer/>
            </Box >
        </Flex>
    );
};

export default Header;