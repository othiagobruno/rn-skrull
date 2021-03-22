import React from 'react';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useStyles} from './styles';

interface Props {
  children: React.ReactElement | string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  variant?: 'outline' | 'solid' | 'text';
  size?: 'small' | 'larger' | 'medium';
  icon?: Icon | string;
}

const Button: React.FC<Props> = ({children, style, size = 'medium', labelStyle, variant = 'solid', icon = null}) => {
  const styles = useStyles();

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
      medium: styles.button
    }[size ?? 'medium'] ?? styles.button;

  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        button_sizes,
        styles[variant],
        pressed && variant === 'solid' && styles.pressed,
        pressed && variant !== 'solid' && styles.pressed_opacity,
        style
      ]}
    >
      {icon && typeof icon === 'string' ? <Icon name={icon} size={20} style={[styles.icon, labels]} /> : icon}
      <Text style={[styles.label, labels, labelStyle]}>{children}</Text>
    </Pressable>
  );
};

export default Button;
