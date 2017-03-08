export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

      {
        path: 'user',
        data: {
          menu: {
            title: 'User',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'import',
            data: {
              menu: {
                title: 'User import',
              }
            }
          },
          {
            path: 'list',
            data: {
              menu: {
                title: 'User list',
              }
            }
          }
        ]
      },

      {
        path: 'task',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Task', // menu title
            icon: 'ion-clipboard', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 200
          }
        }
      },

      {
        path: 'event',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Event', // menu title
            icon: 'ion-settings', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 300
          }
        }
      },

      {
        path: 'manage',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Data Sycn', // menu title
            icon: 'ion-settings', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 400
          }
        }
      },

      {
        path: 'parameter',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Parameter', // menu title
            icon: 'ion-settings', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 500
          }
        }
      }

    ]
  }
];
