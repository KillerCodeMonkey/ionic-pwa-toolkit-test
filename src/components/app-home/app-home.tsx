import { Component } from '@stencil/core';
import { Room } from '../room-list/room-list';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  roomList: Room[] = [];

  constructor() {
    for (let i = 0; i < 100; i = i + 1) {
      this.roomList.push({
        name: `Room - ${i}`,
        entries: [{
          patient: {
            firstname: 'Horst',
            lastname: 'Horstensen'
          },
          appointment: {
            doctor: 'AW',
            type: 'asdf'
          }
        }]
      })
    }
  }

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-title>Ionic PWA Toolkit</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <room-list select={(data) => console.log("room selected", data)} entryClick={(data) => console.log("room Clicked", data)} roomList={this.roomList}></room-list>

          <ion-button href={'/profile/stencil'}>
            Profile page
          </ion-button>
        </ion-content>
      </ion-page>
    );
  }
}
