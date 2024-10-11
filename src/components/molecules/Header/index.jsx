import React, { useEffect, useState } from 'react'
import {
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import logo from 'assets/img/brand/logo.png'
import InstagramIcon from 'assets/icons/Instagram'
import WhatsAppIcon from 'assets/icons/WhatsApp'
import { useRouter } from 'next/router'
import { useModalStore, useUserStore } from 'services/stores'
import { Icon } from 'components/atoms'
import { useBreakpoint } from 'services/hooks'

export const Header = () => {
  const router = useRouter()
  const { setCurrentModal } = useModalStore()
  const { name, setData } = useUserStore()
  const [loadName, setLoadName] = useState()
  const { isDesktop } = useBreakpoint()

  useEffect(() => {
    if (name) {
      setLoadName(name)
    } else {
      setLoadName(null)
    }
  }, [name])

  const onLogout = () => {
    setData(null)
    router.push('/')
  }

  return (
    <Flex
      w="100%"
      h="80px"
      bg="card"
      align="center"
      justify="space-between"
      paddingX="24px"
    >
      <Flex
        w={{ base: '50%', md: '20%', lg: '20%' }}
        h="80%"
        onClick={() => router.push('/')}
        cursor="pointer"
        align="flex-start"
        justify="flex-start"
      >
        <Image src={logo} alt="logo" w="100%" h="100%" objectFit="contain" />
      </Flex>
      <Flex
        w={{ base: '50%', md: '50%', lg: '40%' }}
        justify={{ base: 'center', md: 'right' }}
        align={{ base: 'flex-end', md: 'center' }}
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Flex
          h="100%"
          w={{ base: '100%', md: '33%' }}
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => window.open('https://instagram.com/precojusto_moveis')}
        >
          <InstagramIcon width="18px" height="18px" />
          <Text ml="5px" color="secondary" fontSize="14px">
            @precojusto_moveis
          </Text>
        </Flex>
        <Flex
          w={{ base: '100%', md: '33%' }}
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() =>
            window.open(
              'https://wa.me//5533988902270?text=Tenho%20interesse%20em%20comprar%20seus%20móveis'
            )
          }
        >
          <WhatsAppIcon width="14px" height="14px" />
          <Text ml="5px" color="secondary" fontSize="14px">
            (33) 98890-2270
          </Text>
        </Flex>
        <Flex
          w={{ base: '100%', md: '20%' }}
          justify="center"
          align="center"
          cursor="pointer"
          onClick={() => (loadName ? null : setCurrentModal('login'))}
        >
          <Icon name="Profile" size={14} mr="8px" />
          {loadName ? (
            <Menu>
              <MenuButton color="secondary">{`Olá ${
                name?.name.split(' ')[0]
              }`}</MenuButton>
              <MenuList>
                <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
                <MenuItem onClick={() => router.push('register')}>
                  Cadastro de produtos
                </MenuItem>
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Text ml="5px" color="secondary" fontSize="14px">
              Login
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
