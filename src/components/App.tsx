import { Icon } from '@chakra-ui/icons'
import { Button, Container, Divider, Heading, Link, ListItem, Skeleton, Stack, Text, UnorderedList } from '@chakra-ui/react'
import { Suspense, lazy, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GoMarkGithub } from 'react-icons/go'
import { z } from 'zod'
import { CharmsScheme } from '../utils/schemes'
import Header from './Header'

const InputSection = lazy(() => import('./InputSection'))
const ResultSection = lazy(() => import('./ResultSection'))
const MaxCharmsSection = lazy(() => import('./MaxCharmsSection'))

const App = () => {
  const { t } = useTranslation()
  const [charmsValue, setCharmsValue] = useState<z.infer<typeof CharmsScheme>>([])

  return (
    <Container id="app" maxW="container.lg" py={10}>
      <Header />

      <Suspense
        fallback={
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        }
      >
        <InputSection onChange={charmsValue => setCharmsValue(charmsValue)} />
        <ResultSection charmsValue={charmsValue} />
        <MaxCharmsSection />
      </Suspense>

      <Divider my={10} />

      <Heading as="h2" size="lg" mb={5}>
        {t('layout.credit')}
      </Heading>

      <UnorderedList mb={5}>
        <ListItem>
          <Link href="https://www.nexusmods.com/monsterhunterrise/mods/17?" color="blue.400" isExternal>
            Charm Editor and Item Cheat
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://docs.google.com/spreadsheets/d/10JQRMu3l0EQs2eX-e3kiIIq5z8Su1iLU2mKJQYKF2uI/edit?usp=sharing" color="blue.400" isExternal>
            MHR:SB護石表(15.0.0)
          </Link>
        </ListItem>
        <ListItem>
          <Link href={t('layout.search.url') || 'https://mhrise.wiki-db.com/sim/'} color="blue.400" isExternal>
            Monster Hunter Rise:Sunbreak Armorset Search
          </Link>
        </ListItem>
      </UnorderedList>

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
