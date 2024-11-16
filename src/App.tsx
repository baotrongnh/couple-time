import {MantineProvider} from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import {theme} from './theme'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MainLayout from "./layouts/MainLayout.tsx"
import {Home} from "./pages"

function App() {

    return (
        <MantineProvider defaultColorScheme='light' theme={theme}>
            <Router
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <Routes>
                    <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
                </Routes>
            </Router>
        </MantineProvider>
    )
}

export default App
