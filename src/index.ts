import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_py_test extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_py_test:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_py_test is activated!');
  }
};

export default extension;
