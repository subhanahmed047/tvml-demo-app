//# sourceURL=application.js

//
//  application.js
//  demo123
//
//  Created by Subhan Ahmed on 1/7/19.
//  Copyright © 2019 Subhan Ahmed. All rights reserved.
//

/*
 * This file provides an example skeletal stub for the server-side implementation
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is
 * configured in the AppDelegate of the TVML application. Note that  the various
 * javascript functions here are referenced by name in the AppDelegate. This skeletal
 * implementation shows the basic entry points that you will want to handle
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript
 * has been parsed into a JavaScript context. The handler is passed an object
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents
 * the URL that was used to retrieve the application JavaScript.
 */
App.onLaunch = (options) => {
    const alert = createAlert('Hello World!', 'Welcome to tvOS');
    navigationDocument.pushDocument(alert);
};

App.onWillResignActive = () => {};

App.onDidEnterBackground = () => {};

App.onWillEnterForeground = () => {};

App.onDidBecomeActive = () => {};

App.onWillTerminate = () => {};

/**
 * This convenience funnction returns an alert template, which can be used to present errors to the user.
 */
const createAlert = (title, description) => {
    const catalogDocument = `<?xml version="1.0" encoding="UTF-8" ?>
<document>
   <catalogTemplate>
      <banner>
         <title>Popular Titles</title>
      </banner>
      <list>
         <section>
            <listItemLockup>
               <title>All Titles</title>
               <decorationLabel>6</decorationLabel>
               <relatedContent>
                  <grid>
                     <section>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 1</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 2</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 3</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 4</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 5</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 6</title>
                        </lockup>
                     </section>
                  </grid>
               </relatedContent>
            </listItemLockup>
            <listItemLockup>
               <title>Pets</title>
               <decorationLabel>4</decorationLabel>
               <relatedContent>
                  <grid>
                     <section>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 2</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 1</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 4</title>
                        </lockup>
                        <lockup>
                           <img src="https://loremflickr.com/250/376" width="250" height="376" />
                           <title>Movie 3</title>
                        </lockup>
                     </section>
                  </grid>
               </relatedContent>
            </listItemLockup>
         </section>
      </list>
   </catalogTemplate>
</document>`;

    const alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <alertTemplate>
            <title>${title}</title>
            <description>${description}</description>
          </alertTemplate>
        </document>`;

    const alertDoc = new DOMParser().parseFromString(
        // alertString,
        catalogDocument,
        'application/xml',
    );

    return alertDoc;
};
