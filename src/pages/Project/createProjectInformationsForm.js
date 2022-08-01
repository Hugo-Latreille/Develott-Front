import "./createProjectInformationsForm.scss";

import InputProject from "../../components/Input/ProjectInput";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function CreateProjectInformationsForm() {
  return (
    <form className="project-information-form-dark">
      <InputProject name="email" label="Nom du projet" />
      <InputProject name="email" label="Description courte" />
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
        type="submit"
        className="main-button-colored create-project-button"
      >
        Valider
      </button>
    </form>
  );
}

export default CreateProjectInformationsForm;
