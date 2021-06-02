import React from 'react'
import { VStack } from "@chakra-ui/react"
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

function CustomStack() {
    
    return (
        <div>
            <VStack display="flex" flexDirection="column" position="fixed" right="0px" bottom="70px">
                <ColorModeSwitcher />
            </VStack>

        </div>
    );
}

export default CustomStack
