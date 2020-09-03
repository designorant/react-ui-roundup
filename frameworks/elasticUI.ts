import { Framework } from '../entities';

const frameworkHomepage = 'https://elastic.github.io/eui';

export const elasticUI: Framework = {
  frameworkHomepage,
  frameworkId: 'elasticUI',
  repoURL: 'https://github.com/elastic/eui',
  frameworkName: 'Elastic UI',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        type: 'Sketch',
        href: `${frameworkHomepage}`
      },
    ],
    rtlSupport: false,
    themer: false,
    typeScript: true,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/#/navigation/button`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: true,
        sizes: ['m', 'sm', 'xs'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/#/forms/form-controls`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'errorBoundary',
      componentName: 'ErrorBoundary',
      componentURL: `${frameworkHomepage}/#/utilities/error-boundary`,
      options: {
        customText: false,
        dropInFallback: false,
        wrapperFallback: false,
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Steps',
      componentURL: `${frameworkHomepage}/#/navigation/steps`,
      options: {
        canBeVertical: true,
        clickable: false,
        stepDescription: false,
        stepIcon: false,
        stepError: false,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/#/forms/form-controls`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['right'],
        loading: false,
        sizes: ['default', 'compressed'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/#/navigation/tabs`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};