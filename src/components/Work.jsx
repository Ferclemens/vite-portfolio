import { Heading, Text, VStack, Card, CardHeader, CardBody, CardFooter, Image } from '@chakra-ui/react'
import React from 'react'

function Work() {
  const workList = [
    {
      src:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt:"text alt1",
      github:"link",
      deploy:"link",
    },
    {
      src:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt:"text alt2",
      github:"link",
      deploy:"link",
    },
    {
      src:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt:"text alt3",
      github:"link",
      deploy:"link",
    },
  ]
  return (
    <VStack w="full" h="full" p={5} spacing={10} alignItems="flex-start">
      <Heading>Work</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
      {workList.map((work) => {
          const {src, alt} = work
          return (
            <Card key={alt}>
              <CardHeader pb={1}>
                <Image
                  borderRadius='lg'
                  w="full"
                  src={src}
                  alt={alt}
                />
                <Heading size="m" mt={6}>Title Work</Heading>
              </CardHeader>
              <CardBody>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
              </CardBody>
            </Card>
          )})
        }
      
    </VStack>
  )
}

export default Work