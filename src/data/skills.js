// ============================================================
// SKILLS.JS
// level: 'core'     -> rozana use karti hain
//        'working'  -> project mein use kiya hai
//        'learning' -> abhi seekh rahi hain
// Jo technology aap nahi jaantin usay 'learning' rakhein ya
// line delete kar dein. Jhooti expertise site ki credibility
// khatam kar deti hai — interview mein pakri jati hai.
// ============================================================

export const skillGroups = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    blurb: 'The languages behind every analysis and model.',
    items: [
      { name: 'Python', note: 'Analysis, modelling, automation', level: 'core' },
      { name: 'SQL', note: 'Querying, joins, aggregation', level: 'core' },
    ],
  },
  {
    id: 'analysis',
    title: 'Data Analysis',
    icon: 'Table2',
    blurb: 'Turning messy raw files into analysis-ready data.',
    items: [
      { name: 'Pandas', note: 'Cleaning, merging, feature engineering', level: 'core' },
      { name: 'NumPy', note: 'Numerical computing and arrays', level: 'core' },
      { name: 'Matplotlib', note: 'Custom statistical plots', level: 'working' },
      { name: 'Seaborn', note: 'Distributions and correlation analysis', level: 'working' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: 'BrainCircuit',
    blurb: 'Supervised and unsupervised models, evaluated honestly.',
    items: [
      { name: 'Scikit-learn', note: 'End-to-end ML pipelines', level: 'core' },
      { name: 'Regression', note: 'Linear, ridge, lasso', level: 'working' },
      { name: 'Classification', note: 'Trees, ensembles, logistic', level: 'working' },
      { name: 'Clustering', note: 'K-means, hierarchical', level: 'working' },
      { name: 'Model Evaluation', note: 'Cross-validation, ROC, F1', level: 'working' },
    ],
  },
  {
    id: 'viz',
    title: 'Visualisation & BI',
    icon: 'BarChart3',
    blurb: 'Presenting findings so non-technical readers can act on them.',
    items: [
      { name: 'Power BI', note: 'Dashboards and DAX basics', level: 'learning' },
      { name: 'Matplotlib', note: 'Publication-quality figures', level: 'working' },
      { name: 'Seaborn', note: 'Exploratory visual analysis', level: 'working' },
    ],
  },
  {
    id: 'dl',
    title: 'AI & Deep Learning',
    icon: 'Sparkles',
    blurb: 'Neural networks and computer vision, actively in progress.',
    items: [
      { name: 'TensorFlow', note: 'Neural network fundamentals', level: 'learning' },
      { name: 'PyTorch', note: 'Model training experiments', level: 'learning' },
      { name: 'OpenCV', note: 'Image processing', level: 'working' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: 'Wrench',
    blurb: 'Keeping work reproducible and version-controlled.',
    items: [
      { name: 'Jupyter Notebook', note: 'Exploration and reporting', level: 'core' },
      { name: 'Google Colab', note: 'GPU-backed training', level: 'core' },
      { name: 'Git', note: 'Version control', level: 'working' },
      { name: 'GitHub', note: 'Collaboration and portfolio', level: 'working' },
    ],
  },
]

export const levelMeta = {
  core: { label: 'Core', hint: 'Used regularly' },
  working: { label: 'Working', hint: 'Applied in projects' },
  learning: { label: 'Learning', hint: 'Currently building depth' },
}
