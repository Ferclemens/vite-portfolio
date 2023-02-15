import { Alert, AlertDescription, AlertIcon, AlertTitle, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useThemeContext } from '../context/ThemeContext'

function NotFound404() {
    const {language} = useThemeContext()
    
    useEffect(() => {
        let tID = setTimeout(function () {
            window.location.href = "https://ferclemens.netlify.app/";
            window.clearTimeout(tID);		// clear time out.
        }, 5000);
    },[])
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
        <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='250px'
        my={'20'}
        borderRadius={'5'}
        boxShadow={'dark-lg'}
        >
            <AlertIcon boxSize='80px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='2xl'>
                {language ? 'Page not found!' : 'Página no encontrada!'}
            </AlertTitle>
            <AlertDescription mt={4} maxWidth='lg' fontSize='xl'>
                {language ? 'Redirect to home page.' 
                    : 'Redirigiendo al home.'}
            </AlertDescription>
        </Alert>
    </Stack>
  )
}

export default NotFound404