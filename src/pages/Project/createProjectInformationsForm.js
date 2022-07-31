import "./createProjectInformationsForm.scss";

import InputProject from "../../components/Input/ProjectInput";
//? WYSIWYG editor
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useDispatch, useSelector } from "react-redux";
import { handleChange, setActiveForm, setNewImg } from "./createProjectSlice";
import { useState } from "react";

function CreateProjectInformationsForm() {
	const dispatch = useDispatch();
	const { name, exerpt, description, start_date, end_date } = useSelector(
		(state) => state.createProject
	);

	const html = description;
	const contentBlock = htmlToDraft(html);
	const contentState = ContentState.createFromBlockArray(
		contentBlock.contentBlocks
	);
	const [editorState, setEditorState] = useState(
		EditorState.createWithContent(contentState)
	);
	const handleEditorChange = (editorState) => {
		setEditorState(editorState);
	};

	const showCloudinaryWidget = () => {
		let widget = window.cloudinary.createUploadWidget(
			{
				cloudName: `develott`,
				uploadPreset: `develott`,
				sources: ["local", "url"],
				showAdvancedOptions: true,
				cropping: true,
				multiple: false,
				defaultSource: "local",
				styles: {
					palette: {
						window: "#FFFFFF",
						windowBorder: "#90A0B3",
						tabIcon: "#9B72F1",
						menuIcons: "#5A616A",
						textDark: "#000000",
						textLight: "#FFFFFF",
						link: "#9B72F1",
						action: "#FF620C",
						inactiveTabIcon: "#7288E4",
						error: "#F44235",
						inProgress: "#0078FF",
						complete: "#20B832",
						sourceBg: "#E4EBF1",
					},
					fonts: {
						default: null,
						"'Fira Sans', sans-serif": {
							url: "https://fonts.googleapis.com/css?family=Fira+Sans",
							active: true,
						},
					},
				},
			},
			(error, result) => {
				if (!error && result && result.event === "success") {
					console.log(result.info.url);
					const newImg = result.info.url;
					dispatch(setNewImg(newImg));
				}
			}
		);
		widget.open();
	};
	return (
		<>
			<button
				type="button"
				className="project-edit-img-input"
				onClick={() => showCloudinaryWidget()}
			>
				Image du projet
			</button>

			<InputProject name="name" label="Nom du projet" value={name} />
			<InputProject name="exerpt" label="Description courte" value={exerpt} />
			<div className="create-project-right-container">
				<InputProject
					name="start_date"
					label="Lancement du projet"
					className="form-right-container-left"
					value={start_date}
				/>
				<InputProject
					name="end_date"
					label="Date de fin du projet"
					className="form-right-container-right"
					value={end_date}
				/>
			</div>
			<Editor
				editorState={editorState}
				onEditorStateChange={handleEditorChange}
				wrapperClassName="wrapper-class"
				editorClassName="editor-class"
				toolbarClassName="toolbar-class"
				toolbar={{
					options: [
						"inline",
						"blockType",
						"fontSize",
						"list",
						"textAlign",
						"colorPicker",
						"link",
						"emoji",
						"history",
					],
					inline: { inDropdown: true },
					list: { inDropdown: true },
					textAlign: { inDropdown: true },
					link: { inDropdown: false },
					image: { component: undefined },
					blockType: {
						inDropdown: true,
						options: ["Normal", "Blockquote", "Code"],
						className: undefined,
						component: undefined,
						dropdownClassName: undefined,
					},
				}}
			/>
			<textarea
				disabled
				value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
			/>
			<button
				type="button"
				className="main-button-colored create-project-button"
				onClick={() => {
					dispatch(setActiveForm("technologies"));
					dispatch(
						handleChange({
							name: "description",
							value: draftToHtml(convertToRaw(editorState.getCurrentContent())),
						})
					);
				}}
			>
				Valider
			</button>
		</>
	);
}

export default CreateProjectInformationsForm;
