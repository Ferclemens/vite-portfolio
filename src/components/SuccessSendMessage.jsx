import { Alert, AlertDescription, AlertIcon, AlertTitle, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useThemeContext } from '../context/ThemeContext.jsx'

function SuccessSendMessage() {
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
                {language ? 'submitted!' : 'Enviado!'}
            </AlertTitle>
            <AlertDescription mt={4} maxWidth='lg' fontSize='xl'>
                {language ? 'Thanks for submitting your message. I will reply to you soon!.' 
                    : 'Gracias por enviar tu mensaje. Te estaré contestando a la brevedad!.'}
            </AlertDescription>
        </Alert>
    </Stack>
  )
}

export default SuccessSendMessage