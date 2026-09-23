import React, { useState } from 'react';
import { X, Copy, Check, Terminal } from 'lucide-react';

interface SnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SnippetModal: React.FC<SnippetModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const code = `# Gemini API + PyTorch Multi-Modal Pipeline Example
# Written in clean, idiomatic Python by Patrick Loeber

import torch
from google import genai
from google.genai import types

def run_vision_reasoning(image_path: str, query: str) -> str:
    """
    Combines local image preprocessing with Gemini 2.5 multimodal reasoning.
    """
    client = genai.Client()
    
    with open(image_path, "rb") as f:
        image_bytes = f.read()

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[
            types.Part.from_bytes(data=image_bytes, mime_type="image/jpeg"),
            query
        ],
        config=types.GenerateContentConfig(
            temperature=0.1,
            system_instruction="Analyze technical diagrams with mathematical precision."
        )
    )
    
    return response.text

if __name__ == "__main__":
    print("Patrick Loeber — Developer Relations @ Google DeepMind")`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl border border-slate-200 shadow-xl max-w-2xl w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">Python & AI Studio Workflow</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-600">
            A production-ready snippet demonstrating the modern <code className="font-mono text-slate-900">@google/genai</code> SDK with multimodal structured outputs.
          </p>

          <pre className="p-4 bg-slate-950 text-slate-200 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed max-h-72">
            <code>{code}</code>
          </pre>
        </div>

        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">Pure Python · Zero fluff</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-md transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied' : 'Copy Snippet'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
