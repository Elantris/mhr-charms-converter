import { Button, Divider, Heading, Input, Link, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea, UnorderedList } from '@chakra-ui/react'
import { FC, Suspense, lazy, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { CharmsScheme } from '../utils/schemes'

const SkillTable = lazy(() => import('./SkillTable'))

const InputSection: FC<{
  onChange?: (charmsValue: z.infer<typeof CharmsScheme>) => void
}> = ({ onChange }) => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [isError, setIsError] = useState(false)

  const handleConvert = () => {
    try {
      const value = JSON.parse(textareaRef.current?.value || '')
      onChange?.(CharmsScheme.parse(value))
    } catch {
      setIsError(true)
    }
  }

  return (
    <>
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
          <Link href="https://docs.google.com/spreadsheets/d/10JQRMu3l0EQs2eX-e3kiIIq5z8Su1iLU2mKJQYKF2uI/edit?usp=sharing" color="blue.400" isExternal>
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
            <Input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              mb={5}
              onChange={e => {
                const file = e.target.files?.[0]
                if (!file) {
                  return
                }
                const reader = new FileReader()
                reader.addEventListener('load', () => {
                  if (textareaRef.current && typeof reader.result === 'string') {
                    textareaRef.current.textContent = reader.result
                  }
                })
                reader.addEventListener('error', () => {
                  setIsError(true)
                })
                reader.readAsText(file)
              }}
            />

            <Textarea ref={textareaRef} h="3xs" mb={5} placeholder="JSON" borderColor={isError ? 'red.300' : undefined} onFocus={() => setIsError(false)} />
            <Button colorScheme="blue" onClick={() => handleConvert()}>
              {t('layout.convert')}
            </Button>
          </TabPanel>

          <TabPanel>
            <Suspense>
              <SkillTable />
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default InputSection
