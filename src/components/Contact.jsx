import { Button, FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, Textarea, useBreakpointValue, Stack, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, FormErrorMessage, FormHelperText, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'


function Contact() {
  const {language} = useThemeContext()
  const textData = {
    engTitle: 'Contact',
    spTitle: 'Contacto',
    engDesc: 'Write me to set up a meeting, any suggestions or just talk.',
    spDesc: 'Escribeme para organizar una reunión, por alguna sugerencia o solo hablar.',

  }
  //hook para cambiar tamaño de input name & email (responsive)
  const colSpan = useBreakpointValue({base:2, sm:1})
  const formPaddingX = useBreakpointValue({base:'0', sm:'15', lg:'200'})
  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'2xl'})
  
  const [inputName, setInputName] = useState(null)
  const [inputMail, setInputMail] = useState(null)
  const [inputMessage, setInputMessage] = useState(null)

  const handleChangeName = (e) => setInputName(e.target.value)
  const handleChangeMail = (e) => setInputMail(e.target.value)
  const handleChangeMessage = (e) => setInputMessage(e.target.value)

  const isErrorName = inputName === ''
  const isErrorMail = inputMail === ''
  const isErrorMessage = inputMessage === ''


  return (
    <VStack id={language ? 'Contact' : 'Contacto'} py={'24'} px={'5'}>
      <VStack p={5} spacing={10} borderRadius={5} alignItems="flex-start" bg={'rgba(255, 255, 255, 0.6)'} boxShadow={'dark-lg'}>
          <Stack spacing={2} alignItems="flex-start">
            <Heading as={'h2'} size="xl">{language ? textData.engTitle : textData.spTitle}</Heading>
            <Text fontSize={fontSizeDinamic}>{language ? textData.engDesc : textData.spDesc} 💬</Text>
          </Stack>
          <Stack w={'full'} px={formPaddingX}>
            <form method='post' action='/success'>
              <input type="hidden" name="form-name" value="contact" />
              <SimpleGrid columns={2} columnGap={3} w="full" >
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired={'please complete'} isInvalid={isErrorName}>
                    <FormLabel>{language ? 'Name' : 'Nombre'}</FormLabel>
                    <Input name='name' type='text' size={'lg'} bg={'teal.300'} border={'1px'} onChange={handleChangeName}></Input>
                    {isErrorName && <FormErrorMessage>{language ? 'Please enter your name.' : 'Por favor ingresa un nombre.'}</FormErrorMessage>}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired isInvalid={isErrorMail}>
                    <FormLabel>{language ? 'Email' : 'Correo'}</FormLabel>
                    <Input name='email' type='email' size={'lg'} bg={'teal.300'} border={'1px'} onChange={handleChangeMail}></Input>
                    {isErrorMail && <FormErrorMessage>{language ? 'Leave me an email or data to be in contact.' : 'Déjame un email o algún dato de contacto.'}</FormErrorMessage>}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel>{language ? 'Company' : 'Empresa u organización'}</FormLabel>
                    <Input name='company' type='text' size={'lg'} bg={'teal.300'} border={'1px'}></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired isInvalid={isErrorMessage}>
                    <FormLabel>{language ? 'Message' : 'Mensaje'}</FormLabel>
                    <Textarea name='message' bg={'teal.300'} border={'1px'} onChange={handleChangeMessage}></Textarea>
                    {isErrorMessage && <FormErrorMessage>{language ? 'Write your message.' : 'Escribe tu mensaje.'}
                    </FormErrorMessage>}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <Button my={10} w={'full'} colorScheme={'yellow'} border={'1px'} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'} type='submit'>{language ? 'Send' : 'Enviar'}</Button>
                </GridItem>
              </SimpleGrid>
            </form>
          </Stack>
      </VStack> 
    </VStack>
  )
}

export default Contact