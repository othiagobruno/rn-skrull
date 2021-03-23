import React, {createContext, useContext} from 'react';
import {View} from 'react-native';
import {DefaultTheme} from './theme';
import {ITheme} from './theme.d';

const ThemeContext = createContext<ThemeProvider>({
  theme: DefaultTheme
});

interface ThemeProvider {
  theme: ITheme;
}

export const ThemeProvider: React.FC<ThemeProvider> = ({children, theme}) => {
  const userTheme = {...DefaultTheme, ...theme};
  return (
    <ThemeContext.Provider
      value={{
        theme: userTheme
      }}
    >
      <View style={{flex: 1, backgroundColor: userTheme.background}}>{children}</View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext<ThemeProvider>(ThemeContext);
  if (!context) {
    throw new Error('The context must be within a valid provider');
  }
  return context;
};
