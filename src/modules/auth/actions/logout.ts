'use server'

import { cookies } from 'next/headers'

export async function logout(): Promise<{ success: boolean }> {
  const cookieStore = await cookies()

  cookieStore.delete('access_token')
  cookieStore.delete('user')

  return { success: true }
}
