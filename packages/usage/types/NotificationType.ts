import * as z from 'zod'

export const notificationType = [
  'newPosts',
  'newComments',
  'newFollowers',
  'reply',
  'heartOnPost',
  'heartOnComment',
  'heartOnReply',
] as const

export type NotificationType = typeof notificationType[number]

export const notificationTypeSchema = z.enum(notificationType)
