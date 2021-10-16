import React, { useState } from "react";
import { Button, Typography, Container } from "@mui/material";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import { generateMyPassword } from "./password";

const FormItem = ({ getPasswords }) => {
  const [NumReq, setNumReq] = useState(false);
  const [SymbReq, setSymbReq] = useState(false);
  const [PwdLwn, setPwdLwn] = useState(0);
  const handleGenerate = (PwdLwn, NumReq, SymbReq) => {
    const pwds = generateMyPassword(PwdLwn, NumReq, SymbReq);
    getPasswords(pwds);
  };
  return (
    <Container style={{ padding: "2vw" }}>
      <form
        style={{ padding: "3vw" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          align="center"
          style={{ margin: "0.75vw" }}
        >
          Customize Password
        </Typography>
        <hr />
        <br />
        <FormControlLabel
          control={
            <Switch
              checked={NumReq}
              onChange={() => {
                setNumReq(!NumReq);
              }}
            />
          }
          label="Include Numbers"
        ></FormControlLabel>
        <br />

        <FormControlLabel
          control={
            <Switch
              checked={SymbReq}
              onChange={() => {
                setSymbReq(!SymbReq);
              }}
            />
          }
          label="Include Symbols"
        ></FormControlLabel>

        <br />
        <br />

        <TextField
          varinat="outlined"
          label="Set length"
          fullWidth
          value={PwdLwn}
          onChange={(e) => {
            setPwdLwn(e.target.value);
          }}
        />
        <br />

        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          endIcon={<AddModeratorIcon />}
          style={{ margin: "1vw" }}
          align="center"
          onClick={() => {
            handleGenerate(PwdLwn, NumReq, SymbReq);
          }}
        >
          Generate password
        </Button>
      </form>
    </Container>
  );
};

export default FormItem;
