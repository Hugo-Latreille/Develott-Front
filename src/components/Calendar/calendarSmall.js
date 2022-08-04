// == Import
import "./calendar.scss";

import {
  Inject,
  ScheduleComponent,
  Day,
  Agenda,
  ViewDirective,
  ViewsDirective,
  TimelineViews,
  TimelineMonth,
  DragAndDrop,
  Resize,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

import React from "react";

class CalendarSmall extends React.Component {
  //bind schedular data using local json
  EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        User: "Leadagan",
        Initiale: "LB",
        Color: "#F0F",
        StartTime: "2022-08-20T12:25:43.511Z",
        EndTime: "2022-08-20T18:25:43.511Z",
        Subject: "Râler",
        // RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=4'
      },
      {
        Id: 2,
        User: "Leadagan",
        Initiale: "LB",
        Color: "#0F0",
        StartTime: "2022-08-08T18:25:43.511Z",
        EndTime: "2022-08-08T19:25:43.511Z",
        Subject: "Apérooo",
      },
      {
        Id: 3,
        User: "Perceval",
        Initiale: "PU",
        Color: "#00F",
        StartTime: "2022-08-08T09:20:43.511Z",
        EndTime: "2022-08-08T11:00:43.511Z",
        Subject: "Réunion pré-apothéose",
      },
      {
        Id: 4,
        User: "Dame du Lac",
        Initiale: "DL",
        Color: "#F00",
        StartTime: "2022-08-08T14:10:43.511Z",
        EndTime: "2022-08-08T16:30:43.511Z",
        Subject: "Présenter l'Apothéose",
      },
      {
        Id: 5,
        User: "Athur",
        Initiale: "KA",
        Color: "orange",
        StartTime: "2022-08-09T08:20:43.511Z",
        EndTime: "2022-08-09T14:25:43.511Z",
        Subject: "Dormir.",
        IsAllDay: true,
      },
      {
        Id: 6,
        User: "Athur",
        Initiale: "KA",
        Color: "orange",
        StartTime: "2022-08-12T08:20:43.511Z",
        EndTime: "2022-08-12T09:25:43.511Z",
        Subject: "Implémenter Socket.io",
      },
    ],
  };

  //bind schedular data using remote data
  remoteData = new DataManager({
    url: "https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });

  render() {
    return (
      <div className="container-scheduler-component">
        <ScheduleComponent
          currentView="Day"
          selectedDate={new Date(2022, 7, 8)}
          eventSettings={{
            dataSource: this.EventSettingsModel.dataSource,
            // template: this.eventTemplate.bind(this),
          }}
        >
          {/* pour desactiver le DnD allowDragAndDrop={false}, allowResizing={false} 
        editer le template d'event editorTemplate={this.editorWindowTemplate.bind(this)} */}
          <ViewsDirective>
            <ViewDirective
              option="Day"
              startHour="08:00"
              endHour="20:00"
            ></ViewDirective>
            <ViewDirective option="Agenda"></ViewDirective>
          </ViewsDirective>
          <Inject
            services={[
              Day,
              Agenda,
              TimelineViews,
              TimelineMonth,
              DragAndDrop,
              Resize,
            ]}
          />
        </ScheduleComponent>
      </div>
    );
  }
}

// == Export
export default CalendarSmall;
