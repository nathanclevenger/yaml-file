import { test, expect } from 'vitest'
import yaml from '.'

test('test write yaml', async () => {
  let data = await yaml.write('./test.yml', { name: 'test' })
  expect(data).toBe(undefined)
})

test('test read yaml', async () => {
  let data = await yaml.read('./test.yml') as any
  expect(data.name).toBe('test')
})
