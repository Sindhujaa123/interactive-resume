export interface SkillGroup {
  category: string;
  skills: string[];
}

export const profile = {
  fullName: 'Sindhujaa Reddy Vadde',
  email: 'sindhujaa.vadde@gmail.com',
  githubUrl: 'https://github.com/Sindhujaa123',
  linkedinUrl: null as string | null,
  resumeUrl: '/resume.pdf',
  introduction:
    'Computer science and business analytics professional building practical applications with Python, SQL, data analysis, and applied AI.',
};

export const skillGroups: SkillGroup[] = [
  { category: 'Programming & libraries', skills: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib', 'SQL', 'TypeScript', 'Java', 'C', 'HTML/CSS'] },
  { category: 'Analytics & BI', skills: ['Power BI', 'Tableau', 'Data mining', 'Root-cause analysis', 'Database management'] },
  { category: 'AI & machine learning', skills: ['Amazon SageMaker', 'Amazon Bedrock', 'Predictive modeling', 'NLP', 'Data pipelines', 'AI frameworks'] },
  { category: 'Tools', skills: ['Docker', 'AWS Lambda', 'GitHub Actions', 'Claude Code', 'Kiro', 'Antigravity'] },
];
