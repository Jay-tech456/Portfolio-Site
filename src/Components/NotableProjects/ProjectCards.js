import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ProjectCards({ image, alt, title, description }) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <Typography gutterBottom variant="h2" component="div">
              {title}
            </Typography>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={alt}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
