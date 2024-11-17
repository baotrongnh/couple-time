import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import {AppContextProvider} from "./Context/AppContext.tsx"

createRoot(document.getElementById('root')!).render(
    <AppContextProvider>
        <App/>
    </AppContextProvider>
)
