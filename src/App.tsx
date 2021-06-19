import React from 'react';
import {ScrollView, View} from 'react-native';

import {
  Paragraph,
  AppBar,
  Button,
  Center,
  IconButton,
  Input,
  Label,
  Spacing,
  ThemeProps,
  Stack,
  ThemeProvider,
  Title,
  Box,
  SafeView
} from '.';

const theme: ThemeProps = {
  colors: {
    background: 'white',
    text: 'black'
  }
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack p={0}>
        <AppBar title="Minha tela inicial" />
        <Box mt={50} justify="center" align="center">
          <Title>Olá mundo</Title>
          <Paragraph>Text Paragraph</Paragraph>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export const App2: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar title="Minha tela inicial" />
      <SafeView>
        <ScrollView>
          <Stack>
            <Center>
              <Title>Text Title</Title>
            </Center>
            <Spacing />
            <Paragraph>Text Paragraph</Paragraph>
            <Spacing />

            <Label>Outlined Input</Label>
            <Input placeholderTextColor="#ccc" placeholder="Email" />
            <Spacing height={8} />

            <Label>Flat Input</Label>
            <Input placeholder="Password" variant="flat" />
            <Spacing height={8} />
            <Label>Solid Input</Label>
            <Input placeholder="Username" variant="solid" prefix={<IconButton />} />
            <Spacing />

            <Label>Disabled Input</Label>
            <Input disabled placeholder="Username" variant="outline" prefix={<IconButton />} />
            <Spacing />

            <Label>Larger Button Solid</Label>
            <Button size="larger">Button</Button>
            <Spacing />
            <Label>Medium Button Solid</Label>
            <Button>Button</Button>
            <Spacing />
            <Label>Small Button Solid</Label>
            <Button size="small">Button</Button>
            <Spacing />
            <Label>Outlined button Medium</Label>
            <Button variant="outline">Button</Button>
            <Spacing />
            <Label>Text Button medium</Label>
            <Button variant="text">Button</Button>
            <Label>Text Icon Button Medium</Label>
            <Button variant="text">Button</Button>
            <Spacing />

            <Label>IconButton</Label>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <IconButton variant="solid" />
              <IconButton />
              <IconButton variant="outline" />
            </View>
          </Stack>
        </ScrollView>
      </SafeView>
    </ThemeProvider>
  );
};

export default App;
