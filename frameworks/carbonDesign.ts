import { Framework } from "../entities";

const frameworkHomepage = 'http://react.carbondesignsystem.com';

export const carbonDesign: Framework = {
  frameworkHomepage,
  frameworkId: 'carbonDesign',
  repoURL: 'https://github.com/carbon-design-system/carbon',
  frameworkName: 'Carbon Design',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        href: 'https://www.carbondesignsystem.com/resources#theme-libraries',
        type: 'Sketch',
      },
    ],
    rtlSupport: true,
    themer: 'https://themes.carbondesignsystem.com/?nav=button',
    typeScript: false,
  },
  components: [
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/?path=/story/buttons--default`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['right', 'only'],
        loading: true,
        sizes: ['default', 'field', 'small'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/?path=/story/checkbox--checked`,
      options: {
        customIcon: false,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right'],
      },
    },
    {
      componentId: 'stepper',
      componentName: 'ProgressIndicator',
      componentURL: `${frameworkHomepage}/?path=/story/progressindicator--default`,
      options: {
        canBeVertical: true,
        clickable: true,
        stepDescription: true,
        stepIcon: false,
        stepError: true,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/?path=/story/toggle--toggled`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['right'],
        loading: false,
        sizes: ['default', 'small'],
      },
    },
    {
      componentId: 'errorBoundary',
      componentName: 'ErrorBoundary',
      componentURL: `${frameworkHomepage}/?path=/story/errorboundary--default`,
      options: {
        customText: false,
        dropInFallback: true,
        wrapperFallback: false,
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/?path=/story/tabs--default`,
      options: {
        canBeVertical: false,
      },
    },
  ],
};
