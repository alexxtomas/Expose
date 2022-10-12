import Header from './src/pages/Header'
import Main from './src/pages/Main'
import { eventHandlers } from './src/utils/eventHandlers'

import './style.css'

await Header()
Main()
await eventHandlers()
