import React, {useEffect, useRef, useState} from 'react';
import {StyleProp, TextInput, ViewStyle, Animated, TextInputProps, TextStyle, View} from 'react-native';
import {useTheme} from '../../theme/provider';
import {useStyles} from './styles';
import Color from 'color';

interface Props extends TextInputProps, Omit<TextStyle, 'textAlign'> {
  style?: StyleProp<ViewStyle>;
  variant?: 'outline' | 'solid' | 'flat';
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  disabled?: boolean;
}

const Input: React.FC<Props> = React.forwardRef(
  ({variant = 'outline', prefix, disabled, suffix, style, ...rest}, ref) => {
    const styles = useStyles();
    const {colors, components} = useTheme();
    const [focused, setFocused] = useState(false);
    const animate = useRef(new Animated.Value(1)).current;
    const darkenOutline = new Color(components.input.unselectOutlineColor).darken(0.5).string();

    useEffect(() => {
      if (focused) {
        Animated.timing(animate, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false
        }).start();
      } else {
        Animated.timing(animate, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false
        }).start();
      }
    }, [animate, focused]);

    const borderColors = animate.interpolate({
      inputRange: [0, 1],
      outputRange: [components.input.unselectOutlineColor, colors.primary]
    });

    const Prefixo = React.cloneElement(prefix ?? <View />, {
      iconColor: !focused ? darkenOutline : colors.primary,
      style: {
        padding: 2,
        height: 40,
        width: 40,
        marginHorizontal: 4
      }
    });

    const Sufixo = React.cloneElement(suffix ?? <View />, {
      iconColor: !focused ? darkenOutline : colors.primary,
      style: {
        padding: 2,
        height: 40,
        width: 40,
        marginHorizontal: 4
      }
    });

    return (
      <View style={{marginTop: 10}}>
        <Animated.View
          style={[
            styles.input_view,
            styles[variant],
            !focused && styles.unselect,
            !!disabled && styles.disabled,
            {borderColor: borderColors},
            rest
          ]}
        >
          {prefix && Prefixo}
          <TextInput
            editable={!disabled}
            style={[style, styles.input]}
            placeholderTextColor={rest.placeholderTextColor ?? components.input.placeholderTextColor}
            focusable
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...rest}
            ref={ref as any}
          />
          {suffix && Sufixo}
        </Animated.View>
      </View>
    );
  }
);

export default Input;
