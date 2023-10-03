'use client'
import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar,
  useToast,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import logo from "../Images/Yaksh.png"
import { Link, useLocation } from 'react-router-dom'
import io from "socket.io-client"
import { mainapi } from '../../../Redux/Api/mainapi'
import notificationsound from "../../../commonaudio/mainnotificationsound.mp3"
import { Notifications } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { countvalue } from '../../../Redux/StudentSide/NotificationReducer/Action'
const socket=io(`${mainapi}`)
export default function StudentNavbar() {
  const [notifications,setNotifications]=useState(null)

  const [notificationaudio,setNotificationaudio]=useState(new Audio(notificationsound))
  const { isOpen, onToggle } = useDisclosure()


  const toast=useToast()
useEffect(()=>{
socket.on("new-assignment",(notificationdata)=>{
  // console.log(notificationdata)
    toast({description:`Your instructer ${notificationdata.assignment.instructername} create a new assignment`,position:"bottom-right",status:"success",duration:2000})
  notificationaudio.play()

})
return ()=>{
  socket.close()
}
},[])






// console.log(notifications)
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
          <Avatar src={logo}/>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav   />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} ><Link to="/profile">  Profile</Link>
         
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
           LogOut
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}


const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
const location=useLocation()
// useEffect(()=>{
//   location.pathname=="/notifications"&&handlecount(0)
//   console.log(location.pathname)
// },[count])
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
       textDecoration={location.pathname==`/${navItem.to}`?"underline":"none"}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                    <Link to={navItem.to}>{navItem.label}</Link>

              </Box>
            </PopoverTrigger>

         
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}


const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label,to }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={ onToggle}>
      <Box
        py={2}
        as="a"
      
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
    <Link to={to}>{label}</Link>
       
      </Box>

    
    </Stack>
  )
}



const NAV_ITEMS = [
  // {
  //   label: 'Lectures',
  //  to:"lectures"
  // },
  {
    label: 'Assignments',
    to:"student"

     
  },
  {

    label: 'Notifications',
   to:"notifications"
  },
  {
    label: 'Messages',
    to: 'messages',
  },
]