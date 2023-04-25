import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const Image = styled("img")({
  width: "100%",
});

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      <Skeleton variant="rectangular" className="rounded-4" width="100%">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: 1 }}>
          <Avatar src="/img/avatar/avatar2.jpg" />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Skeleton width="50%">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
    </div>
  );
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function LoadingCard() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo loading />
      </Grid>
    </Grid>
  );
}
