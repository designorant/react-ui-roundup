import { Framework } from "../entities";

const frameworkHomepage = 'https://material-ui.com';

export const materialUI: Framework = {
  frameworkHomepage,
  frameworkId: 'materialUI',
  repoURL: 'https://github.com/mui-org/material-ui',
  frameworkName: 'Material UI',
  frameworkFeaturesById: {
    darkMode: true,
    designKits: [
      {
        type: 'Figma',
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`
      },
      {
        type: 'Sketch',
        href: `${frameworkHomepage}/discover-more/related-projects/#design-resources`
      },
    ],
    rtlSupport: true,
    themer: `${frameworkHomepage}/discover-more/related-projects/#theming`,
    typeScript: true,
  },
  components: [
    {
      componentId: 'alert',
      componentName: 'Alert',
      componentURL: `${frameworkHomepage}/components/alert`,
      options: {
        closable: true,
        types: ['error', 'warning', 'info', 'success'],
      }
    },
    {
      componentId: 'button',
      componentName: 'Button',
      componentURL: `${frameworkHomepage}/components/buttons`,
      options: {
        disabled: true,
        groupable: true,
        icon: ['left', 'right', 'only'],
        loading: false,
        sizes: ['small', 'medium', 'large'],
      },
    },
    {
      componentId: 'checkbox',
      componentName: 'Checkbox',
      componentURL: `${frameworkHomepage}/components/checkboxes`,
      options: {
        customIcon: true,
        disabled: true,
        indeterminate: true,
        invalid: false,
        labelPlacement: ['right', 'left', 'above', 'below'],
      },
    },
    {
      componentId: 'stepper',
      componentName: 'Stepper',
      componentURL: `${frameworkHomepage}/components/steppers`,
      options: {
        canBeVertical: true,
        clickable: true,
        stepDescription: true,
        stepIcon: true,
        stepError: true,
      },
    },
    {
      componentId: 'switch',
      componentName: 'Switch',
      componentURL: `${frameworkHomepage}/components/switches`,
      options: {
        disabled: true,
        indeterminate: false,
        internalIcons: false,
        internalText: false,
        labelPlacement: ['above', 'below', 'left', 'right'],
        loading: false,
        sizes: ['default', 'small'],
      },
    },
    {
      componentId: 'tabs',
      componentName: 'Tabs',
      componentURL: `${frameworkHomepage}/components/tabs`,
      options: {
        canBeVertical: true,
      },
    },
  ],
};
