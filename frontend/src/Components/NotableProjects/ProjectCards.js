import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import "../../styles/NotableProjects.css"; 

export default function ProjectCards({ image, alt, title, description, githubLink, projectLink, authors}) {
  return (

    <>
    <div className="center-container">
            <div >
        <Typography variant="h2" component="div" className="project-title">
          {title}
        </Typography>
        <Card className="project-card" sx={{ backgroundColor: '#0a192f', color: '#ccd6f6', padding: '20px', borderRadius: '10px', maxWidth: '600px' }}>
        <Typography variant="body2" className="project-description" sx = {{maxWidth: '600px', zIndex: 1
        }}>
            {description}
          </Typography>
          </Card>

         <div className='authors'>
         <span >Co-Authors: {authors}
         </span>
         </div>
          <div className="project-links">
            <Link href={githubLink} target="_blank" rel="noopener">
              <IconButton aria-label="github" className="project-icon" sx={{ color: '#ccd6f6' }}>
                <GitHubIcon sx= {{size:'medium'}}/>
              </IconButton>
            </Link>
            <Link href={projectLink} target="_blank" rel="noopener">
              <IconButton aria-label="project" className="project-icon" sx={{ color: '#ccd6f6'}}>
                <OpenInNewIcon />
              </IconButton>
            </Link>
          </div>
        </div>
      <Card className="project-card" sx={{ backgroundColor: '#0a192f'}}>
        <CardMedia
          component="img"
          height="400px"
          image={image}
          alt={alt}
          className="project-image"
        />
        
      </Card>

    </div>
    
    </>
  );
}
