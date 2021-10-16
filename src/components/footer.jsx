import React from "react";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <div className="footer" >
      <Typography variant="h6" component="p" align="center" >
        &copy; All Rights reserved. <a href="/" color="primary">View License</a>
      </Typography>
    </div>
  );
};

export default Footer;
