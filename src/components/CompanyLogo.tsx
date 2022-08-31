import React, { FC, memo } from 'react';
import LogoSvg from '@/images/logo1.svg';
import { Theme } from '@/themes';
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle';
import { SvgProps } from 'react-native-svg';

type IProps = Omit<SvgProps, 'color'> & ColorProps<Theme>;

const CompanyLogo: FC<IProps> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>();
  const colorProp = useResponsiveProp(color);
  const vColor = theme.colors[colorProp || '$foreground'];

  return <LogoSvg {...rest} color={vColor} />;
};

export default memo(CompanyLogo);
