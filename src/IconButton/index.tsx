import React from 'react';
import {GestureResponderEvent, Pressable, StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import type {IconProps} from 'react-native-vector-icons/Icon';
import {useStyles} from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  variant?: 'outline' | 'solid' | 'default';
  icon?: React.ReactElement<IconProps> | string;
  color?: string | undefined;
  badge?: number;
  onPress?: (event: GestureResponderEvent) => void;
  badgeStyle?: ViewStyle;
  badgeTextStyle?: TextStyle;
}

const IconButton: React.FC<Props> = ({
  style,
  badge = 0,
  onPress = () => {},
  variant = 'default',
  icon = null,
  color = null,
  badgeStyle,
  badgeTextStyle
}) => {
  const styles = useStyles();

  const color_theme =
    {
      outline: styles.icon_theme,
      solid: styles.icon_white,
      default: styles.icon_theme
    }[variant ?? 'default'] ?? styles.icon_theme;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        styles[variant],
        pressed && variant === 'solid' && styles.pressed,
        pressed && variant !== 'solid' && styles.pressed_opacity,
        style
      ]}
    >
      <View>
        {!!badge && (
          <View style={[styles.badge, badgeStyle]}>
            <Text style={[styles.badge_label, badgeTextStyle]}>{!!badge && badge > 9 ? '9+' : badge}</Text>
          </View>
        )}
        {icon && typeof icon === 'string' ? (
          <Icon name={icon} size={22} style={[color_theme, !!color && {color}]} />
        ) : (
          icon
        )}
      </View>
    </Pressable>
  );
};

export default IconButton;
