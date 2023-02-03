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
        <form name='form' netlify>
          <SimpleGrid columns={2} columnGap={3} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input name='name' id='name' type='text'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input name='email' id='email' type="email"></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Company</FormLabel>
                <Input name='company' id='company' type='text'></Input>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea name='message' id='message' type='text'></Textarea>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button mt={5} size="lg" w="full" type='submit'
              >Send</Button>
            </GridItem>
          </SimpleGrid>
        </form>
      </Stack>
    </>  
  )
}

export default Contact