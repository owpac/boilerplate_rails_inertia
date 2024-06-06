# README

This project is a boilerplate for a basic Rails app with Inertia. Here is the tech stack:

- Propshaft
- esbuild
- Postcss with Tailwind
- Litestack as DB
- React as frontend framework
- Inertia

# How to reproduce?

### Step 1: Create your Rails app

```bash
rails new app --asset-pipeline=propshaft --javascript=esbuild --css=postcss --skip-hotwire
```

### Step 2: Configure Inertia

```bash
gem "inertia_rails"
```

```bash
yarn add react react-dom @inertiajs/react
```

Add in `config/initializers/inertia.rb`

```ruby
InertiaRails.configure do |config|
  config.default_render = true
end

```

Add `use_inertia_instance_props` in `app/controllers/application_controller.rb`

Add in `app/javascript/application.jsx`

```jsx
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
  resolve: (name) => require(`./pages/${name}.jsx`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
```

### Step 3: Configure Tailwind

```bash
yarn add tailwindcss postcss autoprefixer

yarn tailwindcss init
```

Add in `postcss.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add in `app/assets/stylesheets/application.postcss.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Step 4: Configure litestack

```bash
gem "litestack"

bin/rails generate litestack:install
```
