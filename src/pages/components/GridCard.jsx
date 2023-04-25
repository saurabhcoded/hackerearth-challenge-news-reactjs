import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import moment from "moment/moment";

export default function GridCard({ news }) {
  let newstitle = news?.title?.rendered;
  return (
    <a href={news?.canonical_url} target={"_blank"}>
      <Card
        className="rounded-4 news-card h-100 shadow-sm"
        style={{ position: "relative" }}
      >
        <CardMedia
          sx={{ height: 300 }}
          image={news?.jetpack_featured_media_url}
          title={news?.jetpack_featured_media_url}
        />

        <CardActions className="flex-column bg-white m-3 rounded-4" style={{ position: "absolute", bottom: 0, zIndex: 500 }}>
          <ListItem
            alignItems="flex-start"
            className="p-0 bg-white px-3 rounded-3"
          >
            <ListItemAvatar>
              <Avatar alt={news?.author} src={`img/avatar/avatar2.jpg`} />
            </ListItemAvatar>
            <ListItemText
              primary={news?.author}
              secondary={
                <React.Fragment>{moment(news?.date).fromNow()}</React.Fragment>
              }
            />
          </ListItem>
          <CardContent className="overlay-hover">
            <div dangerouslySetInnerHTML={{ __html: newstitle }}></div>
          </CardContent>
        </CardActions>
      </Card>
    </a>
  );
}
