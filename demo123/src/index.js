// import { homeTemplate } from './templates/index.xml.js';

// App.onLaunch = () => {
//   console.log(homeTemplate);
//   navigationDocument.pushDocument(homeTemplate);
// };

// App.onWillResignActive = () => {};

// App.onDidEnterBackground = () => {};

// App.onWillEnterForeground = () => {};

// App.onDidBecomeActive = () => {};

// App.onWillTerminate = () => {};

import template from "./templates/xml/home.xml";

console.log({ template });

export const homeTemplate = new DOMParser().parseFromString(
  template,
  "text/xml"
);
