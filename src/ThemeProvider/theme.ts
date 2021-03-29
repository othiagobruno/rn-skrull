import {ITheme} from './theme.d';

export const DefaultTheme: ITheme = {
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
    appBar: {
      container: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
      },
      wrapper: {
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      title: {
        fontSize: 18,
        textTransform: 'uppercase',
        paddingLeft: 10,
        fontWeight: 'bold',
        flex: 1
      },
      icons: {
        width: 42,
        height: 42
      }
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      lineHeight: 32
    },
    label: {
      fontSize: 14,
      marginVertical: 3
    },
    paragraph: {
      fontSize: 17
    },
    button: {
      disabled: {
        opacity: 0.5
      },
      focusPressed: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5
      },
      variants: {
        default: {
          paddingHorizontal: 20,
          paddingVertical: 12,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'center'
        },
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 2
        },
        solid: {
          alignItems: 'center'
        },
        text: {
          alignItems: 'center',
          backgroundColor: 'transparent'
        }
      },
      sizes: {
        small: {
          paddingVertical: 8,
          borderRadius: 4
        },
        larger: {
          paddingVertical: 16
        },
        medium: {
          paddingVertical: 12
        }
      },
      labelStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#fff'
      }
    },
    input: {
      unselectOutlineColor: '#ccc',
      disabled: {
        opacity: 0.5
      },
      variants: {
        default: {
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
