import { Icon } from '@chakra-ui/icons'
import { Button, Container, Divider, Link, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { z } from 'zod'
import Header from './Header'
import InputSection from './InputSection'
import ResultTabs from './ResultSection'
import { CharmsScheme } from './schemes'

const App = () => {
  const [charmsValue, setCharmsValue] = useState<z.infer<typeof CharmsScheme>>([])

  return (
    <Container id="app" maxW="container.lg" py={10}>
      <Header />
      <Divider my={10} />
      <InputSection onChange={charmsValue => setCharmsValue(charmsValue)} />
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
