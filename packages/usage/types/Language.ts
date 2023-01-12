import * as z from 'zod'

export const language = [
  'Typescript',
  'Javascript',
  'Rust',
  'Go',
  'Python',
  'Cpp',
] as const

export type Language = typeof language[number]

export const languageSchema = z.enum(language)
