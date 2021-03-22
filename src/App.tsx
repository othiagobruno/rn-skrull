import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Title from './Title';

import {styles} from './styles';
import Paragraph from './Paragraph';
import {ThemeProvider} from './ThemeProvider';
import Button from './Button';
import Spacing from './Spacing';
import Label from './Label';
import IconButton from './IconButton';
import AppBar, {AppBarIcon} from './AppBar';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppBar
        title="Theme Details"
        left={<AppBarIcon name="menu" />}
        right={[
          <AppBarIcon name="search" />,
          <AppBarIcon badge={2} name="shopping-cart" />,
          <AppBarIcon badge={2} name="shopping-cart" />
        ]}
      />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Title>Text Title</Title>
            <Spacing />
            <Paragraph>Text Paragraph</Paragraph>
            <Spacing />

            <Label>Larger Button Solid</Label>
            <Button size="larger">Button</Button>
            <Spacing />
            <Label>Medium Button Solid</Label>
            <Button icon="home">Button</Button>
            <Spacing />
            <Label>Small Button Solid</Label>
            <Button size="small">Button</Button>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
