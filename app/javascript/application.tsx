import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: (name: string) => require(`./pages/${name}.tsx`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
