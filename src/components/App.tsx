import { Icon } from '@chakra-ui/icons'
import { Button, Container, Divider, Link, Skeleton, Stack, Text } from '@chakra-ui/react'
import { Suspense, lazy, useState } from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { z } from 'zod'
import { CharmsScheme } from '../utils/schemes'
import Header from './Header'

const InputSection = lazy(() => import('./InputSection'))
const ResultSection = lazy(() => import('./ResultSection'))
const MaxCharmsSection = lazy(() => import('./MaxCharmsSection'))

const App = () => {
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
