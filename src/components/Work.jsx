import React from 'react'
import {Heading, Text, VStack, Card, CardHeader, CardBody, Button, Link, ButtonGroup, Icon, Stack, useBreakpointValue, HStack} from '@chakra-ui/react'
import {TfiGithub, TfiWorld} from 'react-icons/tfi'
import { SiChakraui, SiCss3, SiJavascript, SiGit, SiReact, SiRedux, SiFirebase, SiBootstrap, SiVite } from 'react-icons/si';
import { useThemeContext } from '../context/ThemeContext';

function Work() {
  const {language} = useThemeContext()
  const fontSizeDinamic = useBreakpointValue({base:'xl', sm:'2xl', lg:'2xl'})
  const textData = {
    engTitle: 'Work',
    spTitle: 'Trabajos',
    engDesc: 'Some projects I have worked on.',
    spDesc: 'Algunos proyectos en los que colabore.'
  }
  const workList = [
    {
      engTitle:"Ecommerce App",
      spTitle:"Ecommerce App",
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
      engDesc:"E-commerce for football jerseys with Responsive Design, user and stock management, shopping cart and payment simulation.",
      spDesc:"Ecommerce de remeras de futbol, con diseño responsive. Cuenta con administración de stock, gestión de usuarios, carrito de compras y simulación de pago.",
    },
    {
      engTitle:"Tables charts app",
      spTitle:"App de tablas y gráficos",
      src:'',
      alt:"render tables and charts app",
      toolsIcons:[{
        id: 9,
        name: 'Javascript',
        icon: SiJavascript
      },
      {
        id: 10,
        name: 'React',
        icon: SiReact
      },
      {
        id: 11,
        name: 'Vite',
        icon: SiVite
        },
        {
          id: 12,
          name: 'Git',
          icon: SiGit
        },
        {
          id: 13,
          name: 'Chakra UI',
          icon: SiChakraui
        },
      ],
      github:"https://github.com/Ferclemens/tables-and-charts.git",
      deploy:"https://tables-and-charts-app.vercel.app/",
      engDesc:"An app to load an xlsx file of sales and display graphical information on that data.",
      spDesc: 'Una aplicación para cargar un archivo xlsx de ventas y mostrar información gráfica sobre esos datos.'
    },
    {
      engTitle:"This landing page!",
      spTitle: 'Esta landing page!',
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
          name: 'Chakra UI',
          icon: SiChakraui
        },
      ],
      github:"https://github.com/Ferclemens/vite-portfolio",
      deploy:"https://ferclemens.netlify.app",
      engDesc:"A landing page as a portfolio to show my work, skills and leave my contact information. Created with Chakra UI library.",
      spDesc: 'Una Landing page como portfolio de presentación. Mostrando proyectos, skills y datos de contacto. Desarrollada con la libreria de Chakra UI.'
    },
  ]
  return (
    <VStack p={5} py={'24'} spacing={10} alignItems="center" id={language ? 'Work' : 'Trabajo'}>
      <Stack p={5} bg={'rgba(255, 255, 255, 0.6)'} borderRadius={5} boxShadow={'dark-lg'}>
        <Heading as={'h2'}>{language ? textData.engTitle : textData.spTitle}</Heading>
        <Text fontSize={fontSizeDinamic}>{language ? textData.engDesc : textData.spDesc}</Text>
        {workList.map((work) => {
            const {title, src, alt, tools, github, deploy, desc, toolsIcons} = work
            return (
              <VStack key={title} py={3} alignItems={'flex-start'}>
                <Card bgGradient={'linear(to-r, teal.400, green.400)'} boxShadow={'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'}>
                  <CardHeader pb={1}>
                    <Heading fontSize={'2xl'} m={1}>{language ? work.engTitle : work.spTitle}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text mb={2} fontSize={'xl'}>{language ? work.engDesc : work.spDesc}</Text>
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