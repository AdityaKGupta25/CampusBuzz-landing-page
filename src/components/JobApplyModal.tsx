import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Briefcase, MapPin, Building, Sparkles } from 'lucide-react';
import { FeedJobCard } from '../types';

interface JobApplyModalProps {
  job: FeedJobCard | null;
  onClose: () => void;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ job, onClose }) => {
  const [applied, setApplied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg">{job.companyName}</span>
                <ShieldCheck className="w-4 h-4 text-teal-400" />
              </div>
              <p className="text-xs text-slate-300 flex items-center gap-2">
                <span>{job.roleType}</span>
                <span>•</span>
                <span className="text-amber-300 font-semibold">{job.salaryRange}</span>
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-white mt-4 line-clamp-2">
            {job.roleTitle}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">
          {!applied ? (
            <div>
              <div className="space-y-3 mb-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span><strong>Location:</strong> {job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <span><strong>Eligibility:</strong> {job.eligibility}</span>
                </div>
                <p className="pt-2 text-slate-600 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mb-5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Required Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {job.skillsRequired.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200/80 mb-5 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p className="text-xs text-teal-900">
                  <strong>CampusBuzz Advantage:</strong> Your verified hackathon rankings, event participation, and project badges are attached automatically with your application.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Candidate Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Email / Campus ID
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="candidate@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-indigo-500 outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  Apply with Verified Activity Record
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-black text-slate-900">
                Application Submitted!
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                {job.companyName} recruiter team has received your application along with your verified activity badge.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Status: <strong className="text-indigo-600 font-bold">Under Review</strong> · Notification sent to {email || 'your email'}
              </div>
              <button
                onClick={onClose}
                className="mt-5 w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
