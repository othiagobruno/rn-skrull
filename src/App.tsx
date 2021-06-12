import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Title from './Title';

import Paragraph from './Paragraph';
import {ThemeProvider} from './ThemeProvider';
import Button from './Button';
import Spacing from './Spacing';
import Label from './Label';
import IconButton from './IconButton';
import AppBar, {AppBarIcon} from './AppBar';
import Input from './Input';
import Stack from './Stack';
import Center from './Center';
import type {iThemeOverride} from './ThemeProvider/theme.non.interface';

const theme: iThemeOverride = {
  colors: {
    background: 'white',
    text: '#333'
  }
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        title="Minha tela inicial"
        left={<AppBarIcon name="menu" />}
        right={() => (
          <>
            <AppBarIcon name="search" />
            <AppBarIcon badge={2} name="shopping-cart" />
          </>
        )}
      />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Stack>
            <Center>
              <Title>Text Title</Title>
            </Center>
            <Spacing />
            <Paragraph>Text Paragraph</Paragraph>
            <Spacing />

            <Label>Outlined Input</Label>
            <Input placeholderTextColor="#ccc" placeholder="Email" prefix={<IconButton icon="at-sign" />} />
            <Spacing height={8} />

            <Label>Flat Input</Label>
            <Input placeholder="Password" variant="flat" suffix={<IconButton icon="eye" />} />
            <Spacing height={8} />
            <Label>Solid Input</Label>
            <Input placeholder="Username" variant="solid" prefix={<IconButton icon="user" />} />
            <Spacing />

            <Label>Disabled Input</Label>
            <Input disabled placeholder="Username" variant="outline" prefix={<IconButton icon="user" />} />
            <Spacing />

            <Label>Larger Button Solid</Label>
            <Button size="larger">Button</Button>
            <Spacing />
            <Label>Medium Button Solid</Label>
            <Button icon="home">Button</Button>
            <Spacing />
            <Label>Small Button Solid</Label>
            <Button icon="home" size="small">
              Button
            </Button>
            <Spacing />
            <Label>Outlined button Medium</Label>
            <Button icon="user" variant="outline">
              Button
            </Button>
            <Spacing />
            <Label>Text Button medium</Label>
            <Button variant="text">Button</Button>
            <Label>Text Icon Button Medium</Label>
            <Button variant="text" icon="home">
              Button
            </Button>
            <Spacing />

            <Label>IconButton</Label>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <IconButton icon="home" variant="solid" />
              <IconButton icon="user" />
              <IconButton icon="home" variant="outline" />
            </View>
          </Stack>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
