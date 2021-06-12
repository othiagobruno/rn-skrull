import React, {ReactElement} from 'react';
import {GestureResponderEvent, SafeAreaView, View} from 'react-native';
import {useTheme} from '../ThemeProvider';
import IconButton from '../IconButton';
import Title from '../Title';

import {useStyles} from './styles';

interface AppBarProps {
  title: string | JSX.Element;
  left?: (() => ReactElement) | ReactElement;
  right?: (() => ReactElement) | ReactElement;
}

interface IconProps {
  name: string;
  badge?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export const AppBarIcon: React.FC<IconProps> = ({name, badge = 0, onPress = () => {}}) => {
  const {colors} = useTheme();
  return (
    <IconButton
      onPress={onPress}
      style={useStyles().icon}
      badge={badge}
      color={colors?.appBar?.color}
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
          <View style={styles.row}>{typeof left === 'function' ? left() : left}</View>
          <View style={styles.center}>
            {typeof title === 'string' ? (
              <Title numberOfLines={1} style={styles.title}>
                {title}
              </Title>
            ) : (
              title
            )}
          </View>
          <View style={styles.row_end}>{typeof right === 'function' ? right() : right}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AppBar;
