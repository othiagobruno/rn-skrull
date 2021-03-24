# React Native Skrull


a complete ui library to react native

| Theme Details      | Button Press     |
|------------|-------------|
| <img src="./examples/assets/example.png" width="250"> | <img src="./examples/assets/example2.png" width="250"> |

## Installation

```bash
yarn add rn-skrull
```

## Usage


#### Theme
Applying a theme to the whole app

```javascript
import { ThemeProvider } from 'rn-skrull';

export default function App {
    const theme: ITheme = {
      colors: {
        primary: '#00b894',
        background: '#fffff',
        text: '#2d3436',
        label: '#636e72',
        appBar: {
          background: '#dfe6e9',
          color: '#222'
        }
      },
      components: {
        input: {
          unselectOutlineColor: '#ccc',
          disabled: {
            opacity: 0.5
          },
          variants: {
            inital: {
              borderRadius: 8,
              paddingHorizontal: 15,
              paddingVertical: 14,
              fontSize: 16
            },
            outline: {
              borderWidth: 2,
              borderRadius: 10
            },
            solid: {
              borderRadius: 10,
              borderWidth: 0,
              backgroundColor: '#dfe6e9'
            },
            flat: {
              borderRadius: 0,
              borderBottomWidth: 2
            }
          }
        }
      }
    };

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

You can also use the useTheme hook:
```javascript
import { useTheme, Button } from 'rn-skrull';

export default function App {
  const { colors } = useTheme();
  return (
    <Button style={{ backgroundColor: colors.primary }}>
      Button
    </Button>
  );
}
```


#### AppBar

```javascript
import {AppBar, AppBarIcon, Button} from 'rn-skrull';

<AppBar
   title="Title"
   left={<AppBarIcon name="menu" />}
   right={[
     <AppBarIcon name="search" />,
     <AppBarIcon badge={2} name="shopping-cart" />,
   ]}
/>
```

#### Buttons
```javascript
import { Button } from 'rn-skrull';

<Button icon="user" size="small" variant="outline">Button</Button>

```
| Props |    value       |
|------------|-------------|
| size |    small / larger / medium |
| icon |    IconSource or Feather icon name |
| variant |    outline / solid / text |
| onPress |   function |
| style |   StyleSheet |
| disabled |  true or false |
| loading |   true or false |

#### Title
```javascript
import { Title } from 'rn-skrull';

<Title>Text Title</Title>

```

#### Label
```javascript
import { Label } from 'rn-skrull';

<Label>Outlined button Medium</Label>

```

#### IconButton
```javascript
import { IconButton } from 'rn-skrull';

<IconButton icon="home" variant="solid" />
```
| Props |    value       |
|------------|-------------|
| icon |    IconSource or Feather icon name |
| variant |    outline / solid / default |
| onPress |   function |
| style |   StyleSheet |
| disabled |  true or false |

#### Paragraph
```javascript
import { Paragraph } from 'rn-skrull';

<Paragraph>Text Paragraph</Paragraph>
```

#### Spacing
```javascript
import { Spacing } from 'rn-skrull';

<Spacing />
```
| Props |    value       |
|------------|-------------|
| width |    number |
| height |    number |

#### ActivityIndicator
```javascript
import { ActivityIndicator } from 'rn-skrull';

<ActivityIndicator />
```
| Props |    value       |
|------------|-------------|
| color |    string |
| size |    "small" / "larger" / number  |
| animating |    true or false |
| style |   styleProps |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
