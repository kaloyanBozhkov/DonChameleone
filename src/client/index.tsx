import { createRoot } from 'react-dom/client'

import App from './App'
import './styles/fonts.css'
import './styles/tailwind.css'

const rootEl = document.getElementById('root')
if (!rootEl) throw Error('Missing root element on page')

const root = createRoot(rootEl)
root.render(<App />)
