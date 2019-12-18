import { homeTemplate } from './templates/index.xml.js';

App.onLaunch = () => {
  console.log(homeTemplate);
  navigationDocument.pushDocument(homeTemplate);
};

App.onWillResignActive = () => {};

App.onDidEnterBackground = () => {};

App.onWillEnterForeground = () => {};

App.onDidBecomeActive = () => {};

App.onWillTerminate = () => {};
