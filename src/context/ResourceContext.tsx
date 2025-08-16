import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  dateAdded: string;
}

interface ResourceContextType {
  resources: Resource[];
  addResource: (resource: Omit<Resource, 'id' | 'dateAdded'>) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ResourceContext = createContext<ResourceContextType | undefined>(undefined);

const initialResources: Resource[] = [
  {
    id: '1',
    title: 'Complete DSA Interview Preparation',
    description: 'Comprehensive guide covering all data structures and algorithms topics with practice problems and solutions.',
    category: 'DSA',
    url: 'https://www.geeksforgeeks.org/data-structures/',
    tags: ['algorithms', 'data-structures', 'interview', 'coding'],
    dateAdded: '2024-01-15'
  },
  {
    id: '2',
    title: 'JavaScript Full Course',
    description: 'From basics to advanced JavaScript concepts including ES6+ features, async programming, and modern frameworks.',
    category: 'Programming',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    tags: ['javascript', 'web-development', 'programming'],
    dateAdded: '2024-01-14'
  },
  {
    id: '3',
    title: 'Arduino IoT Projects Guide',
    description: 'Step-by-step tutorials for building IoT projects with Arduino, sensors, and cloud connectivity.',
    category: 'IoT',
    url: 'https://www.arduino.cc/en/Tutorial/HomePage',
    tags: ['arduino', 'iot', 'embedded', 'sensors'],
    dateAdded: '2024-01-13'
  },
  {
    id: '4',
    title: 'Machine Learning Crash Course',
    description: 'Google\'s free ML course covering fundamentals, TensorFlow, and practical applications.',
    category: 'AI/ML',
    url: 'https://developers.google.com/machine-learning/crash-course',
    tags: ['machine-learning', 'tensorflow', 'python', 'ai'],
    dateAdded: '2024-01-12'
  },
  {
    id: '5',
    title: 'Quantitative Aptitude Guide',
    description: 'Complete aptitude preparation covering arithmetic, algebra, geometry, and data interpretation.',
    category: 'Aptitude',
    url: 'https://www.indiabix.com/aptitude/',
    tags: ['aptitude', 'mathematics', 'reasoning', 'placement'],
    dateAdded: '2024-01-11'
  },
  {
    id: '6',
    title: 'Operating Systems Notes',
    description: 'Comprehensive semester notes covering process management, memory allocation, and file systems.',
    category: 'Semester Notes',
    url: 'https://www.tutorialspoint.com/operating_system/',
    tags: ['os', 'notes', 'computer-science', 'semester'],
    dateAdded: '2024-01-10'
  },
  {
    id: '7',
    title: 'GATE CS Preparation Strategy',
    description: 'Complete roadmap and study materials for GATE Computer Science preparation.',
    category: 'Competitive Exams',
    url: 'https://gate.iisc.ac.in/',
    tags: ['gate', 'competitive-exam', 'computer-science'],
    dateAdded: '2024-01-09'
  },
  {
    id: '8',
    title: 'React.js Complete Documentation',
    description: 'Official React documentation with hooks, context API, and modern React patterns.',
    category: 'Programming',
    url: 'https://react.dev/',
    tags: ['react', 'javascript', 'frontend', 'web-development'],
    dateAdded: '2024-01-08'
  }
];

export function ResourceProvider({ children }: { children: ReactNode }) {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addResource = (resource: Omit<Resource, 'id' | 'dateAdded'>) => {
    const newResource: Resource = {
      ...resource,
      id: Date.now().toString(),
      dateAdded: new Date().toISOString().split('T')[0]
    };
    setResources(prev => [newResource, ...prev]);
  };

  return (
    <ResourceContext.Provider value={{
      resources,
      addResource,
      searchTerm,
      setSearchTerm,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </ResourceContext.Provider>
  );
}

export function useResources() {
  const context = useContext(ResourceContext);
  if (!context) {
    throw new Error('useResources must be used within a ResourceProvider');
  }
  return context;
}