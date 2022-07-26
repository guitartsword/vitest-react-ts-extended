import '@testing-library/jest-dom' // works with vitest

// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'
import { server } from '../mocks/server'

beforeAll(() => {
  server.listen()
})

beforeAll(() => {
  server.resetHandlers()
})

afterEach(() => server.resetHandlers())

afterAll(() => {
  server.close()
})
