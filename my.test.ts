import { fileURLToPath } from 'url'
import { setup, $fetch } from '@nuxt/test-utils'
import { describe, expect, it } from 'vitest'

const playground = fileURLToPath(new URL('./playground', import.meta.url))

await setup({
  rootDir: playground,
  runner: 'vitest',
  server: true
})

describe('Sample test suite', () => {
  it('Sanity image builder works', async () => {
    const { body: html } = await $fetch('/')
    expect(html).toContain(
      'Nuxt module playground'
    )
  }, 50000)
})
