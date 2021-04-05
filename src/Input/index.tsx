import React, {useEffect, useRef, useState} from 'react';
import {StyleProp, TextInput, ViewStyle, Animated, TextInputProps} from 'react-native';
import {useStyles} from './styles';

interface Props extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  variant?: 'outline' | 'solid' | 'flat';
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  disabled?: boolean;
}

const Input: React.FC<Props> = ({variant = 'outline', prefix, disabled, suffix, style, ...rest}) => {
  const styles = useStyles();
  const [focused, setFocused] = useState(false);

  const animate = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (focused) {
      Animated.timing(animate, {
        toValue: 3,
        duration: 200,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(animate, {
        toValue: 1,
        duration: 200,
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
        !!disabled && styles.disabled
      ]}
    >
      {prefix}
      <TextInput
        editable={!disabled}
        style={[style, styles.input]}
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
