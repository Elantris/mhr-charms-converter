import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const skills: Record<string, number[]> = {
  quest: [34, 32, 104, 105, 33, 96, 84, 138],
  item: [60, 58, 88, 87, 90, 89],
  battleSurvival: [64, 65, 66, 35, 36, 57, 40, 93, 59, 112, 114, 132, 135, 121],
  Resistance: [61, 62, 63, 76, 108, 118],
  parameterChange: [1, 56],
  battleElemSpecial: [13, 14, 15, 16, 17, 18, 21, 20, 19, 41, 81, 42, 124, 134, 141],
  battleAttack: [
    6, 8, 10, 38, 39, 7, 11, 130, 37, 91, 103, 4, 106, 5, 3, 9, 2, 30, 31, 45, 113, 115, 116, 117, 125, 127, 128, 131, 120, 119, 136, 145, 137, 139, 140,
  ],
  battleSwordsman: [22, 23, 12, 26, 85, 25, 107, 46],
  battleGunner: [48, 50, 49, 24, 27, 47, 53, 52, 51, 54, 55, 126],
  setSkill: [100, 101, 102],
}

const maxCharmSkillLevels: Record<string, number[]> = {
  '1': [3, 2],
  '2': [4, 3],
  '3': [3, 2],
  '4': [4, 3],
  '5': [3, 2],
  '6': [3, 2],
  '7': [3, 2],
  '8': [3, 2],
  '9': [5, 4],
  '10': [3, 2],
  '11': [3, 2],
  '12': [3, 2],
  '13': [5, 3],
  '14': [5, 3],
  '15': [5, 3],
  '16': [5, 3],
  '17': [5, 3],
  '18': [3, 3],
  '19': [3, 2],
  '20': [3, 2],
  '21': [3, 2],
  '22': [4, 3],
  '23': [3, 2],
  '24': [3, 2],
  '25': [3, 2],
  '26': [3, 2],
  '27': [3, 2],
  '30': [3, 2],
  '31': [3, 2],
  '32': [3, 2],
  '33': [5, 4],
  '34': [3, 2],
  '35': [5, 4],
  '36': [3, 2],
  '37': [3, 2],
  '38': [3, 2],
  '39': [3, 2],
  '40': [3, 2],
  '41': [3, 2],
  '42': [3, 3],
  '45': [3, 2],
  '46': [2, 1],
  '47': [2, 1],
  '48': [3, 2],
  '49': [3, 2],
  '50': [3, 2],
  '51': [3, 2],
  '52': [3, 2],
  '53': [3, 2],
  '54': [3, 2],
  '55': [3, 2],
  '56': [7, 6],
  '57': [3, 3],
  '58': [3, 3],
  '59': [3, 3],
  '60': [3, 3],
  '61': [5, 4],
  '62': [3, 3],
  '63': [3, 3],
  '64': [3, 3],
  '65': [5, 4],
  '66': [3, 2],
  '76': [3, 3],
  '81': [3, 2],
  '84': [3, 2],
  '85': [3, 2],
  '87': [3, 2],
  '88': [3, 3],
  '89': [5, 4],
  '90': [3, 3],
  '91': [4, 3],
  '93': [3, 3],
  '96': [3, 3],
  '100': [4, 3],
  '101': [4, 3],
  '102': [4, 3],
  '103': [4, 3],
  '104': [3, 3],
  '105': [3, 3],
  '106': [3, 2],
  '107': [3, 2],
  '108': [4, 3],
  '112': [3, 2],
  '113': [2, 1],
  '114': [3, 2],
  '115': [3, 2],
  '116': [3, 2],
  '117': [3, 2],
  '118': [5, 4],
  '119': [3, 2],
  '120': [3, 2],
  '121': [3, 2],
  '124': [3, 2],
  '125': [3, 2],
  '126': [2, 1],
  '127': [3, 2],
  '128': [3, 2],
  '130': [3, 2],
  '131': [3, 2],
  '132': [2, 1],
  '134': [3, 2],
  '135': [2, 1],
  '136': [3, 2],
  '137': [2, 1],
  '138': [3, 2],
  '139': [3, 2],
  '140': [3, 2],
  '141': [3, 2],
  '145': [3, 2],
}
const slots = ['4,1,1', '3,3,1', '2,2,2']

const MaxCharmsSection = () => {
  const { t } = useTranslation()
  const toast = useToast()
  const [selectedSkillIds, setSelectedSkillIds] = useState<number[]>([])
  const [result, setResult] = useState('')

  return (
    <>
      <Divider my={10} />

      <Heading as="h2" size="lg" mb={5}>
        {t('layout.maxCharms')}
      </Heading>

      <Button
        colorScheme="red"
        variant="outline"
        mb={5}
        onClick={() => {
          setSelectedSkillIds([])
          setResult('')
        }}
      >
        {t('layout.clear')}
      </Button>

      <Accordion defaultIndex={[6]} allowMultiple mb={5}>
        {Object.keys(skills).map(categoryId => {
          const isAllSelected = skills[categoryId].every(skillId => selectedSkillIds.includes(skillId))
          const isIndeterminate = !isAllSelected && skills[categoryId].some(skillId => selectedSkillIds.includes(skillId))
          return (
            <AccordionItem key={categoryId}>
              <Flex as="h3">
                <Checkbox
                  colorScheme="cyan"
                  isChecked={isAllSelected}
                  isIndeterminate={isIndeterminate}
                  mr={2}
                  onChange={e => {
                    e.stopPropagation()
                    setSelectedSkillIds(selectedSkillIds =>
                      isAllSelected
                        ? selectedSkillIds.filter(v => !skills[categoryId].includes(v))
                        : [...selectedSkillIds, ...skills[categoryId].filter(v => !selectedSkillIds.includes(v))],
                    )
                  }}
                />

                <AccordionButton>
                  <Box as="span" flexGrow="1" textAlign="left">
                    {t(`category.${categoryId}`)}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Flex>

              <AccordionPanel pb={4}>
                {skills[categoryId].map(skillId => {
                  const isSelected = selectedSkillIds.includes(skillId)
                  return (
                    <Button
                      key={skillId}
                      colorScheme="cyan"
                      size="sm"
                      borderWidth={1}
                      variant={isSelected ? 'solid' : 'outline'}
                      mr={3}
                      mb={3}
                      onClick={() => {
                        setSelectedSkillIds(selectedSkillIds => (isSelected ? selectedSkillIds.filter(v => v !== skillId) : [...selectedSkillIds, skillId]))
                        setResult('')
                      }}
                    >
                      {t(`skill.${skillId}`)}
                    </Button>
                  )
                })}
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>

      <Button
        colorScheme={selectedSkillIds.length < 2 ? 'gray' : 'blue'}
        mb={5}
        onClick={() =>
          setResult(
            selectedSkillIds
              .map((skillId1, i) =>
                selectedSkillIds
                  .map((skillId2, j) =>
                    i === j || maxCharmSkillLevels[skillId1][0] === maxCharmSkillLevels[skillId1][1]
                      ? ''
                      : slots
                          .map(
                            slot =>
                              `${t(`skill.${skillId1}`)},${maxCharmSkillLevels[skillId1][0]},${t(`skill.${skillId2}`)},${
                                maxCharmSkillLevels[skillId2][1]
                              },${slot}`,
                          )
                          .join('\n'),
                  )
                  .filter(v => v)
                  .join('\n'),
              )
              .join('\n'),
          )
        }
      >
        {t('layout.convert')}
      </Button>

      <Textarea h="3xs" isReadOnly value={result} mb={5} onFocus={e => e.target.select()} />

      <Button
        colorScheme="green"
        onClick={() => {
          navigator.clipboard.writeText(result)
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
    </>
  )
}

export default MaxCharmsSection
