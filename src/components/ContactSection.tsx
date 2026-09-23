import React, { useState, useEffect } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Speaking / Technical Inquiries');
  const [message, setMessage] = useState('');
  const [sentStatus, setSentStatus] = useState<'idle' | 'copied' | 'ready'>('idle');
  const [germanyTime, setGermanyTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setGermanyTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject + (name ? ` - from ${name}` : '')
    )}&body=${encodeURIComponent(
      `${message}\n\n---\nSender: ${name || 'Anonymous'}\nReply-To: ${senderEmail || 'Not provided'}`
    )}`;

    window.location.href = mailtoUrl;
    setSentStatus('ready');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info Left */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                Get In Touch
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                Let's Build Something Meaningful
              </h2>
              <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">
                Whether you're organizing an AI conference, discussing developer tooling for Gemini, or have questions regarding machine learning architectures, my inbox is open.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#fafafa] space-y-3">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 bg-white border border-slate-200 rounded-md transition-colors shrink-0 active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Time Widget */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#fafafa] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Globe className="w-4 h-4 text-slate-400" />
                <span>Germany (CET / Europe/Berlin)</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-slate-900 font-medium tabular-nums">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{germanyTime || '12:00:00'}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Social Profiles & Networks
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800"
                >
                  <span>LinkedIn · Patrick Loeber</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800"
                >
                  <span>GitHub · @patrickloeber</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800"
                >
                  <span>YouTube · @patloeber (Python Engineer)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={PERSONAL_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200/80 hover:border-slate-300 bg-white hover:bg-slate-50 transition-colors text-xs font-medium text-slate-800"
                >
                  <span>X / Twitter · @patloeber</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form Right */}
          <div className="lg:col-span-7">
            <div className="bg-[#fafafa] rounded-xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Compose your note directly below. Clicking send will open your default email client with all details formatted.
              </p>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">
                    Subject / Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-400 transition-colors"
                  >
                    <option value="Conference / Keynote Speaking">Conference / Keynote Speaking</option>
                    <option value="Google DeepMind / Gemini Developer Discussion">Google DeepMind / Gemini Developer Discussion</option>
                    <option value="Podcast / Interview Invitation">Podcast / Interview Invitation</option>
                    <option value="General Machine Learning Inquiry">General Machine Learning Inquiry</option>
                    <option value="Other Collaboration">Other Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Patrick, I'd like to talk to you about..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Direct dispatch to {PERSONAL_INFO.email}
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-2xs active:scale-[0.98]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>

                {sentStatus === 'ready' && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your mail client has been opened! If it didn't open automatically, you can email {PERSONAL_INFO.email} directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
