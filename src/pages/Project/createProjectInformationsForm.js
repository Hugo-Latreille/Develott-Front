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
import { usePostProjectMutation } from "../Projects/projectsAPISlice";
import { useFindUserByEmailQuery } from "../Login/authAPISlice";

function CreateProjectInformationsForm() {
  const dispatch = useDispatch();
  const { picture_project, name, exerpt, description, start_date, end_date } =
    useSelector((state) => state.createProject);
  const { email } = useSelector((state) => state.auth);
  const { data: userInfos, refetch } = useFindUserByEmailQuery(email);
  const [postProject] = usePostProjectMutation();

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

  const postNewProject = (e) => {
    e.preventDefault();
    dispatch(
      handleChange({
        name: "description",
        value: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      })
    );
    postProject({
      userId: userInfos?.id,
      name,
      exerpt,
      description,
      picture_project,
      start_date,
      end_date,
    })
      .unwrap()
      .then((data) => {
        console.log(data);
        dispatch(handleChange({ name: "projectId", value: data }));
        dispatch(setActiveForm("technologies"));
      });
  };

  return (
    <form onSubmit={postNewProject}>
      <div className="create-project-inputs-container">
        <div className="create-project-inputs-container-right">
          <InputProject name="name" label="Nom du projet" value={name} />
          <InputProject
            name="exerpt"
            label="Description courte"
            value={exerpt}
          />
        </div>
        <div className="create-project-inputs-container-left">
          {picture_project === "" ? (
            <button
              type="button"
              className="project-edit-img-input"
              onClick={() => showCloudinaryWidget()}
            >
              Image du projet
            </button>
          ) : (
            <img
              src={picture_project}
              alt="image du projet"
              className="project-create-avatar-img"
            />
          )}
          {/* <button
            type="button"
            className="project-edit-img-input"
            onClick={() => showCloudinaryWidget()}
          >
            Image du projet
          </button> */}
        </div>
      </div>
      <div className="create-project-right-container">
        <InputProject
          name="start_date"
          label=" "
          className="form-right-container-left"
          value={start_date}
        />
        <InputProject
          name="end_date"
          label=" "
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
