import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../../styles/NotableProjects.css"; 

export default function ProjectCards({ image, alt, title, description, link}) {
  return (
    <div>
      <Card sx={{ Width: 600 }} className="ProjectCards">
        <CardActionArea className = "cardItem">
        <Typography gutterBottom variant="h2" component="div">
              {title}
            </Typography>
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
        <a href= {link} target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-shake fa-lg"></i></a>
      </Card>
    </div>
  );
}
