import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

function SwitchTheme() {
    const {language, setLanguaje} = useThemeContext()
    const onChangeSwitch = () => {
        setLanguaje((state) => (!state));
    }
  return (
    <HStack position={'fixed'} top={16} right={4} zIndex={'1'}>
        <Button size={'xs'} colorScheme={'yellow'} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'} onClick={() => onChangeSwitch()}><Text as={'b'}>{language ? 'English' : 'Español'}</Text></Button>
        {/* <Switch size={'lg'} colorScheme={'yellow'} boxShadow={'base'} borderRadius={16} onChange={() => onChangeSwitch()}></Switch> */}
    </HStack>
  )
}

export default SwitchTheme