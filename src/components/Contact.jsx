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
        <form name='contact' method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <SimpleGrid columns={2} columnGap={3} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <input name='name' type='text'></input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <input name='email' type='email'></input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Company</FormLabel>
                <input name='company' type='text'></input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <textarea name='message'></textarea>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <button type='submit'>Send</button>
            </GridItem>
          </SimpleGrid>
        </form>
      </Stack>
    </>  
  )
}

export default Contact