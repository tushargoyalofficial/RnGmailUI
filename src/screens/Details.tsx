import React, {FC, memo} from 'react';
import {Container, Text, TouchableOpacity} from '@/atoms';
import {RootStackParamsList} from '@/Navs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type IProps = NativeStackScreenProps<RootStackParamsList, 'Detail'>;

const DetailsScreen: FC<IProps> = ({navigation, route}) => {
  return (
    <Container flex={1} alignItems="center" justifyContent="center">
      <Text>Details Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default memo(DetailsScreen);
