export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'neutral',
    button: {
      default: {
        size: 'xl',
      },
    },
    input: {
      default: {
        size: 'xl',
      },
    },
    select: {
      default: {
        size: 'xl',
      },
    },
    verticalNavigation: {
      padding: 'px-2.5 py-2.5',
      active:
        'text-neutral-900 dark:text-white before:bg-neutral-100 dark:before:bg-neutral-800',
    },
  },
})
