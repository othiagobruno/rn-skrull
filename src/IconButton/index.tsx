import React from 'react';
import {GestureResponderEvent, Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {IconProps} from 'react-native-vector-icons/Icon';
import {useStyles} from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  variant?: 'outline' | 'solid' | 'default';
  icon?: React.ReactElement<IconProps> | string;
  color?: string;
  badge?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const IconButton: React.FC<Props> = ({
  style,
  badge = 0,
  onPress = () => {},
  variant = 'default',
  icon = null,
  color = null
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
      {icon && typeof icon === 'string' ? (
        <View>
          {badge > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badge_label}>{!!badge && badge > 9 ? '9+' : badge}</Text>
            </View>
          )}
          <Icon name={icon} size={22} style={[color_theme, !!color && {color}]} />
        </View>
      ) : (
        icon
      )}
    </Pressable>
  );
};

export default IconButton;
