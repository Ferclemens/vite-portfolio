import React from 'react'
import { Heading, Text, VStack, Card, CardHeader, CardBody, CardFooter, Image, Drawer, useDisclosure, Button, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Link, ButtonGroup, Icon, Box, Flex, Spacer, Stack } from '@chakra-ui/react'
import {TfiGithub, TfiWorld} from 'react-icons/tfi'

function Work() {
  const workList = [
    {
      title:"Ecommerce App",
      src:'',
      alt:"Ecommerce App",
      tools:"#Javascript | #React | #Firebase",
      github:"https://github.com/Ferclemens/Context-EcommerceApp-SkillFactory",
      deploy:"https://ecommerce-app-skill-factory.vercel.app/",
      desc:"Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      title:"CRUD - Backend Node.js",
      src:'',
      alt:"backend crud app",
      tools:"#Javascript | #Node | #Express",
      github:"https://github.com/Ferclemens/Nodejs-Mysql-restApi-practice.git",
      deploy:"https://nodejs-mysql-restapi-practice-production.up.railway.app/employees",
      desc:"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
      title:"Title of project 3",
      src:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt:"text alt3",
      tools:"#Javascript | #React | #etc",
      github:"link",
      deploy:"link",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
  ]
  return (
    <VStack w="full" h="100vh" p={5} spacing={10} mb={'40'} alignItems="center" id='Work'>
      <Stack p={5} mt={'20'} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow={'md'}>
        <Heading>Work</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
        {workList.map((work) => {
            const {title, src, alt, tools, github, deploy, desc} = work
            return (
              <VStack key={title} w="full" h="full" p={1} spacing={3} alignItems="flex-start">
                <Card >
                  <CardHeader pb={1}>
                    <Heading size="l" m={1}>{title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{desc}</Text>
                  </CardBody>
                    <Stack alignItems="flex-end">
                      <ButtonGroup spacing='3' p={3} variant='ghost'>
                        <Button leftIcon={<Icon as={TfiGithub} />}><Link href={github} isExternal>Github</Link></Button>
                        <Button leftIcon={<Icon as={TfiWorld} />}><Link href={deploy} isExternal>Deploy</Link></Button>
                      </ButtonGroup>
                    </Stack>
                </Card>
              </VStack>
            )
          })
        }
      </Stack>
    </VStack>
  )
}

export default Work