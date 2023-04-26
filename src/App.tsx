import {
  Button,
  Container,
  Divider,
  Heading,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useColorMode,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { z } from 'zod'
import skillNames from './skillNames'

const CharmsScheme = z.array(
  z.object({
    SkillLevels: z.tuple([z.number(), z.number()]),
    Skills: z.tuple([z.number(), z.number()]),
    Slots: z.tuple([z.number(), z.number(), z.number()]),
  }),
)

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()
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
    <div id="app">
      <Container maxW="container.lg" py={10}>
        <Heading as="h1" mb={10} textAlign="center">
          魔物獵人護石轉換器
        </Heading>

        <Text>
          樣式：
          <Button colorScheme="blue" variant="link" onClick={() => colorMode === 'dark' && toggleColorMode()}>
            Light
          </Button>
          <Text as="span" mx="3">
            |
          </Text>
          <Button colorScheme="blue" variant="link" onClick={() => colorMode === 'light' && toggleColorMode()}>
            Dark
          </Button>
          <br />
          語言：正體中文（zh-TW）
          <br />
          版本：崛起破曉 Ver.15.0.0.0（2023-04-20）
          <br />
          網站：
          <Link href="https://mhrise.wiki-db.com/sim/?hl=zh-hant" color="blue.300" isExternal>
            Monster Hunter Rise:Sunbreak Armorset Search
          </Link>
        </Text>

        <Divider my={10} />

        <Heading as="h2" size="lg" mb={5}>
          輸入
        </Heading>

        <Tabs>
          <TabList>
            <Tab>JSON</Tab>
            <Tab>技能表</Tab>
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
                轉換
              </Button>
            </TabPanel>
            <TabPanel>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>技能</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Object.keys(skillNames).map(v => (
                    <Tr key={v}>
                      <Td>{v}</Td>
                      <Td>{skillNames[v]}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Divider my={10} />

        <Heading as="h2" size="lg" mb={5}>
          輸出
        </Heading>
        <Tabs>
          <TabList>
            <Tab>文字</Tab>
            <Tab>表格</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Textarea
                h="3xs"
                isReadOnly
                value={charmsValue
                  .map(
                    charm =>
                      `${charm.Skills.map((id, i) => `${skillNames[id] || ''},${charm.SkillLevels[i]}`).join(
                        ',',
                      )},${charm.Slots.join(',')}`,
                  )
                  .join('\n')}
              />
            </TabPanel>
            <TabPanel>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>技能1</Th>
                    <Th>技能2</Th>
                    <Th>鑲嵌槽</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {charmsValue.map((charm, i) => (
                    <Tr key={i}>
                      <Td>
                        {skillNames[charm.Skills[0]]
                          ? `${skillNames[charm.Skills[0]]} Lv${charm.SkillLevels[0]}`
                          : null}
                      </Td>
                      <Td>
                        {skillNames[charm.Skills[1]]
                          ? `${skillNames[charm.Skills[1]]} Lv${charm.SkillLevels[1]}`
                          : null}
                      </Td>
                      <Td>{charm.Slots.join('-')}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  )
}

export default App
