import "./createProjectInformationsForm.scss";

import { useState } from "react";

import InputProject from "../../components/Input/ProjectInput";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function CreateProjectInformationsForm() {
  return (
    <form>
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
      />
    </form>
  );
}

export default CreateProjectInformationsForm;
