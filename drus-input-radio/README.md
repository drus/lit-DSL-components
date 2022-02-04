# \<drus-input-radio>

¿tiene sentido de forma individual?
Si hacemos el componente por separado, perdemos la funcionalidad nativa de selección única (el sandbox hace que no se vean entre ellos aunque compartan el atributo name)

Y si planteamos el componente como radiogroup directamente?
¿cómo se le pasan las opciones, en array? (label, value, checked, id(?))
Hay atributos que son de grupo (name, required, disabled, size)

¿Creamos un componente wrapper radioGroup y subcomponentes radioItem?

Aproximacion de tener el input en el light DOM (autogenerado por el componente?)
https://sap.github.io/ui5-webcomponents/playground/components/RadioButton/

Otra opción sería que el componente solo envolviera un input nativo y el consumidor tuviera que meterlo manualmente.
<drus-input-radio>
  <input type="radio" id="1" name="radiogroup">
</drus-input-radio>
<drus-input-radio>
  <input type="radio" id="2" name="radiogroup">
</drus-input-radio>
<drus-input-radio>
  <input type="radio" id="3" name="radiogroup">
</drus-input-radio>

## API

id:String
name:String
value:String
checked:Boolean
disabled:Boolean
required:Boolean
label:String
labelPosition:String (enum)
size:String (enum)

## Shadow root

label[for=""] + input[type="radio"]




This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i drus-input-radio
```

## Usage

```html
<script type="module">
  import 'drus-input-radio/drus-input-radio.js';
</script>

<drus-input-radio></drus-input-radio>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
