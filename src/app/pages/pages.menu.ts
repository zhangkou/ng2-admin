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
        path: 'platform',
        data: {
          menu: {
            title: 'Platform',
            icon: 'ion-android-apps',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'companylist',
            data: {
              menu: {
                title: 'Company list',
              }
            }
          },
          {
            path: 'companyapprove',
            data: {
              menu: {
                title: 'Company approve',
              }
            }
          }
        ]
      },

      {
        path: 'user',
        data: {
          menu: {
            title: 'User',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 200,
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
            order: 300
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
            order: 400
          }
        }
      },

      {
        path: 'manage',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Data Sycn', // menu title
            icon: 'ion-loop', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 500
          }
        }
      },

      {
        path: 'parameter',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Parameter', // menu title
            icon: 'ion-levels', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 600
          }
        }
      },

      {
        path: 'form',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Form', // menu title
            icon: 'ion-clipboard', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 700
          }
        }
      }

    ]
  }
];

export const PAGES_MENU2 = [
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
            order: 200,
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
        path: 'manage',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Data Sycn', // menu title
            icon: 'ion-loop', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 500
          }
        }
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
            order: 300
          }
        }
      },

      {
        path: 'parameter',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Parameter', // menu title
            icon: 'ion-levels', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 600
          }
        }
      },

      {
        path: 'form',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Form', // menu title
            icon: 'ion-clipboard', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 700
          }
        }
      }

    ]
  }
];

