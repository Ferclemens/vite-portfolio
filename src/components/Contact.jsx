import { Button, FormControl, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'


function Contact() {
  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <VStack spacing={2} alignItems="flex-start">
        <Heading size="xl">Contact</Heading>
        <Text>Lets talk</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Name'></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
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
    </VStack>
  )
}

export default Contact