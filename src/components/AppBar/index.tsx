import React, {ReactElement} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {useTheme} from '../../theme/provider';
import {useStyles} from './styles';

interface AppBarProps {
  title: string | JSX.Element;
  left?: (() => ReactElement) | ReactElement;
  right?: (() => ReactElement) | ReactElement;
  centerTitle?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({title, left = null, right = null, centerTitle}) => {
  const styles = useStyles();
  const {components} = useTheme();
  const isCenter = centerTitle ?? !!components.appBar.centerTitle;

  const Prefixo = React.cloneElement(typeof left === 'function' ? left() : left ?? <View />, {
    iconColor: 'white',
    style: {
      padding: 2,
      height: 36,
      width: 36,
      marginHorizontal: 4
    }
  });

  const Sufixo = React.cloneElement(typeof right === 'function' ? right() : right ?? <View />, {
    iconColor: 'white',
    style: {
      padding: 2,
      height: 36,
      width: 36,
      marginHorizontal: 4
    }
  });

  return (
    <View style={styles.appBar}>
      <SafeAreaView>
        <View style={styles.safe}>
          <View style={[styles.row, !isCenter && {width: '16%'}]}>{Prefixo}</View>
          <View style={styles.center}>
            {typeof title === 'string' ? (
              <Text numberOfLines={1} style={[styles.title, {textAlign: isCenter ? 'center' : 'left'}]}>
                {title}
              </Text>
            ) : (
              title
            )}
          </View>
          <View style={styles.row_end}>{Sufixo}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AppBar;
