import React, { useState } from 'react';
import { X, Send, Copy, Check, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Inquiry from ${name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `${message}\n\n---\nFrom: ${name || 'Anonymous'}\nContact: ${email || 'Not provided'}`
    )}`;

    window.location.href = mailto;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl border border-slate-200 shadow-xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">Get in Touch</h3>
            <p className="text-xs text-slate-500">Send an inquiry to Patrick Loeber</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSend} className="p-6 space-y-4">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
            <span className="font-mono text-slate-700">{PERSONAL_INFO.email}</span>
            <button
              type="button"
              onClick={handleCopy}
              className="text-blue-600 hover:underline inline-flex items-center gap-1 font-medium"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700">Your Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700">Your Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-700">Message</label>
            <textarea
              rows={4}
              required
              placeholder="Hi Patrick, let's discuss..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-md text-slate-900 focus:outline-none focus:border-slate-400 resize-y"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Note</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
