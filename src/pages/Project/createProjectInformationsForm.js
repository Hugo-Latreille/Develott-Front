import "./createProjectInformationsForm.scss";
import InputProject from "../../components/Input/ProjectInput";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";
import { setActiveForm } from "./createProjectSlice";

function CreateProjectInformationsForm() {
	const dispatch = useDispatch();
	return (
		<>
			<InputProject name="name" label="Nom du projet" />
			<InputProject name="exerpt" label="Description courte" />
			<div className="create-project-right-container">
				<InputProject
					name="email"
					label="Lancement du projet"
					className="form-right-container-left"
				/>
				<InputProject
					name="email"
					label="Date de fin du projet"
					className="form-right-container-right"
				/>
			</div>
			<Editor
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
			<button
				type="button"
				className="main-button-colored create-project-button"
				onClick={() => dispatch(setActiveForm("technologies"))}
			>
				Valider
			</button>
		</>
	);
}

export default CreateProjectInformationsForm;
