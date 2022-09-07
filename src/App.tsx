import React, { FC, memo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import Navigations from '@/Navs'
import StatusBar from '@/components/StatusBar'
import { useAtom } from 'jotai'
import { activeThemeAtom } from '@/states/theme'

const App: FC = () => {
  const [activeTheme] = useAtom(activeThemeAtom)

  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default memo(App)
