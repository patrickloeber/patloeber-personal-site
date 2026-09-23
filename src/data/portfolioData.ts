export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ml' | 'tools' | 'education' | 'reinforcement-learning';
  description: string;
  detailedDescription: string;
  githubUrl: string;
  stars?: string;
  forks?: string;
  technologies: string[];
  highlights: string[];
  sampleSnippet?: {
    language: string;
    code: string;
  };
}

export interface ContentItem {
  id: string;
  title: string;
  type: 'Course' | 'Video Series' | 'Workshop' | 'Article';
  platform: string;
  durationOrViews: string;
  year: string;
  description: string;
  url: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization: string;
  thesisTitle?: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Patrick Loeber',
  title: 'Machine Learning Engineer & Developer Advocate',
  currentRole: 'Member of Technical Staff & Developer Relations Engineer',
  company: 'Google DeepMind',
  location: 'Germany (CET)',
  email: 'pythonengineerman@gmail.com',
  bio: 'Member of Technical Staff at Google DeepMind, focusing on developer experience for the Gemini API, Google AI Studio, and Gemma. Creator of Python Engineer, author of comprehensive machine learning courses, and passionate open-source contributor.',
  longBio: 'With a background in Medical Engineering and Computer Vision from FAU Erlangen-Nuremberg, Patrick has spent over a decade building software and machine learning systems. He has created some of the web\'s most widely used tutorials on PyTorch and ML fundamentals, reaching over 200,000 developers on YouTube. At Google DeepMind, he works to make frontier AI models accessible, intuitive, and reliable for developers building next-generation applications.',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/patrick-l%C3%B6ber-403022137/',
    github: 'https://github.com/patrickloeber',
    youtube: 'https://www.youtube.com/@patloeber',
    twitter: 'https://twitter.com/patloeber',
    website: 'https://patloeber.com',
    pythonEngineer: 'https://python-engineer.com',
  },
  metrics: [
    { label: 'YouTube Subscribers', value: '220K+', context: 'Tech & ML educators' },
    { label: 'Video Views', value: '16M+', context: 'PyTorch, ML & Python' },
    { label: 'GitHub Stars', value: '8,500+', context: 'Across open-source repos' },
    { label: 'Years in ML & Dev', value: '10+', context: 'From research to production' },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'deepmind',
    role: 'Member of Technical Staff & Developer Relations Engineer',
    organization: 'Google DeepMind',
    location: 'Remote · Germany / UK',
    period: 'Feb 2025 – Present',
    current: true,
    description: 'Empowering global developers to build real-world AI applications using frontier models, Google AI Studio, and the Gemini API.',
    highlights: [
      'Spearheading developer experience, SDK tooling, and reference architectures for Gemini API and Gemma models.',
      'Authoring production-grade guides, developer documentation, and workshops for AI engineers.',
      'Bridging research teams and community developers to streamline multimodal, agentic, and code generation workflows.',
    ],
    technologies: ['Gemini API', 'Google AI Studio', 'Gemma', 'Python SDK', 'TypeScript', 'LLM Agents'],
    link: 'https://deepmind.google',
  },
  {
    id: 'assemblyai',
    role: 'Developer Advocate & Lead Python SDK Maintainer',
    organization: 'AssemblyAI',
    location: 'Remote',
    period: 'Feb 2022 – Jan 2025',
    description: 'Led technical developer advocacy and maintainer of the official Python SDK for cutting-edge Speech AI and Audio Intelligence.',
    highlights: [
      'Designed and engineered the official AssemblyAI Python SDK from the ground up, driving tens of thousands of weekly downloads.',
      'Created end-to-end open-source applications, tutorials, and video breakdowns for speech-to-text, speaker diarization, and audio LLMs (LeMUR).',
      'Hosted technical workshops, webinars, and live demos for developers building voice-enabled applications.',
    ],
    technologies: ['Python SDK', 'Speech-to-Text', 'Asyncio', 'FastAPI', 'Audio LLMs', 'Streaming WebSockets'],
    link: 'https://www.assemblyai.com',
  },
  {
    id: 'python-engineer',
    role: 'Founder & AI Content Creator',
    organization: 'Python Engineer',
    location: 'Germany',
    period: 'Jan 2020 – Present',
    current: true,
    description: 'Built a top-tier educational brand helping over 200,000 developers master Python, PyTorch, and Machine Learning algorithms.',
    highlights: [
      'Created the acclaimed 6-hour "PyTorch Full Course - Beginner to Pro" with freeCodeCamp, viewed over 2.5 million times.',
      'Authored the complete "Machine Learning from Scratch in Python" curriculum, implementing 15+ foundational algorithms using pure NumPy.',
      'Produced step-by-step reinforcement learning projects including Deep Q-Learning for autonomous Snake gameplay.',
    ],
    technologies: ['PyTorch', 'NumPy', 'Reinforcement Learning', 'Computer Vision', 'Deep Q-Networks', 'Scikit-learn'],
    link: 'https://python-engineer.com',
  },
  {
    id: 'fau-research',
    role: 'Graduate Researcher & Software Engineer',
    organization: 'Pattern Recognition Lab, FAU Erlangen-Nuremberg',
    location: 'Erlangen, Germany',
    period: '2018 – 2021',
    description: 'Researched deep learning and computer vision techniques for automated medical diagnosis in stroke patients.',
    highlights: [
      'Engineered 3D deep convolutional neural networks for automated detection and segmentation of vascular occlusions in ischemic stroke CT angiography scans.',
      'Collaborated closely with clinical radiologists to build reproducible data preprocessing pipelines for volumetric medical imaging.',
    ],
    technologies: ['Deep Learning', 'Computer Vision', '3D CNNs', 'Medical Imaging (DICOM/NIfTI)', 'Python', 'PyTorch'],
    link: 'https://www.fau.eu',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ml-study-plan',
    title: 'The Ultimate Free Machine Learning Study Plan',
    category: 'education',
    description: 'Comprehensive, structured roadmap taking developers from math & Python fundamentals to advanced Deep Learning.',
    detailedDescription: 'A widely celebrated community study plan that curates free, high-quality textbooks, courses, and hands-on projects into an actionable curriculum. Designed for self-taught engineers wanting rigorous foundational understanding.',
    githubUrl: 'https://github.com/patrickloeber/ml-study-plan',
    stars: '3,200+',
    forks: '420+',
    technologies: ['Machine Learning', 'Deep Learning', 'Math Foundations', 'Curriculum Design'],
    highlights: [
      'Curated linear algebra, calculus, and probability guides',
      'Step-by-step progression through Classical ML, PyTorch, and Transformers',
      'Weekly milestones and recommended capstone projects',
    ],
  },
  {
    id: 'pytorch-tutorial',
    title: 'PyTorch Tutorial Masterclass',
    category: 'ml',
    description: 'End-to-end practical PyTorch repository covering everything from Tensor operations to transfer learning and production deployment.',
    detailedDescription: 'Accompanying code repository for the acclaimed video series. Includes clean, self-contained Python scripts for custom loss functions, backpropagation, CNNs for image classification, RNNs, and model serving.',
    githubUrl: 'https://github.com/patrickloeber/pytorchTutorial',
    stars: '2,000+',
    forks: '1,200+',
    technologies: ['PyTorch', 'CNNs', 'RNNs', 'Transfer Learning', 'TorchScript'],
    highlights: [
      'Self-contained executable scripts for each concept',
      'Clean idiomatic PyTorch training loops with CUDA support',
      'Comprehensive coverage of DataLoader, Dataset, and Batch Training',
    ],
    sampleSnippet: {
      language: 'python',
      code: `# Standard PyTorch Linear Regression Model by Patrick Loeber
import torch
import torch.nn as nn

# 1) Design model (input, output size, forward pass)
class LinearRegression(nn.Module):
    def __init__(self, input_dim, output_dim):
        super(LinearRegression, self).__init__()
        self.lin = nn.Linear(input_dim, output_dim)

    def forward(self, x):
        return self.lin(x)

model = LinearRegression(input_dim=1, output_dim=1)
criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)

# Training loop: Loss -> Backward -> Step -> Zero Grad
for epoch in range(100):
    # Forward pass and loss calculation
    y_pred = model(X_train)
    loss = criterion(y_pred, y_train)

    # Backward pass & weight optimization
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()`
    },
  },
  {
    id: 'ml-from-scratch',
    title: 'Machine Learning From Scratch',
    category: 'ml',
    description: 'Implementations of foundational machine learning algorithms using only pure Python and NumPy with zero black-box dependencies.',
    detailedDescription: 'An educational gold standard: demonstrates the mathematical intuition behind Linear Regression, Logistic Regression, Decision Trees, Random Forests, KNN, SVM, Naive Bayes, PCA, and Perceptron by coding every formula from scratch.',
    githubUrl: 'https://github.com/patrickloeber/MLfromscratch',
    stars: '1,600+',
    forks: '570+',
    technologies: ['Python', 'NumPy', 'Mathematical Algorithms', 'Optimization'],
    highlights: [
      'Clean OOP design mimicking the Scikit-learn fit/predict API',
      'Explicit vectorization and gradient descent formulations',
      'Intuitive code structure with inline mathematical proofs',
    ],
    sampleSnippet: {
      language: 'python',
      code: `# KNN Classifier implemented from scratch in pure NumPy
import numpy as np
from collections import Counter

def euclidean_distance(x1, x2):
    return np.sqrt(np.sum((x1 - x2) ** 2))

class KNN:
    def __init__(self, k=3):
        self.k = k

    def fit(self, X, y):
        self.X_train = X
        self.y_train = y

    def predict(self, X):
        return np.array([self._predict(x) for x in X])

    def _predict(self, x):
        # Compute distances between x and all samples in the training set
        distances = [euclidean_distance(x, x_train) for x_train in self.X_train]
        # Sort by distance and return indices of the first k neighbors
        k_indices = np.argsort(distances)[:self.k]
        # Extract the labels of the k nearest neighbor training samples
        k_nearest_labels = [self.y_train[i] for i in k_indices]
        # Return the most common class label
        most_common = Counter(k_nearest_labels).most_common(1)
        return most_common[0][0]`
    },
  },
  {
    id: 'snake-ai',
    title: 'Deep Q-Learning Snake AI',
    category: 'reinforcement-learning',
    description: 'Reinforcement learning agent that learns to master the classic Snake game autonomously using PyTorch and Pygame.',
    detailedDescription: 'A complete Deep Q-Network (DQN) implementation with experience replay, Bellman equation updates, and an interactive graphical environment built in Pygame.',
    githubUrl: 'https://github.com/patrickloeber/snake-ai-pytorch',
    stars: '750+',
    forks: '450+',
    technologies: ['Reinforcement Learning', 'Deep Q-Networks', 'Pygame', 'PyTorch'],
    highlights: [
      'Interactive Pygame visualization showing real-time agent training',
      'State-space representation (11 boolean danger & direction indicators)',
      'Exploration vs. exploitation epsilon-greedy decay strategy',
    ],
  },
  {
    id: 'assemblyai-sdk',
    title: 'AssemblyAI Official Python SDK',
    category: 'tools',
    description: 'Modern, idiomatic Python client for Speech AI, Real-time Audio Transcription, and LLM-powered Audio Intelligence.',
    detailedDescription: 'Official SDK built and maintained during Patrick\'s tenure at AssemblyAI. Features synchronous and asynchronous clients, robust streaming over WebSockets, Pydantic type safety, and seamless file upload handlers.',
    githubUrl: 'https://github.com/AssemblyAI/assemblyai-python-sdk',
    stars: '400+',
    forks: '120+',
    technologies: ['Python SDK', 'WebSockets', 'Pydantic', 'Asyncio', 'Speech AI'],
    highlights: [
      'Async and sync execution support for audio pipeline automation',
      'High-throughput real-time streaming audio transcription',
      'Typed responses for LeMUR (Audio LLM) question-answering and summaries',
    ],
  },
  {
    id: 'python-notebooks',
    title: 'Python Engineer Jupyter Notebooks',
    category: 'education',
    description: 'Extensive repository of interactive notebooks covering Python tricks, OOP design patterns, data science, and ML workflows.',
    detailedDescription: 'Companion notebooks for Patrick\'s blog and YouTube tutorials. Formatted with step-by-step commentary, visual plots, and benchmarks for Python developers leveling up their engineering practices.',
    githubUrl: 'https://github.com/patrickloeber/python-engineer-notebooks',
    stars: '800+',
    forks: '550+',
    technologies: ['Jupyter Notebooks', 'Pythonic Idioms', 'Data Structures', 'NumPy'],
    highlights: [
      'Clear explanations of decorators, generators, and context managers',
      'Practical benchmarks comparing algorithmic implementations',
      'Zero-setup executable notebooks ready for Google Colab and JupyterLab',
    ],
  },
];

export const CONTENTS: ContentItem[] = [
  {
    id: 'pytorch-fcc',
    title: 'PyTorch for Beginners: Full Course',
    type: 'Course',
    platform: 'freeCodeCamp & YouTube',
    durationOrViews: '6+ Hours · 2.5M+ Views',
    year: '2021',
    description: 'A comprehensive, end-to-end masterclass taking developers from basic tensor mathematics to convolutional networks and production deployment.',
    url: 'https://www.youtube.com/watch?v=EMXfZB8FVUA',
    tags: ['PyTorch', 'Deep Learning', 'Neural Networks', 'CNNs'],
  },
  {
    id: 'ml-from-scratch-playlist',
    title: 'Machine Learning from Scratch in Python',
    type: 'Video Series',
    platform: 'YouTube (Python Engineer)',
    durationOrViews: '18 Episodes · 1.8M+ Views',
    year: '2020 – 2022',
    description: 'Step-by-step videos dissecting the math and code behind Linear Regression, Logistic Regression, Decision Trees, KNN, SVM, and Naive Bayes.',
    url: 'https://www.youtube.com/playlist?list=PLqnslRFeH2Upcryr3ZdSVHSDPA745Hewd',
    tags: ['Algorithms', 'NumPy', 'Pure Python', 'Math Intuition'],
  },
  {
    id: 'snake-ai-series',
    title: 'Teach AI to Play Snake! (Reinforcement Learning)',
    type: 'Video Series',
    platform: 'YouTube (Python Engineer)',
    durationOrViews: '2 Parts · 850K+ Views',
    year: '2021',
    description: 'Hands-on guide demonstrating how to build a Deep Q-Learning agent with PyTorch and Pygame to play Snake from scratch.',
    url: 'https://www.youtube.com/watch?v=L8ypSXwyBds',
    tags: ['Reinforcement Learning', 'DQN', 'Pygame', 'PyTorch'],
  },
  {
    id: 'gemini-deepmind-talks',
    title: 'Building Production AI Applications with Gemini & AI Studio',
    type: 'Workshop',
    platform: 'Google DeepMind & AI Conferences',
    durationOrViews: 'Keynote & Developer Sessions',
    year: '2025',
    description: 'Technical deep-dives on multimodal reasoning, structured outputs, function calling, and building developer-first agentic workflows.',
    url: 'https://deepmind.google/technologies/gemini/',
    tags: ['Gemini API', 'AI Studio', 'Multimodal', 'DevRel'],
  },
  {
    id: 'speech-ai-workshops',
    title: 'Next-Generation Speech-to-Text & Audio LLM Architectures',
    type: 'Workshop',
    platform: 'AssemblyAI Tech Talks & AI Engineer Summit',
    durationOrViews: 'Technical Presentations',
    year: '2023 – 2024',
    description: 'Practical architectural breakdowns on building resilient streaming audio ingestion pipelines and extracting actionable intelligence from spoken data.',
    url: 'https://www.assemblyai.com/blog',
    tags: ['Speech AI', 'WebSockets', 'Audio LLMs', 'SDK Design'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'M.Sc. in Medical Engineering (Computer Science Specialization)',
    institution: 'Friedrich-Alexander University Erlangen-Nuremberg (FAU)',
    location: 'Erlangen, Germany',
    period: '2018 – 2021',
    specialization: 'Software Engineering, Computer Vision & Machine Learning',
    thesisTitle: 'Deep Learning for Automated Detection of Vascular Occlusions in Ischemic Stroke Patients',
    description: 'Focused on advanced statistical learning, 3D medical image segmentation, pattern recognition, and robust software engineering practices for clinical healthcare technology.',
  },
  {
    degree: 'B.Sc. in Medical Engineering',
    institution: 'Friedrich-Alexander University Erlangen-Nuremberg (FAU)',
    location: 'Erlangen, Germany',
    period: '2014 – 2018',
    specialization: 'Medical Image Processing, Signal Processing & Mathematics',
    description: 'Rigorous foundation in mathematics, digital signal processing, algorithms, computer programming in C/C++ and Python, and biomedical systems engineering.',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'What is your current focus at Google DeepMind?',
    a: 'I am a Member of Technical Staff and Developer Relations Engineer at Google DeepMind. My mission is to make developer experience with our frontier models—including the Gemini API, Google AI Studio, and Gemma—as seamless, intuitive, and high-impact as possible through SDK improvements, real-world blueprints, and developer education.',
  },
  {
    q: 'Are you still creating content for Python Engineer?',
    a: 'Yes! Python Engineer remains a lifelong passion project. While my primary full-time focus is with Google DeepMind, I continue to maintain my open-source repositories, publish occasional deep dives, and support the community of over 200,000 developers who follow the channel.',
  },
  {
    q: 'Can you speak at our conference, podcast, or developer meetup?',
    a: 'I regularly give keynote presentations, technical workshops, and podcast interviews on Machine Learning, developer tooling, LLMs, and Python engineering. Please reach out via email or LinkedIn with event details, dates, and topics.',
  },
  {
    q: 'What advice do you give developers starting out in Machine Learning today?',
    a: 'Build intuition from first principles. Don\'t just import a library and call .fit()—take the time to implement algorithms from scratch once (like Linear Regression, KNN, or backpropagation) to really understand what gradients and loss functions are doing under the hood. Then transition to frameworks like PyTorch and modern LLM APIs.',
  },
];
