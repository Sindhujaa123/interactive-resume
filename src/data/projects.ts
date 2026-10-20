export interface Project {
  name: string;
  kind: string;
  summary: string;
  contribution: string;
  tools: string[];
  evidence: string[];
  visual: 'rag' | 'risk' | 'nlp' | 'music';
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    name: 'MoodMix — Song Suggestion Engine',
    kind: 'Mood-based music recommendations',
    summary: 'An interactive app that suggests songs based on mood.',
    contribution: 'Built MoodMix as a Streamlit app for mood-based song suggestions.',
    tools: ['Streamlit'],
    evidence: ['Interactive song suggestion app'],
    visual: 'music',
    demoUrl: 'https://moodmix-song-suggestion-engine-sindhujaa.streamlit.app/',
  },
  {
    name: 'Smart Customer Support Assistant',
    kind: 'Retrieval-augmented generation',
    summary: 'A support assistant that retrieves from four business documents and generates responses grounded in those sources, without custom model training.',
    contribution: 'Integrated Microsoft Foundry Agent Service, File Search, GPT-5-mini, and the Python azure-ai-projects SDK. Designed prompts for source grounding, out-of-scope handling, hallucination prevention, and allergy-related safety.',
    tools: ['Python', 'Microsoft Foundry', 'GPT-5-mini', 'RAG', 'File Search'],
    evidence: ['4 business documents in the retrieval pipeline', '20 evaluation questions across 5 test categories'],
    visual: 'rag',
  },
  {
    name: 'Financial Risk Analytics Dashboard',
    kind: 'Financial data & interactive analytics',
    summary: 'A dashboard analyzing company risk across seven dimensions using SEC EDGAR data, Yahoo Finance data, and 10-K filings.',
    contribution: 'Built a configurable composite-risk model with percentile normalization, directional adjustments, and weighted aggregation. Developed company profiles, sector comparisons, risk heatmaps, exploratory charts, and downloadable CSV reports in Streamlit.',
    tools: ['Streamlit', 'SEC EDGAR', 'Yahoo Finance', '10-K filings', 'Risk modeling'],
    evidence: ['7 risk dimensions', 'Configurable weighted composite score'],
    visual: 'risk',
    demoUrl: 'https://financial-analysis-main-hjdy877v4ybejhjxa76vkv.streamlit.app/',
  },
  {
    name: 'AI-Based Resume Screening',
    kind: 'Natural language processing',
    summary: 'An NLP pipeline that processes approximately 2,400 resumes and categorizes candidates across 25 job categories.',
    contribution: 'Combined TF-IDF, K-means clustering, and LDA topic modeling with supervised Logistic Regression and Multilayer Perceptron classifiers.',
    tools: ['Python', 'TF-IDF', 'K-means', 'LDA', 'Logistic Regression', 'MLP'],
    evidence: ['64.7% Logistic Regression accuracy', '56.1% MLP accuracy'],
    visual: 'nlp',
  },
];
