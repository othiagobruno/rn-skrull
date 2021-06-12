import {useTheme} from '../ThemeProvider';
import React from 'react';
import {GestureResponderEvent, Pressable, Text, TextStyle, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ActivityIndicator} from '../ActivityIndicator';
import {useStyles} from './styles';

interface Props {
  children: React.ReactElement | string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'outline' | 'solid' | 'text';
  size?: 'small' | 'larger' | 'medium';
  icon?: Icon | string;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  isLoading?: boolean;
  loadingColor?: string;
}

const Button: React.FC<Props> = ({
  children,
  style,
  size = 'medium',
  textStyle,
  variant = 'solid',
  onPress = () => {},
  icon = null,
  isLoading,
  loadingColor,
  disabled
}) => {
  const styles = useStyles();
  const {colors} = useTheme();

  const labels =
    {
      solid: styles.label_solid,
      text: styles.label_text,
      outline: styles.label_outline
    }[variant ?? 'solid'] ?? styles.label_solid;

  const button_sizes =
    {
      small: styles.button_small,
      larger: styles.button_larger,
      medium: styles.button_medium
    }[size ?? 'medium'] ?? styles.button;

  const activity_loading = {
    solid: 'white',
    text: colors.primary,
    outline: colors.primary
  }[variant];

  return (
    <Pressable
      disabled={!!disabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        button_sizes,
        styles[variant],
        pressed && variant === 'solid' && styles.pressed,
        pressed && variant !== 'solid' && styles.pressed_opacity,
        !!disabled && styles.button_disabled,
        style
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={loadingColor ?? activity_loading} style={[styles.icon, labels]} />
      ) : icon && typeof icon === 'string' ? (
        <Icon name={icon} size={20} style={[styles.icon, labels]} />
      ) : (
        icon
      )}
      <Text style={[styles.label, labels, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default Button;
