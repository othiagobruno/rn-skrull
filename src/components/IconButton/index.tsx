import React from 'react';
import {GestureResponderEvent, Pressable, StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import {useStyles} from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  variant?: 'outline' | 'solid' | 'default';
  icon?: React.ReactElement;
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
  badgeStyle,
  badgeTextStyle
}) => {
  const styles = useStyles();

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
        {icon && icon}
      </View>
    </Pressable>
  );
};

export default IconButton;
