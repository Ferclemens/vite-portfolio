import { Button, FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, Textarea, useBreakpointValue, Stack, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import React from 'react'


function Contact() {
  //hook para cambiar tamaño de input (responsive)
   const colSpan = useBreakpointValue({base:2, sm:1})

  return (
    <>
      <Stack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
        <Stack spacing={2} alignItems="flex-start">
          <Heading size="xl">Contact</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
        </Stack>
        <SimpleGrid columns={2} columnGap={3} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder='Name'></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder='email@mail.com'></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input placeholder='Company'></Input>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder='Message here'></Textarea>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button mt={5} size="lg" w="full">Send</Button>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </>  
  )
}

export default Contact