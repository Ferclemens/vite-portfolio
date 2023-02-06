import { Button, FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, Textarea, useBreakpointValue, Stack, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import React, { useState } from 'react'


function Contact() {
    
  //hook para cambiar tamaño de input name & email (responsive)
  const colSpan = useBreakpointValue({base:2, sm:1})
  
  return (
    <>
      <Stack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
        <Stack spacing={2} alignItems="flex-start">
          <Heading size="xl">Contact</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
        </Stack>
        <form name='contact-form' method="POST" data-netlify="true">
          <SimpleGrid columns={2} columnGap={3} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <input name='name' id='name' type='text'></input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <input name='email' id='email' type="email"></input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Company</FormLabel>
                <input name='company' id='company' type='text'></input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <textarea name='message' id='message' type='text'></textarea>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <button mt={5} size="lg" w="full" type='submit'
              >Send</button>
            </GridItem>
          </SimpleGrid>
        </form>
      </Stack>
    </>  
  )
}

export default Contact