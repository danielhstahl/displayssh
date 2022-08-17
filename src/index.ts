import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the displayssh extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'displayssh:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension displayssh is activated!');
  }
};

export default plugin;
