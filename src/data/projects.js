// ============================================================
// PROJECTS.JS
// Har project yahan add / edit karein. (Comments Roman Urdu mein,
// content English mein — kyunki site recruiters ke liye hai.)
//
// ⚠️ Jo number confirm nahi, usay "TODO: add" hi rehne dein —
//    site par wo "Not published" dikhata hai, jhoot nahi bolta.
// links.github / links.demo ko null rakhein to button hide ho jata hai.
// ============================================================

export const projectCategories = [
  'All',
  'Data Science',
  'Machine Learning',
  'AI',
  'Data Analytics',
]

export const projects = [
  {
    id: 'vehicle-damage',
    title: 'AI-Based Vehicle Damage Assessment',
    category: 'AI',
    featured: true,
    image: '/assets/projects/vehicle-damage.jpg',
    summary:
      'A computer vision system that detects vehicle damage from photographs, estimates severity, and supports repair decision-making.',
    tech: ['Python', 'YOLO', 'OpenCV', 'Machine Learning'],
    metrics: [
      { label: 'Accuracy', value: 'TODO: add' },
      { label: 'Dataset size', value: 'TODO: add' },
      { label: 'Damage classes', value: 'TODO: add' },
    ],
    links: { github: null, demo: null },
    detail: {
      problem:
        'Damage assessment in insurance and repair workflows is done by hand. It is slow, expensive, and two assessors looking at the same car often disagree — which delays claims and produces inconsistent estimates.',
      solution:
        'An object detection pipeline that localises damaged regions in an image, classifies the type of damage, and returns a severity score that can be used to prioritise repairs.',
      dataset: 'TODO: add the dataset source, number of images, and class breakdown.',
      preprocessing: [
        'Resized and normalised images to a fixed input resolution',
        'Augmentation: horizontal flip, rotation, brightness shift',
        'Split into training, validation, and test sets',
        'TODO: add the annotation format and labelling tool used',
      ],
      model:
        'A YOLO-based detector fine-tuned on damage regions, with a simple CNN classifier kept as a baseline for comparison.',
      training: 'TODO: add epochs, batch size, learning rate, and the hardware used.',
      evaluation:
        'Measured with precision, recall, and mAP. A confusion matrix shows which damage classes the model tends to mix up.',
      results: [
        'TODO: add the final metric value',
        'TODO: add the improvement over the baseline',
        'TODO: add the strongest and weakest class',
      ],
      challenges: [
        'Wide variation in lighting and camera angle across submitted photos',
        'Class imbalance — some damage types had far fewer examples',
        'Separating fine scratches from background reflections',
      ],
      future: [
        'Add a repair cost estimation module',
        'Deploy the model behind a small web interface',
        'Expand the dataset with more real-world images',
      ],
    },
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    featured: true,
    image: '/assets/projects/churn.jpg',
    summary:
      'A classification model that flags customers likely to leave, so a retention team can reach them before they go.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn'],
    metrics: [
      { label: 'Accuracy', value: 'TODO: add' },
      { label: 'Recall (churn)', value: 'TODO: add' },
      { label: 'Records', value: 'TODO: add' },
    ],
    links: { github: null, demo: null },
    detail: {
      problem:
        'Acquiring a new customer costs several times more than keeping an existing one, but the business only found out someone had left after they were gone.',
      solution:
        'A classifier trained on billing and behavioural features, paired with feature importance analysis so the team gets a reason alongside every prediction.',
      dataset: 'TODO: add the dataset source and size.',
      preprocessing: [
        'Handled missing values and removed leaking columns',
        'Encoded categorical features',
        'Scaled numeric features',
        'Addressed class imbalance in the churn label',
      ],
      model:
        'Logistic Regression as the baseline, then Random Forest and Gradient Boosting compared against it.',
      training: 'Hyperparameter tuning with stratified k-fold cross-validation.',
      evaluation:
        'Judged on recall and ROC-AUC rather than accuracy — the churn class is small, and missing a leaving customer costs more than a false alarm.',
      results: [
        'TODO: add the best model and its score',
        'TODO: add the top three churn drivers found',
      ],
      challenges: [
        'Accuracy looked strong but was misleading on imbalanced classes',
        'Two features leaked the outcome and had to be dropped',
      ],
      future: [
        'Add per-customer explanations with SHAP',
        'Connect the model output to a live dashboard',
      ],
    },
  },
  {
    id: 'sales-dashboard',
    title: 'Retail Sales Analysis & Dashboard',
    category: 'Data Analytics',
    featured: false,
    image: '/assets/projects/sales.jpg',
    summary:
      'An end-to-end analysis turning scattered transaction files into readable insights by region, product, and season.',
    tech: ['Python', 'Pandas', 'Power BI', 'SQL'],
    metrics: [
      { label: 'Records', value: 'TODO: add' },
      { label: 'Time span', value: 'TODO: add' },
      { label: 'Dashboard views', value: 'TODO: add' },
    ],
    links: { github: null, demo: null },
    detail: {
      problem:
        'Sales data lived across several files with inconsistent formatting, so answering even a simple question meant rebuilding a spreadsheet by hand.',
      solution:
        'A repeatable cleaning pipeline feeding an interactive dashboard that shows trends, top products, and regional performance in one place.',
      dataset: 'TODO: add the dataset source and size.',
      preprocessing: [
        'Removed duplicate and invalid transactions',
        'Standardised inconsistent date formats',
        'Merged product categories that had been entered under different names',
      ],
      model:
        'No predictive model — this project focuses on trend, seasonality, and segmentation analysis.',
      training: 'Not applicable for this project.',
      evaluation: 'Findings verified against manual spot checks and summary statistics.',
      results: [
        'TODO: add the strongest revenue driver identified',
        'TODO: add the seasonal pattern found',
      ],
      challenges: [
        'The same product appeared under several different names',
        'Missing region codes on a portion of rows',
      ],
      future: [
        'Add a sales forecasting model',
        'Automate the dashboard refresh',
      ],
    },
  },
  {
    id: 'eda-toolkit',
    title: 'Exploratory Data Analysis Toolkit',
    category: 'Data Science',
    featured: false,
    image: '/assets/projects/eda.jpg',
    summary:
      'A reusable notebook that profiles any new dataset — quality, distributions, correlations — in minutes instead of hours.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    metrics: [
      { label: 'Reusable functions', value: 'TODO: add' },
      { label: 'Datasets tested', value: 'TODO: add' },
      { label: 'Setup time', value: 'TODO: add' },
    ],
    links: { github: null, demo: null },
    detail: {
      problem:
        'Every new project started with the same manual steps — missing values, distributions, outliers, correlations — rewritten from scratch each time.',
      solution:
        'A modular notebook that generates a data profile, a standard plot set, and data-quality warnings from a single function call.',
      dataset: 'Tested against several public datasets of differing shape and size.',
      preprocessing: [
        'Automatic column type detection',
        'Missing-value summary per column',
        'Outlier flagging using the IQR method',
      ],
      model: 'Not applicable — this is analysis tooling rather than a model.',
      training: 'Not applicable for this project.',
      evaluation: 'Output verified by hand across datasets with known characteristics.',
      results: [
        'TODO: add how much setup time this saves',
        'TODO: add how many projects have used it',
      ],
      challenges: [
        'Every dataset has a different structure, so defaults had to be conservative',
        'Performance degraded on very large files',
      ],
      future: [
        'Package it as an installable Python module',
        'Add an exportable HTML report',
      ],
    },
  },
]
