import { z } from 'zod'

export const CharmsScheme = z.array(
  z.object({
    SkillLevels: z.tuple([z.number(), z.number()]),
    Skills: z.tuple([z.number(), z.number()]),
    Slots: z.tuple([z.number(), z.number(), z.number()]),
  }),
)
