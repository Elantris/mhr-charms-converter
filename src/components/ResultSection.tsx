import {
  Button,
  Divider,
  Heading,
  Link,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useToast,
} from '@chakra-ui/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const ResultSection: FC<{
  charmsValue: {
    SkillLevels: [number, number]
    Skills: [number, number]
    Slots: [number, number, number]
  }[]
}> = ({ charmsValue }) => {
  const { t } = useTranslation()
  const toast = useToast()

  const text = charmsValue
    .map(charm => `${charm.Skills.map((id, i) => `${id === 0 ? '' : t(`skill.${id}`)},${charm.SkillLevels[i]}`).join(',')},${charm.Slots.join(',')}`)
    .join('\n')

  return (
    <>
      <Divider my={10} />

      <Heading as="h2" size="lg" mb={5}>
        {t('layout.output')}
      </Heading>

      <Tabs>
        <TabList>
          <Tab>{t('layout.text')}</Tab>
          <Tab>{t('layout.table')}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Textarea h="3xs" isReadOnly value={text} mb={5} onFocus={e => e.target.select()} />
            <Button
              colorScheme="green"
              onClick={() => {
                navigator.clipboard.writeText(text)
                toast({
                  title: 'Copied',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                })
              }}
            >
              {t('layout.copy')}
            </Button>
          </TabPanel>

          <TabPanel>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>{t('layout.skill')} 1</Th>
                  <Th>{t('layout.skill')} 2</Th>
                  <Th>{t('layout.slots')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {charmsValue.map((charm, i) => (
                  <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>{charm.Skills[0] !== 0 ? `${t(`skill.${charm.Skills[0]}`)} Lv${charm.SkillLevels[0]}` : null}</Td>
                    <Td>{charm.Skills[1] !== 0 ? `${t(`skill.${charm.Skills[1]}`)} Lv${charm.SkillLevels[1]}` : null}</Td>
                    <Td>{charm.Slots.join('-')}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default ResultSection
