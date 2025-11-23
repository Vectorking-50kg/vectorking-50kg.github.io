import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col p-5 bg-white dark:bg-[#202020] border border-notion-border dark:border-notion-darkBorder rounded-xl transition-all hover:shadow-lg dark:hover:bg-[#252525]">
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl select-none filter grayscale group-hover:grayscale-0 transition-all duration-300">
            {project.icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-notion-text dark:text-notion-darkText leading-tight">
              {project.title}
            </h3>
            <span className="text-xs text-notion-gray font-mono">
              {project.year}
            </span>
          </div>
        </div>
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-notion-gray hover:text-notion-text dark:hover:text-notion-darkText"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <p className="text-sm text-notion-text dark:text-notion-darkText/80 mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-[#2c2c2c] text-notion-text dark:text-notion-darkText/90 border border-transparent group-hover:border-notion-border dark:group-hover:border-notion-darkBorder transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;