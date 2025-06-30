# Grapesjs Style Object Fit

[DEMO](https://codepen.io/steeven-th/pen/gbpywxB)

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-object-fit"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-object-fit'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-object-fit`
* Adds `object-fit` style property to selected components (images by default)
* Dynamically shows/hides the property based on component type
* Fully customizable (sector, values, i18n, etc.)


## Options

| Option         | Description                                                                                         | Default                |
|----------------|-----------------------------------------------------------------------------------------------------|------------------------|
| `sector`       | Style Manager sector where the property will be injected (e.g., `"dimension"`, `"extra"`)          | `"dimension"`          |
| `property`     | The name of the CSS property to manage                                                              | `"object-fit"`         |
| `labelPrefix`  | Prefix used for i18n keys (e.g., `gjs-object-fit.fill`)                                             | `"gjs-object-fit"`     |
| `default`      | Default value of the property                                                                       | `"cover"`              |
| `values`       | List of available options in the dropdown as `{ value, nameKey }[]`                                 | `["fill", "contain", ...]` |
| `components`   | List of component types the property should apply to (checked with `.is(type)`)                    | `["image"]`            |
| `i18n`         | Additional translation messages to be merged with `editor.I18n.addMessages`                         | `{}`                   |



## Download

* CDN
    * `https://unpkg.com/grapesjs-object-fit`
* NPM
    * `npm i grapesjs-object-fit`
* GIT
    * `git clone https://github.com/steeven-th/grapesjs-object-fit.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-object-fit.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-object-fit'],
      pluginsOpts: {
        'grapesjs-object-fit': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import objectFitPlugin from 'grapesjs-object-fit';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [objectFitPlugin],
  pluginsOpts: {
    [objectFitPlugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => objectFitPlugin(editor, { /* options */ }),
  ],
});
```

### Example

```js
import grapesjs from 'grapesjs';
import objectFitPlugin from 'grapesjs-object-fit';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: [objectFitPlugin],
  pluginsOpts: {
    [objectFitPlugin]: {
      sector: 'extra',
      property: 'image-fit',
      default: 'contain',
      labelPrefix: 'my-object-fit',
      components: ['image', 'custom-image'],
      values: [
        { value: 'contain', nameKey: 'contain' },
        { value: 'cover', nameKey: 'cover' },
      ],
      i18n: {
        fr: {
          'my-object-fit.contain': 'Adapter',
          'my-object-fit.cover': 'Remplir'
        },
        en: {
          'my-object-fit.contain': 'Contain',
          'my-object-fit.cover': 'Cover'
        }
      }
    }
  }
});
```


## Development

Clone the repository

```sh
$ git clone https://github.com/steeven-th/grapesjs-object-fit.git
$ cd grapesjs-object-fit
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
