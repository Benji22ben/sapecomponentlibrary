# SAPE REACT NATIVE COMPONENTS LIBRARY

Welcome to the **Sape** components library ! :smile:

This little project is made to grow with **YOUR** help !
This component library is licensed under MIT, this means you can help us develop it, or you can develop your own upgrades you think could help the community.
&nbsp;
**You want to contribute to the project ?**
[Read here how to](.github/CONTRIBUTING.md)

## Installation

To install **SRNC** run

```bash
npm install sape-react-native-components
```

&nbsp;

## Usage

You just need to import component from our library

```js
import {
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from '/react-native-library';
```

&nbsp;

#### Touchables components

```js
<TouchableOpacity />
// and
<TouchableHighlight />
```

&nbsp;

##### **`invertedColors`**

Invert the original colors of the component to create contrast
Example :

```js
<TouchableOpacity invertedColors />
```

&nbsp;

##### **`text`**

Adds a text easily
Example :

```js
<TouchableHighlight text="YOUR_TEXT" />
```

&nbsp;
You can also use all props from the original React Native component [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) or [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)
