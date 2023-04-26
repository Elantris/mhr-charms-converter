import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const SkillTable = () => {
  const { t } = useTranslation()

  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>{t('layout.skill')}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array.from({ length: 141 }, (_, i) => i + 1).map(v =>
          t(`skill.${v}`) !== `skill.${v}` ? (
            <Tr key={`skill.${v}`}>
              <Td>{v}</Td>
              <Td>{t(`skill.${v}`)}</Td>
            </Tr>
          ) : null,
        )}
      </Tbody>
    </Table>
  )
}

export default SkillTable
