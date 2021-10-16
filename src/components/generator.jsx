import React, { useState } from "react";
import { Grid } from "@mui/material";
import FormItem from "./form";
import { ReactComponent as SVG } from "./Security-cuate.svg";

const Generator = ({ theme }) => {
  const getPasswords = (passwords) => {
    alert(`Your password is :  ${passwords}`);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={6}>
          <FormItem getPasswords={getPasswords} />
        </Grid>
        <Grid item sm={12} lg={6} xs={12} style={{ padding: "3vw" }}>
          {<SVG />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Generator;
