import React from "react";
// import {withReact} from 'react';
import {
  CssBaseline,
  MuiThemeProvider,
  Container,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./theme";
import { Editor, Node } from "./editor";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
  title: {
    margin: theme.spacing(0, 2, 2),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
}));

const initialValue: Node[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

//App is a functional component, so it needs useState as a hook
export function App() {
  const [value, setValue] = React.useState(initialValue);
  const s = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={s.root} maxWidth="sm">
        <Typography className={s.title} component="h1" variant="h5">
          Slate.js Sandbox
        </Typography>
        <Card className={s.card} elevation={3}>
          <CardContent>
            <>
              <Editor
                value={value}
                onChange={(x) => setValue(x)}
                placeholder="Write text here..."
                autoFocus
                spellCheck
                // renderMark={this.renderMark}
                // onKeyDown={this.onKeyDown}
              />
            </>
          </CardContent>
        </Card>
      </Container>
    </MuiThemeProvider>
  );
}

// onClick={() => {editor.current!.addMark("bold")}}
