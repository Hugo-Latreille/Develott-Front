// == Import
import "./calendar.scss";

import {
	Inject,
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	MonthAgenda,
	Agenda,
	EventSettingsModel,
	ViewDirective,
	ViewsDirective,
	TimelineViews,
	TimelineMonth,
	DragAndDrop,
	Resize,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
// import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
// import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
// import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { L10n } from "@syncfusion/ej2-base";
import React from "react";

L10n.load({
	"en-US": {
		schedule: {
			saveButton: "Ajouter",
			cancelButton: "Fermer",
			deleteButton: "Supprimer",
			newEvent: "Ajouter un évènement",
		},
	},
});
// == Composant
// function App() {
//   return (
//     <div className="app">
//         <p>xouxou</p>
//     </div>
//   );
// }

class Calendar extends React.Component {
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
				//IsAllDay: true
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
				StartTime: "2022-08-08T15:10:43.511Z",
				EndTime: "2022-08-08T17:30:43.511Z",
				Subject: "Présenter l'Apothéose",
			},
			{
				Id: 5,
				User: "Athur",
				Initiale: "KA",
				Color: "orange",
				StartTime: "2022-08-09T00:00:43.511Z",
				EndTime: "2022-08-09T14:25:43.511Z",
				Subject: "Dormir.",
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

	treeViewData = [
		{ id: 1, name: "Leadagan", Initiale: "LB", Color: "#F0F" },
		{ id: 1, name: "Perceval", Initiale: "PU", Color: "#00F" },
		{ id: 1, name: "King Arthur", Initiale: "KA", Color: "orange" },
		{ id: 1, name: "Dame du Lac", Initiale: "DL", Color: "#F00" },
	];

	field = { dataSource: this.treeViewData, id: "id", text: "name" };

	//bind schedular data using remote data
	remoteData = new DataManager({
		url: "https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
		adaptor: new WebApiAdaptor(),
		crossDomain: true,
	});

	eventTemplate(props) {
		return (
			<div className="template-wrap">
				<div className="template-wrap-subject"> {props.Subject}</div>
				<div className="template-wrap-users">
					<span
						className="template-wrap-initiale"
						style={{ backgroundColor: props.Color }}
					>
						{props.Initiale}
					</span>
				</div>
			</div>
		);
	}

	nodeTemplate(props) {
		return (
			<div className="template-wrap-subject">
				<span
					className="template-wrap-initiale"
					style={{ backgroundColor: props.Color }}
				>
					{props.Initiale}
				</span>{" "}
				{props.name}
			</div>
		);
	}

	// editorWindowTemplate(props) {
	//   return (
	//     <table className="custom-event-editor" style={{ width: "100%" }}>
	//       <tbody>
	//         <tr>
	//           <td className="e-textlabel">Titre</td>
	//           <td>
	//             <input
	//               className="e-field e-input"
	//               id="Summary"
	//               name="Subject"
	//               type="text"
	//             ></input>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td className="e-textlabel">Assigner à</td>
	//           <td>
	//             <DropDownListComponent
	//               id="EventType"
	//               placeholder="Choose participant"
	//               data-name="User"
	//               dataSource={[
	//                 "Leadagan",
	//                 "King Arthur",
	//                 "Perceval",
	//                 "Dame du Lac",
	//               ]}
	//               value={props.EventType || null}
	//               className="e-field e-input"
	//             ></DropDownListComponent>
	//           </td>
	//         </tr>
	//         <tr style={{ width: "50%" }}>
	//           <td className="e-textlabel">Début</td>
	//           <td>
	//             <DateTimePickerComponent
	//               id="StartTime"
	//               data-name="StartTime"
	//               value={new Date(props.startTime || props.StartTime)}
	//               format="MM/dd/yy hh:mm a"
	//               className="e-field e-input"
	//             ></DateTimePickerComponent>
	//           </td>
	//         </tr>
	//         <tr style={{ width: "50%" }}>
	//           <td className="e-textlabel">Fin</td>
	//           <td>
	//             <DateTimePickerComponent
	//               id="EndTime"
	//               data-name="EndTime"
	//               value={new Date(props.endTime || props.EndTime)}
	//               format="MM/dd/yy hh:mm a"
	//               className="e-field e-input"
	//             ></DateTimePickerComponent>
	//           </td>
	//         </tr>
	//         <tr>
	//           <td className="e-textlabel">Description</td>
	//           <td>
	//             <textarea
	//               id="Description"
	//               className="e-field e-input"
	//               name="Description"
	//               rows={3}
	//               cols={50}
	//               style={{
	//                 width: "100%",
	//                 height: "60px !important",
	//                 resize: "vertical",
	//               }}
	//             ></textarea>
	//           </td>
	//         </tr>
	//       </tbody>
	//     </table>
	//   );
	// }

	render() {
		return (
			<div className="container-scheduler-component">
				<ScheduleComponent
					currentView="Agenda"
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
						<ViewDirective
							option="WorkWeek"
							isSelected={true}
							startHour="08:00"
							endHour="20:00"
						></ViewDirective>
						<ViewDirective
							option="MonthAgenda"
							showWeekNumber={true}
						></ViewDirective>
						<ViewDirective option="Agenda"></ViewDirective>
					</ViewsDirective>
					<Inject
						services={[
							Day,
							Week,
							WorkWeek,
							Month,
							MonthAgenda,
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
export default Calendar;
