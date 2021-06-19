import React, {ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from '../Title';
import {useStyles} from './styles';

interface AppBarProps {
  title: string | JSX.Element;
  left?: (() => ReactElement) | ReactElement;
  right?: (() => ReactElement) | ReactElement;
}

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
