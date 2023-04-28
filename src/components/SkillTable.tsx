import { Checkbox, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useState } from 'react'
import { languages } from '../utils/i18n'

const skillIds = Array.from({ length: 141 }, (_, i) => i + 1)

const SkillTable = () => {
  const [selectedLanguages, setSelectedLanguages] = useState(languages.map(() => true))

  return (
    <>
      <Stack spacing={2} direction="row" mb={5}>
        {languages.map((language, i) => (
          <Checkbox
            key={language.code}
            isChecked={selectedLanguages[i]}
            onChange={e => setSelectedLanguages(prev => Object.assign([], prev, { [i]: e.target.checked }))}
          >
            {language.name}
          </Checkbox>
        ))}
      </Stack>

      <Table size="sm" colorScheme="blue" variant="striped">
        <Thead>
          <Tr>
            <Th>ID</Th>
            {languages.map((language, i) =>
              selectedLanguages[i] ? <Th key={`${language.code}`}>{language.name}</Th> : null,
            )}
          </Tr>
        </Thead>
        <Tbody>
          {skillIds.map(skillId =>
            languages[0].file.skill[skillId] ? (
              <Tr key={`skill-${skillId}`}>
                <Td>{skillId}</Td>
                {languages.map((language, i) =>
                  selectedLanguages[i] ? (
                    <Td key={`${language.code}-${skillId}`}>{language.file.skill[skillId]}</Td>
                  ) : null,
                )}
              </Tr>
            ) : null,
          )}
        </Tbody>
      </Table>
    </>
  )
}

export default SkillTable
