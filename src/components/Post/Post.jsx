import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

export default function Post({ data }) {
  const { title, image, content } = data;
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <Box mt={10}>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {readMore ? content : `${content.substring(0, 300)}...`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "See More"}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
