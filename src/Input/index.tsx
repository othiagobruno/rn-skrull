import React, {useEffect, useRef, useState} from 'react';
import {StyleProp, TextInput, ViewStyle, Animated, TextInputProps, TextStyle} from 'react-native';
import {useTheme} from '../ThemeProvider';
import {useStyles} from './styles';

interface Props extends TextInputProps, Omit<TextStyle, 'textAlign'> {
  style?: StyleProp<ViewStyle>;
  variant?: 'outline' | 'solid' | 'flat';
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  disabled?: boolean;
}

const Input: React.FC<Props> = ({variant = 'outline', prefix, disabled, suffix, style, ...rest}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const animate = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (focused) {
      Animated.timing(animate, {
        toValue: 2.3,
        duration: 150,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(animate, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false
      }).start();
    }
  }, [animate, focused]);

  return (
    <Animated.View
      style={[
        styles.input_view,
        styles[variant],
        !focused && styles.unselect,
        variant === 'outline' && {borderWidth: animate},
        variant === 'flat' && {borderBottomWidth: animate},
        !!disabled && styles.disabled,
        rest
      ]}
    >
      {prefix}
      <TextInput
        editable={!disabled}
        style={[style, styles.input]}
        placeholderTextColor={rest.placeholderTextColor ?? theme.components.input.placeholderTextColor}
        focusable
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      {suffix}
    </Animated.View>
  );
};

export default Input;
