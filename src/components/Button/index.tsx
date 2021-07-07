import {useTheme} from '../../theme/provider';
import React from 'react';
import {GestureResponderEvent, Pressable, Text, TextStyle, ViewStyle} from 'react-native';
import {ActivityIndicator} from '../ActivityIndicator';
import {useStyles} from './styles';
import {useViewStyles} from '../../core/utils/create_style';
import type {IViewStyleConstants} from '../../core/utils/view_styles';

interface Props extends IViewStyleConstants {
  children: React.ReactElement | string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: 'outline' | 'solid' | 'text';
  size?: 'small' | 'larger' | 'medium';
  icon?: React.ReactElement;
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
  disabled,
  ...props
}) => {
  const styles = useStyles();
  const {colors} = useTheme();
  const {styles: viewStyles} = useViewStyles(props);
  const isDisabled = !!isLoading || !!disabled;

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
      disabled={isDisabled}
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        button_sizes,
        styles[variant],
        pressed && variant === 'solid' && styles.pressed,
        pressed && variant !== 'solid' && styles.pressed_opacity,
        !!isDisabled && styles.button_disabled,
        style,
        viewStyles
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={loadingColor ?? activity_loading} style={[styles.icon, labels]} />
      ) : (
        icon
      )}
      <Text style={[styles.label, labels, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default Button;
