import React, {createContext, useContext} from 'react';
import {View} from 'react-native';
import {DefaultTheme} from './theme';
import {ITheme} from './theme.d';
import merge from 'deepmerge';
import {iThemeOverride} from './theme.non.d';
const ThemeContext = createContext<iThemeOverride>(DefaultTheme);

interface ThemeProvider {
  theme?: iThemeOverride;
}

export const ThemeProvider: React.FC<ThemeProvider> = ({children, theme}) => {
  const userTheme = merge({...DefaultTheme}, {...theme});
  return (
    <ThemeContext.Provider value={userTheme}>
      <View style={{flex: 1, backgroundColor: userTheme.colors.background}}>{children}</View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext<iThemeOverride>(ThemeContext);
  if (!context) {
    throw new Error('The context must be within a valid provider');
  }
  return context as ITheme;
};
