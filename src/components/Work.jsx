import React from 'react'
import {Heading, Text, VStack, Card, CardHeader, CardBody, CardFooter, Image, Drawer, useDisclosure, Button, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Link, ButtonGroup, Icon, Box, Flex, Spacer, Stack, useBreakpointValue} from '@chakra-ui/react'
import {TfiGithub, TfiWorld} from 'react-icons/tfi'
import { SiChakraui, SiHtml5, SiCss3, SiJavascript, SiGit, SiPython, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMysql, SiFirebase, SiBootstrap, SiVisualstudiocode, SiDjango, SiJava, SiVite } from 'react-icons/si';

function Work() {
  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'4xl'})
  const workList = [
    {
      title:"Ecommerce App",
      src:'',
      alt:"Ecommerce App",
      toolsIcons:[{
        name: 'Javascript',
        icon: SiJavascript
        },
        {
          name: 'React',
          icon: SiReact
        },
        {
          name: 'Firebase',
          icon: SiFirebase
        },
        {
          name: 'Redux',
          icon: SiRedux
        },
        {
          name: 'CSS',
          icon: SiCss3
        },
        {
          name: 'Bootstrap 5',
          icon: SiBootstrap
        },
        {
          name: 'Vite',
          icon: SiVite
        },
        {
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
        name: 'Javascript',
        icon: SiJavascript
        },
        {
          name: 'Node.js',
          icon: SiNodedotjs
        },
        {
          name: 'Express',
          icon: SiExpress
        },
        {
          name: 'Git',
          icon: SiGit
        },
        {
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
      alt:"A landing page as a portfolio using the Chakra library to show my work, skills and leave my contact information.",
      toolsIcons:[{
        name: 'Javascript',
        icon: SiJavascript
        },
        {
          name: 'React',
          icon: SiReact
        },
        {
          name: 'CSS',
          icon: SiCss3
        },
        {
          name: 'Vite',
          icon: SiVite
        },
        {
          name: 'Git',
          icon: SiGit
        },
        {
          name: 'Chakra',
          icon: SiChakraui
        },
      ],
      github:"link",
      deploy:"link",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
  ]
  return (
    <VStack p={5} py={'24'} spacing={10} alignItems="center" id='Work'>
      <Stack p={5} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow={'md'}>
        <Heading>Work</Heading>
        <Text fontSize={fontSizeDinamic}>Some projects I have worked on, applying what I have learned.</Text>
        {workList.map((work) => {
            const {title, src, alt, tools, github, deploy, desc} = work
            return (
              <VStack key={title} p={1} alignItems="flex-start">
                <Card >
                  <CardHeader pb={1}>
                    <Heading size="l" m={1}>{title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{desc}</Text>
                    <ButtonGroup py={2}>
                      {
                        toolsIcons.map((tool) =>{
                          return <Icon as={tool}></Icon>
                        })
                      }
                    </ButtonGroup>
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