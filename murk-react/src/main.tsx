
import React from 'react'
import ReactDOM from 'react-dom/client'
import {ComponentsApp} from './components-app'
// import { handleColorSchemeChange } from '@/utils'
// handleColorSchemeChange(window.matchMedia('(prefers-color-scheme: dark)'))
// window
//   .matchMedia('(prefers-color-scheme: dark)')
//   .addEventListener('change', handleColorSchemeChange)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ComponentsApp />
  </React.StrictMode>
)
