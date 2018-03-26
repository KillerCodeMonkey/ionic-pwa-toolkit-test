import {Component, Element, Prop} from '@stencil/core';

export interface Room {
  name: string;
  entries: {
    patient: {
      firstname: string;
      lastname: string;
    };
    appointment: {
      doctor: string;
      type: string;
    };
  }[]
}

@Component({
  tag: 'room-list',
  styleUrl: 'room-list.scss'
})
export class RoomList {

  @Element() el: HTMLElement;

  @Prop() roomList: Room[];
  @Prop() selectMode = false;

  @Prop() entryClick: Function;
  @Prop() select: Function;

  render() {
    return (
      <div>
        {this.roomList.map((room) => (
          <div>
            <h1>{ room.name }</h1>
            {room.entries.map((entry) => (
              <ion-card ion-item onClick={() => this.entryClick(entry)}>
                <h4>
                  { entry.patient.firstname } { entry.patient.lastname }
                </h4>
                <p>
                  { entry.appointment.doctor }
                </p>
                <p>{ entry.appointment.type || '/' }</p>
              </ion-card>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
