import React from "react";
import {
  Popper,
  PopperProps,
  ButtonGroup,
  IconButton,
  Input,
} from "@material-ui/core";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Link,
  Close,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useSlate } from "slate-react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #131e40 30%, #80d193 90%)",
    padding: "0 10px",
    marginLeft: "20px",
    marginTop: "30px",
  },
  button: {
    color: theme.palette.common.white,
    opacity: 0.75,
    "&:hover": {
      opacity: 1,
    },
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    color: theme.palette.common.white,
    padding: theme.spacing(0.25, 1),
  },
  close: {
    opacity: 0.75,
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
    },
  },
}));

export interface ToolbarProps extends Omit<PopperProps, "children"> {}

export function Toolbar(props: ToolbarProps) {
  const [link, setLink] = React.useState(null);
  const s = useStyles();

  //anne code below
  const editor = useSlate();

  // const toggleMark = (editor, format) => {
  //   const isActive = isMarkActive(editor, format);

  //   if (isActive) {
  //     editor.removeMark(editor, format);
  //   } else {
  //     editor.addMark(editor, format, true);
  //   }
  // };
  //bringing useState in because we are in a functional component. Setting variable type equal to an empty string. This is a state hook
  // const [type, setType] = useState([{ type: " " }]);

  // const onMarkClick = (e, type) => {
  //   e.preventDefault();
  //   console.log("This was highlighted");
  // };
  //anne code above

  return (
    <Popper className={s.root} {...props}>
      {link === null ? (
        /* Formatting controls */
        <ButtonGroup variant="text" color="primary">
          <IconButton
            editor={editor}
            onClick={() => {
              console.log("clicked bold");
            }}
            // onMouseDown={event => {
            //   event.preventDefault();
            //   toggleMark(editor, format);
            // }}
            //bold the highlighted text
            // editor.current!.toggleMark("bold");
            // onPointerDown={e => this.onMarkClick(e, "bold")}
            className={s.button}
            size="small"
          >
            <FormatBold fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => {
              console.log("click Italic");
            }}
            // onPointerDown={e => this.onMarkClick(e, "italic")}
            className={s.button}
            size="small"
          >
            <FormatItalic fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => {
              console.log("click Underline");
            }}
            // onPointerDown={e => this.onMarkClick(e, "underline")}
            className={s.button}
            size="small"
          >
            <FormatUnderlined fontSize="small" />
          </IconButton>
          <IconButton
            className={s.button}
            size="small"
            onClick={() => setLink("")}
          >
            <Link fontSize="small" />
          </IconButton>
        </ButtonGroup>
      ) : (
        /* URL input field */
        <form onSubmit={(x) => x.preventDefault()}>
          <Input
            className={s.input}
            type="url"
            value={link}
            onChange={(x) => setLink(x.target.value)}
            endAdornment={
              <Close
                className={s.close}
                fontSize="small"
                onClick={() => setLink(null)}
              />
            }
            placeholder="https://"
            disableUnderline
            fullWidth
            autoFocus
          />
        </form>
      )}
    </Popper>
  );
}
