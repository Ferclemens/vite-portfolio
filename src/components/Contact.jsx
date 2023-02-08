import { Button, FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, Textarea, useBreakpointValue, Stack, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, FormErrorMessage, FormHelperText, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


function Contact() {
    
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
    <VStack id='Contact' py={'24'} px={'5'}>
      <VStack p={5} spacing={10} borderRadius={5} alignItems="flex-start" bg={'rgba(255, 255, 255, 0.6)'} boxShadow='md'>
          <Stack spacing={2} alignItems="flex-start">
            <Heading size="xl">Contact</Heading>
            <Text fontSize={fontSizeDinamic}>Write me to organize a meeting, any suggestions or just talk. 💬</Text>
          </Stack>
          <Stack w={'full'} px={formPaddingX}>
            <form method='post'>
              <input type="hidden" name="form-name" value="contact" />
              <SimpleGrid columns={2} columnGap={3} w="full" >
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired={'please complete'} isInvalid={isErrorName}>
                    <FormLabel>Name</FormLabel>
                    <Input name='name' type='text' size={'lg'} bg={'teal.300'} border={'1px'} onChange={handleChangeName}></Input>
                    {isErrorName && <FormErrorMessage>Please enter your name.</FormErrorMessage>}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                  <FormControl isRequired isInvalid={isErrorMail}>
                    <FormLabel>Email</FormLabel>
                    <Input name='email' type='email' size={'lg'} bg={'teal.300'} border={'1px'} onChange={handleChangeMail}></Input>
                    {isErrorMail && <FormErrorMessage>Leave an email to be in contact.</FormErrorMessage>}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel>Company</FormLabel>
                    <Input name='company' type='text' size={'lg'} bg={'teal.300'} border={'1px'}></Input>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl isRequired isInvalid={isErrorMessage}>
                    <FormLabel>Message</FormLabel>
                    <Textarea name='message' bg={'teal.300'} border={'1px'} onChange={handleChangeMessage}></Textarea>
                    {isErrorMessage && <FormErrorMessage>Write your message.</FormErrorMessage>}
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <Button my={10} w={'full'} colorScheme={'yellow'} border={'1px'} type='submit'>Send</Button>
                </GridItem>
              </SimpleGrid>
            </form>
          </Stack>
      </VStack> 
    </VStack>
  )
}

export default Contact