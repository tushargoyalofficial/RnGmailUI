import React, { FC, memo, useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Box } from '@/atoms'
import BookList from './BookList'
import CompanyLogo from './CompanyLogo'

const Sidebar: FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handleBookListItemPress = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])

  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Box justifyContent="center" alignItems="center">
          <CompanyLogo width={128} height={36} />
        </Box>
      </SafeAreaView>
      <BookList onPressItem={handleBookListItemPress} />
    </Box>
  )
}

export default memo(Sidebar)
