import { Button, FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, Textarea, useBreakpointValue, Stack, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, FormErrorMessage, FormHelperText, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


function Contact() {
    
  //hook para cambiar tamaño de input name & email (responsive)
  const colSpan = useBreakpointValue({base:2, sm:1})
  const formPaddingX = useBreakpointValue({base:'0', sm:'15', lg:'200'})
  
  return (
    <>
      <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
        <Stack spacing={2} alignItems="flex-start">
          <Heading size="xl">Contact</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
        </Stack>
        <Stack w={'full'} px={formPaddingX}>
          <form method='post'>
            <input type="hidden" name="form-name" value="contact" />
            <SimpleGrid columns={2} columnGap={3} w="full">
              <GridItem colSpan={colSpan}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input name='name' type='text' size={'lg'}></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input name='email' type='email' size={'lg'}></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <Input name='company' type='text' size={'lg'}></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea name='message'></Textarea>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Button my={10} w={'full'} type='submit'>Send</Button>
              </GridItem>
            </SimpleGrid>
          </form>
        </Stack>
      </VStack>
    </>  
  )
}

export default Contact