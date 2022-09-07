import React, { FC, memo, useCallback, useMemo } from 'react'
import { IThemeMeta, IThemeNames } from '@/themes'
import { useAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import activeThemeId from '@/states/theme'
import { Box, Text, TouchableOpacity } from '@/atoms'
import FeatherIcon from '@/components/Icon'

interface IProps {
  theme: IThemeMeta
  onPress: (themeId: IThemeNames) => void
}

const ThemeListItem: FC<IProps> = ({ theme, onPress }) => {
  const [isActive] = useAtom(
    useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme])
  )

  const handlePress = useCallback(() => {
    onPress(theme.id)
  }, [onPress, theme])

  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection="row"
      alignItems="center"
      px="lg"
      onPress={handlePress}
    >
      <Box alignItems="center" justifyContent="center" width={32}>
        {isActive ? (
          <FeatherIcon size={20} name="check" color="$primary" />
        ) : null}
      </Box>
      <Text>{theme.name}</Text>
    </TouchableOpacity>
  )
}

export default memo(ThemeListItem)
