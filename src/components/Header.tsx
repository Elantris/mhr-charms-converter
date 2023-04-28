import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, useColorMode } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { languages } from '../utils/i18n'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t, i18n } = useTranslation()

  return (
    <>
      <Heading as="h1" mb={10} textAlign="center">
        {t('layout.title')}
      </Heading>

      <Flex display={{ base: 'block', lg: 'flex' }} justifyContent="space-between" alignItems="center">
        <Box>
          <Button
            size="sm"
            colorScheme="blue"
            variant={colorMode === 'light' ? undefined : 'outline'}
            mr={3}
            mb={5}
            onClick={() => colorMode === 'dark' && toggleColorMode()}
          >
            <SunIcon mr={2} /> Light
          </Button>
          <Button
            size="sm"
            colorScheme="blue"
            variant={colorMode === 'dark' ? undefined : 'outline'}
            mr={3}
            mb={5}
            onClick={() => colorMode === 'light' && toggleColorMode()}
          >
            <MoonIcon mr={2} /> Dark
          </Button>
        </Box>

        <Box>
          {languages.map(language => (
            <Button
              key={language.code}
              size="sm"
              colorScheme="blue"
              variant={i18n.language === language.code ? undefined : 'outline'}
              mr={3}
              mb={5}
              onClick={() => {
                i18n.changeLanguage(language.code)
                localStorage.setItem('i18n-language', language.code)
              }}
            >
              {language.name}
            </Button>
          ))}
        </Box>

        <Box mb={5}>Ver.15.0.0.0 (2023-04-20)</Box>
      </Flex>
    </>
  )
}

export default Header
