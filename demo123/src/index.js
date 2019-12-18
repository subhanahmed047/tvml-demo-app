import homeTemplate from './templates/index.xml';

App.onLaunch = () => {
  const template = new DOMParser().parseFromString(homeTemplate, 'text/xml');
  navigationDocument.pushDocument(template);
};

App.onWillResignActive = () => {};

App.onDidEnterBackground = () => {};

App.onWillEnterForeground = () => {};

App.onDidBecomeActive = () => {};

App.onWillTerminate = () => {};
