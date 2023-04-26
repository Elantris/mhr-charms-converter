import {
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
} from '@chakra-ui/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const ResultTabs: FC<{
  charmsValue: {
    SkillLevels: [number, number]
    Skills: [number, number]
    Slots: [number, number, number]
  }[]
}> = ({ charmsValue }) => {
  const { t } = useTranslation()

  return (
    <>
      <Heading as="h2" size="lg" mb={5}>
        {t('layout.output')}
      </Heading>

      <UnorderedList mb={5}>
        <ListItem>
          <Link href="https://mhrise.wiki-db.com/sim/?hl=zh-hant" color="blue.400" isExternal>
            Monster Hunter Rise:Sunbreak Armorset Search
          </Link>
        </ListItem>
      </UnorderedList>

      <Tabs>
        <TabList>
          <Tab>{t('layout.text')}</Tab>
          <Tab>{t('layout.table')}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Textarea
              h="3xs"
              isReadOnly
              value={charmsValue
                .map(
                  charm =>
                    `${charm.Skills.map((id, i) => `${t(`skill.${id}`) || ''},${charm.SkillLevels[i]}`).join(
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
                  <Th>{t('layout.skill')} 1</Th>
                  <Th>{t('layout.skill')} 2</Th>
                  <Th>{t('layout.slots')}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {charmsValue.map((charm, i) => (
                  <Tr key={i}>
                    <Td>
                      {t(`skill.${charm.Skills[0]}`) !== `skill.${charm.Skills[0]}`
                        ? `${t(`skill.${charm.Skills[0]}`)} Lv${charm.SkillLevels[0]}`
                        : null}
                    </Td>
                    <Td>
                      {t(`skill.${charm.Skills[1]}`) !== `skill.${charm.Skills[1]}`
                        ? `${t(`skill.${charm.Skills[1]}`)} Lv${charm.SkillLevels[1]}`
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
    </>
  )
}

export default ResultTabs
