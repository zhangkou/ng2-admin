import { Injectable } from '@angular/core';

@Injectable()
export class DualListService {
  getDualListData() {
    return Promise.resolve({
      left: [
        {
          title: "Lorem ipsum"
        },
        {
          title: "dolor sit amet"
        },
        {
          title: "consectetur adipiscing elit"
        },
        {
          title: "sed do eiusmod"
        },
        {
          title: "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
        }
      ],
      right: [
        {
          title: "ut labore et dolore"
        },
        {
          title: "magna aliqua"
        },
        {
          title: "Ut enim ad minim veniam"
        },
        {
          title: "quis nostrud exercitation"
        },
        {
          title: "ullamco laboris nisi"
        }
      ]
    });
  }

  getDualListOptions() {
    return {
      left: {
        title: 'Left Column'
      },
      right: {
        title: 'Right Column'
      },
      size: 5
    };
  }
}
