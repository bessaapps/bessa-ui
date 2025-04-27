# Bessa UI for React Native

![NPM Version](https://img.shields.io/npm/v/bessa-ui)
![Static Badge](https://img.shields.io/badge/PRs_Welcome!-blue)

By [Topher](https://www.linkedin.com/in/topherjamesknoll/)

Lightweight themeable components for React Native

## 🎉 Getting Started

```npm install bessa-ui```

```yarn add bessa-ui```

```expo install bessa-ui```

```javascript
import { BessaButton } from "bessa-ui/src";
```

```javascript
<BessaUIProvider theme={{}}>
    <BessaButton colorScheme={"blue"} onPress={() => {}}>Button</BessaButton>
</BessaUIProvider>
```

## 📖 Documentation

### Theming

22 base colors, represented by 500, are based on the [Preline Design System](https://www.figma.com/community/file/1426768828937610338). Each color is divided into 11 tints and shades, +95%, +80%, +60%, +40%, +20%, 0%, -20%, -40%, -60%, -80%, and -95%, in light mode and reversed in dark mode.

To customize the theme, make a copy of [bessa-ui-theme.ts](utils/bessa-ui-theme.ts) and pass the JSON object into the BessaUIProvider component as _theme_.

## 🔗 Useful Links

[Dev Gotchas](https://devgotchas.com)

[Bessa LGBTQ Social Media App](https://getbessa.com)

[WynHouse: An Innovation Firm](https://www.wynhouse.co/)
