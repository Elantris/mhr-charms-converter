import { Icon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GoMarkGithub } from 'react-icons/go'
import { z } from 'zod'
import ResultTabs from './ResultTabs'
import SkillTable from './SkillTable'
import { languages } from './i18n'

const CharmsScheme = z.array(
  z.object({
    SkillLevels: z.tuple([z.number(), z.number()]),
    Skills: z.tuple([z.number(), z.number()]),
    Slots: z.tuple([z.number(), z.number(), z.number()]),
  }),
)

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { t, i18n } = useTranslation()
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [charmsValue, setCharmsValue] = useState<
    {
      SkillLevels: [number, number]
      Skills: [number, number]
      Slots: [number, number, number]
    }[]
  >([])
  const [isError, setIsError] = useState(false)

  const handleConvert = () => {
    try {
      const value = JSON.parse(textareaRef.current?.value || '')
      setCharmsValue(
        CharmsScheme.parse(value).sort(
          (a, b) =>
            a.Skills[0] - b.Skills[0] ||
            a.SkillLevels[0] - b.SkillLevels[0] ||
            a.Skills[1] - b.Skills[1] ||
            a.SkillLevels[1] - b.SkillLevels[1],
        ),
      )
    } catch {
      setIsError(true)
    }
  }

  return (
    <Container id="app" maxW="container.lg" py={10}>
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

      <Divider my={10} />

      <Heading as="h2" size="lg" mb={5}>
        {t('layout.input')}
      </Heading>

      <UnorderedList mb={5}>
        <ListItem>
          <Link href="https://www.nexusmods.com/monsterhunterrise/mods/17?" color="blue.400" isExternal>
            Charm Editor and Item Cheat
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://docs.google.com/spreadsheets/d/10JQRMu3l0EQs2eX-e3kiIIq5z8Su1iLU2mKJQYKF2uI/edit?usp=sharing"
            color="blue.400"
            isExternal
          >
            MHR:SB護石表(15.0.0)
          </Link>
        </ListItem>
      </UnorderedList>

      <Tabs>
        <TabList>
          <Tab>JSON</Tab>
          <Tab>{t('layout.skills')}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Textarea
              ref={textareaRef}
              h="3xs"
              mb={5}
              placeholder="JSON"
              borderColor={isError ? 'red.300' : undefined}
              onFocus={() => setIsError(false)}
            />
            <Button colorScheme="blue" onClick={() => handleConvert()}>
              {t('layout.convert')}
            </Button>
          </TabPanel>
          <TabPanel>
            <SkillTable />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Divider my={10} />

      <ResultTabs charmsValue={charmsValue} />

      <Divider my={10} />

      <Text textAlign="center">
        <Link href="https://github.com/Elantris/mhr-charms-converter" isExternal>
          <Button variant="link" leftIcon={<Icon as={GoMarkGithub} />}>
            Elantris
          </Button>
        </Link>
      </Text>
    </Container>
  )
}

export default App
