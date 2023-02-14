import { HStack, Switch, Text } from '@chakra-ui/react'
import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

function SwitchTheme() {
    const {language, setLanguaje} = useThemeContext()
    const onChangeSwitch = () => {
        setLanguaje((state) => (!state));
    }
  return (
    <HStack position={'fixed'} top={16} right={4} zIndex={'1'}>
        <Text color={'yellow.900'} as={'b'}>{language ? 'English' : 'Español'}</Text>
        <Switch size={'lg'} colorScheme={'yellow'} boxShadow={'base'} borderRadius={16} onChange={() => onChangeSwitch()}></Switch>
    </HStack>
  )
}

export default SwitchTheme