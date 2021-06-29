import * as React from 'react';
import {Animated, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import color from 'color';
import Icon from '../Icons';
import {useTheme} from '../../theme/provider';

interface CheckBoxProps {
  checked: boolean;
  disabled?: boolean;
  onPress?: () => void;
  uncheckedColor?: string;
  color?: string;
  text?: string;
}

const ANIMATION_DURATION = 100;

const CheckBox = ({checked, disabled, onPress, text, ...rest}: CheckBoxProps) => {
  const {current: scaleAnim} = React.useRef(new Animated.Value(1));
  const isFirstRendering = React.useRef<boolean>(true);
  const theme = useTheme();

  React.useEffect(() => {
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      return;
    }

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.85,
        duration: checked ? ANIMATION_DURATION * 1 : 0,
        useNativeDriver: false
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: checked ? ANIMATION_DURATION * 1 : ANIMATION_DURATION * 1 * 1.75,
        useNativeDriver: false
      })
    ]).start();
  }, [checked, scaleAnim]);

  const checkedColor = rest.color || theme.colors.accent;
  const uncheckedColor =
    rest.uncheckedColor ||
    color(theme.colors.text)
      .alpha(theme.colors.text ? 0.7 : 0.54)
      .rgb()
      .string();

  let checkboxColor;

  if (disabled) {
    checkboxColor = theme.colors.disabled;
  } else {
    checkboxColor = checked ? checkedColor : uncheckedColor;
  }

  const borderWidth = scaleAnim.interpolate({
    inputRange: [0.8, 1],
    outputRange: [7, 0]
  });

  const icon = checked ? 'check-square' : 'square';

  return (
    <TouchableOpacity
      {...rest}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{disabled, checked}}
      accessibilityLiveRegion="polite"
      style={styles.container}
    >
      <Animated.View style={{transform: [{scale: scaleAnim}]}}>
        <Icon allowFontScaling={false} name={icon} size={20} color={checkboxColor} direction="ltr" />
        <View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
          <Animated.View style={[styles.fill, {borderColor: checkboxColor}, {borderWidth}]} />
        </View>
      </Animated.View>
      <Text style={styles.text}>{text} e politicas de privacidade para continuar usando</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fillContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fill: {
    height: 14,
    width: 14
  },
  text: {
    marginLeft: 10,
    color: '#444'
  }
});
