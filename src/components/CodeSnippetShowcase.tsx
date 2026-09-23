import React, { useState } from 'react';
import { Copy, Check, Terminal, Sparkles } from 'lucide-react';

interface CodeSnippet {
  id: string;
  title: string;
  badge: string;
  description: string;
  code: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: 'gemini',
    title: 'Gemini 2.5 Developer Quickstart',
    badge: 'Google DeepMind',
    description: 'Idiomatic Python workflow for multimodal structured reasoning with Gemini.',
    code: `from google import genai
from google.genai import types

# Initialize client with API key
client = genai.Client()

# Generate structured analysis from text & images
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain gradient descent step-by-step for a beginner.",
    config=types.GenerateContentConfig(
        temperature=0.2,
        system_instruction="You are a clear, patient machine learning teacher.",
    ),
)

print(response.text)`,
  },
  {
    id: 'pytorch',
    title: 'Idiomatic PyTorch Training Loop',
    badge: 'Python Engineer',
    description: 'The canonical 5-step PyTorch loop taught in Patrick\'s 6-hour masterclass.',
    code: `import torch
import torch.nn as nn

# 1. Model definition
model = nn.Sequential(
    nn.Linear(in_features=10, out_features=32),
    nn.ReLU(),
    nn.Linear(in_features=32, out_features=1)
)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

# 2. Canonical training cycle
for epoch in range(num_epochs):
    # Forward pass
    predictions = model(x_batch)
    loss = criterion(predictions, y_batch)

    # Backward pass & optimization
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()`,
  },
  {
    id: 'scratch',
    title: 'Linear Regression From Scratch',
    badge: 'ML from Scratch',
    description: 'Vectorized gradient descent in pure NumPy without black-box libraries.',
    code: `import numpy as np

class LinearRegression:
    def __init__(self, lr=0.01, n_iters=1000):
        self.lr = lr
        self.n_iters = n_iters
        self.weights = None
        self.bias = None

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0

        # Gradient descent optimization
        for _ in range(self.n_iters):
            y_predicted = np.dot(X, self.weights) + self.bias

            # Gradients calculation
            dw = (1 / n_samples) * np.dot(X.T, (y_predicted - y))
            db = (1 / n_samples) * np.sum(y_predicted - y)

            # Update parameters
            self.weights -= self.lr * dw
            self.bias -= self.lr * db`,
  },
];

export const CodeSnippetShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('gemini');
  const [copied, setCopied] = useState<boolean>(false);

  const currentSnippet = SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              Code Philosophy
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Clean, Intuitive Python Implementations
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {currentSnippet.description}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            {SNIPPETS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  activeTab === s.id
                    ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {s.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Code Container */}
        <div className="rounded-xl border border-slate-200 bg-slate-950 overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">
                {currentSnippet.title}.py
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
            <code>{currentSnippet.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
