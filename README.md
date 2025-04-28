# Bessa UI for React Native

![NPM Version](https://img.shields.io/npm/v/bessa-ui)
![Static Badge](https://img.shields.io/badge/PRs_Welcome!-blue)

Lightweight and themeable components for React Native

## 🎉 Getting Started

```npm install bessa-ui``` or ```yarn add bessa-ui``` or ```expo install bessa-ui```

```javascript
import { BessaButton, BessaUIProvider } from "bessa-ui";
```

```javascript
<BessaUIProvider>
    <BessaButton>Button</BessaButton>
</BessaUIProvider>
```

## 🎨 Theming

To customize the theme, make a copy of [bessa-ui-theme.ts](utils/bessa-ui-theme.ts) and pass the JSON object into the BessaUIProvider component as _theme_.

### Colors

There are 22 base colors available, represented by 500 and based on the [Preline Design System](https://www.figma.com/community/file/1426768828937610338). Each color is divided into 11 tints and shades, +95%, +80%, +60%, +40%, +20%, 0%, -20%, -40%, -60%, -80%, and -95%, in light mode and reversed in dark mode.

## 🔨 Components

### Button

```javascript
<BessaButton>Button</BessaButton>
```

#### colorScheme

Description: The background color of the button and color of the anchor text

Type: string

Default: teal

#### size

Description: Padding between the button and the anchor text

Type: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

Default: md

#### radius

Description: The border radius around the button

Type: "none" | "sm" | "md" | "lg" | "xl" | "full"

Default: xl


## 🔗 Useful Links

[Dev Gotchas](https://devgotchas.com) by [Topher](https://www.linkedin.com/in/topherjamesknoll/)

An example: [Bessa LGBTQ Social Media App](https://getbessa.com)

[WynHouse: An Innovation Firm](https://www.wynhouse.co/)
