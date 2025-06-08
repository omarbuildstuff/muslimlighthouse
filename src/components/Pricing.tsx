import React from 'react';
import { Check, BookOpen, Video, Users, MessageSquare, FileText, Calendar } from 'lucide-react';
const Pricing = () => {
  const features = [
    {
      icon: FileText,
      text: "Scholarly syllabus course (with recordings)"
    },
    {
      icon: Video,
      text: "Live interactive weekly lessons"
    },
    {
      icon: Users,
      text: "Private Community of 200+ Students"
    },
    {
      icon: MessageSquare,
      text: "Access to Rhyad and qualified teachers"
    },
    {
      icon: Calendar,
      text: "Yearly in-person meetups"
    }
  ];
  return <section id="pricing" className="section-padding bg-lighthouse-50/50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center md:items-start w-full max-w-5xl mx-auto">
        {/* Standard Subscription Card */}
        <div className="glass-card bg-white border border-gray-200 shadow-lg overflow-hidden w-full md:w-1/2">
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 py-8 px-6 text-white text-center relative">
          <span className="top-4 left-1/2 -translate-x-1/2 bg-gray-200 text-navy-700 px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
              Core Access
            </span>
            <h3 className="text-3xl font-bold mt-4 mb-2 flex items-center justify-center gap-2">
              Standard Subscription
            </h3>
            <p className="opacity-90 mb-4 text-lg">Access to foundational knowledge at your own pace, from your own home.</p>
            <div className="flex justify-center items-baseline mb-2">
              <span className="text-5xl font-bold">$10</span>
              <span className="text-lg opacity-80 ml-1">/month</span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <span className="text-navy-700">Full access to <strong>100+ hours</strong> of structured Islamic course recordings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🕋</span>
                <span className="text-navy-700">Learn from <strong>authentic scholarly books</strong> following the Mauritanian tradition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">♻️</span>
                <span className="text-navy-700">New content added every single week — stay connected to a growing library of sacred knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <span className="text-navy-700">Study at your own pace, on your own schedule</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🛠️</span>
                <span className="text-navy-700">Great for independent learners who want a reliable syllabus without community features</span>
              </li>
            </ul>
            <div className="bg-navy-50 rounded-xl p-6 mb-8">
              <p className="text-navy-700 text-base text-center">
                👉 <strong>Upgrade anytime</strong> to access the teacher, community, and live sessions.
              </p>
            </div>
            <a href="https://www.muslimlighthouse.app/checkout/standard-membership" className="cta-button w-full flex justify-center text-lg bg-navy-500 hover:bg-navy-600 text-white">
            Join Now
            </a>
            <p className="text-center text-navy-400 mt-4 text-sm">
              Cancel anytime. No long-term commitment required.
            </p>
          </div>
        </div>
        {/* Premium Subscription Card */}
        <div className="glass-card overflow-hidden w-full md:w-1/2">
          <div className="bg-gradient-to-r from-lighthouse-600 to-lighthouse-500 py-8 px-6 text-white text-center relative">
            <span className="top-4 left-1/2 -translate-x-1/2 bg-lighthouse-200 text-navy-700 px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
              Most Popular
            </span>
            <h3 className="text-3xl font-bold mt-4 mb-2 flex items-center justify-center gap-2">
              Premium Subscription
            </h3>
            <p className="opacity-90 mb-4 text-lg">Your all-in-one path to deep Islamic knowledge, mentorship & community.</p>
            <div className="flex justify-center items-baseline mb-2">
              <span className="text-5xl font-bold">$37</span>
              <span className="text-xl opacity-80 ml-1">/month</span>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3">
                 <span className="text-navy-700">Everything in Standard – <strong>PLUS:</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">👨‍🏫</span>
                <span className="text-navy-700"><strong>Direct access to your teacher</strong> for questions, mentorship & guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <span className="text-navy-700"><strong>Live weekly sessions</strong> to interact, ask, and grow in real-time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <span className="text-navy-700"><strong>Brothers-only & sisters-only weekly sessions</strong> – safe, supportive spaces to share doubts, ask personal questions, and connect deeply with others on the same path</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌐</span>
                <span className="text-navy-700"><strong>Private community of 200+ committed students</strong> – study, grow & connect together</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <span className="text-navy-700"><strong>Build real friendships</strong> with like-hearted Muslims from around the world</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <span className="text-navy-700">Weekly interactive events: <strong>Tazkiyah Tuesdays</strong>, <strong>Fiqh Fridays</strong>, <strong>Qiyam Saturdays</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🕌</span>
                <span className="text-navy-700"><strong>Annual in-person meetups</strong> to strengthen bonds & recharge your imān</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <span className="text-navy-700">Perfect for those serious about transforming their life through sacred knowledge</span>
              </li>
            </ul>
            <div className="bg-lighthouse-50 rounded-xl p-6 mb-8">
              <p className="text-navy-700 text-base text-center">
                👉 <strong>If you’re ready to commit to growth</strong>, the Premium plan is where hearts awaken.
              </p>
            </div>
            <a id="join-now" href="https://www.muslimlighthouse.app/checkout/premium-membership" className="cta-button w-full flex justify-center text-lg">
              Join Now
            </a>
            <p className="text-center text-navy-400 mt-4 text-sm">
              Cancel anytime. No long-term commitment required.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default Pricing;