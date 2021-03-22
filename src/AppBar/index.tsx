import React from 'react';
import {GestureResponderEvent, SafeAreaView, View} from 'react-native';
import {useTheme} from '../ThemeProvider';
import IconButton from '../IconButton';
import Title from '../Title';

import {useStyles} from './styles';

interface AppBarProps {
  title: string;
  left?: JSX.Element;
  right?: JSX.Element[];
}

interface IconProps {
  name: string;
  badge?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export const AppBarIcon: React.FC<IconProps> = ({name, badge, onPress = () => {}}) => {
  const theme = useTheme();
  return (
    <IconButton
      onPress={onPress}
      style={useStyles().icon}
      badge={badge}
      color={theme.theme?.appBar?.color}
      icon={name}
      variant="default"
    />
  );
};

const AppBar: React.FC<AppBarProps> = ({title, left = null, right = null}) => {
  const styles = useStyles();

  return (
    <View style={styles.appBar}>
      <SafeAreaView>
        <View style={styles.safe}>
          <View style={styles.row}>{left}</View>
          <View style={styles.center}>
            <Title numberOfLines={1} style={styles.title}>
              {title}
            </Title>
          </View>
          <View style={styles.row_end}>{right?.map((item, key) => key < 2 && <View key={key}>{item}</View>)}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AppBar;
