import React from 'react'
import {Heading, Text, VStack, Card, CardHeader, CardBody, CardFooter, Image, Drawer, useDisclosure, Button, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Link, ButtonGroup, Icon, Box, Flex, Spacer, Stack, useBreakpointValue, HStack} from '@chakra-ui/react'
import {TfiGithub, TfiWorld} from 'react-icons/tfi'
import { SiChakraui, SiHtml5, SiCss3, SiJavascript, SiGit, SiPython, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiBootstrap, SiVisualstudiocode, SiDjango, SiJava, SiVite } from 'react-icons/si';

function Work() {
  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'2xl', lg:'2xl'})
  const workList = [
    {
      title:"Ecommerce App",
      src:'',
      alt:"Ecommerce App",
      toolsIcons:[{
        id: 1,
        name: 'Javascript',
        icon: SiJavascript
        },
        {
          id: 2,
          name: 'React',
          icon: SiReact
        },
        {
          id: 3,
          name: 'Firebase',
          icon: SiFirebase
        },
        {
          id: 4,
          name: 'Redux',
          icon: SiRedux
        },
        {
          id: 5,
          name: 'CSS',
          icon: SiCss3
        },
        {
          id: 6,
          name: 'Bootstrap 5',
          icon: SiBootstrap
        },
        {
          id: 7,
          name: 'Vite',
          icon: SiVite
        },
        {
          id: 8,
          name: 'Git',
          icon: SiGit
        },
      ],
      github:"https://github.com/Ferclemens/Context-EcommerceApp-SkillFactory",
      deploy:"https://ecommerce-app-skill-factory.vercel.app/",
      desc:"Ecommerce of football shirts with responsive design, user and stock management, shopping cart and payment simulation."
    },
    {
      title:"CRUD - Backend Node.js",
      src:'',
      alt:"backend crud app",
      toolsIcons:[{
        id: 9,
        name: 'Javascript',
        icon: SiJavascript
        },
        {
          id: 10,
          name: 'Node.js',
          icon: SiNodedotjs
        },
        {
          id: 11,
          name: 'Express',
          icon: SiExpress
        },
        {
          id: 12,
          name: 'Git',
          icon: SiGit
        },
        {
          id: 13,
          name: 'MySQL',
          icon: SiMysql
        }
      ],
      github:"https://github.com/Ferclemens/Nodejs-Mysql-restApi-practice.git",
      deploy:"https://nodejs-mysql-restapi-practice-production.up.railway.app/employees",
      desc:"A basic crud to manage an employee database, deployed on Railway."
    },
    {
      title:"This landing page!",
      src:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt:"Landing page",
      toolsIcons:[{
        id: 14,
        name: 'Javascript',
        icon: SiJavascript
        },
        {
          id: 15,
          name: 'React',
          icon: SiReact
        },
        {
          id: 16,
          name: 'CSS',
          icon: SiCss3
        },
        {
          id: 17,
          name: 'Vite',
          icon: SiVite
        },
        {
          id: 18,
          name: 'Git',
          icon: SiGit
        },
        {
          id: 19,
          name: 'Chakra',
          icon: SiChakraui
        },
      ],
      github:"https://github.com/Ferclemens/vite-portfolio",
      deploy:"https://ferclemens.netlify.app",
      desc:"A landing page as a portfolio using the Chakra library to show my work, skills and leave my contact information."
    },
  ]
  return (
    <VStack p={5} py={'24'} spacing={10} alignItems="center" id='Work'>
      <Stack p={5} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow={'dark-lg'}>
        <Heading>Work</Heading>
        <Text fontSize={fontSizeDinamic}>Some projects I have worked on, applying what I have learned.</Text>
        {workList.map((work) => {
            const {title, src, alt, tools, github, deploy, desc, toolsIcons} = work
            return (
              <VStack key={title} py={3} alignItems={'flex-start'}>
                <Card bgGradient={'linear(to-r, teal.400, green.400)'} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}>
                  <CardHeader pb={1}>
                    <Heading fontSize={'2xl'} m={1}>{title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text mb={2} fontSize={'xl'}>{desc}</Text>
                    <ButtonGroup py={2} flexWrap={'wrap'}>
                      {
                        toolsIcons.map((tool) =>{
                          const {id, name, icon} = tool
                          //no entiendo porque el error de key prop, si tienen id :/
                          return (
                            <HStack key={id}>
                              <Icon as={icon}></Icon>
                              <Text>{name}</Text>
                            </HStack>
                          )
                        })
                      }
                    </ButtonGroup>
                  </CardBody>
                    <Stack alignItems="flex-end">
                      <ButtonGroup spacing='3' p={3} variant='gost' >
                        <Button leftIcon={<Icon as={TfiGithub}/>} colorScheme='teal.600'><Link href={github} isExternal>Github</Link></Button>
                        <Button leftIcon={<Icon as={TfiWorld} />} colorScheme='teal.600'><Link href={deploy} isExternal>Deploy</Link></Button>
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