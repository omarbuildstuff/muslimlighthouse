import React, { useState } from "react";


import { ChevronDown, BookOpen, Heart, Users, CheckCircle, Lock } from "lucide-react";




function Dropdown({ label, items, open, setOpen, otherOpen, setOtherOpen, selected, setSelected }: {
  label: string;
  items: { title: string; main: string; sub: string; image: string; imageAlt: string; locked?: boolean }[];
  open: boolean;
  setOpen: (v: boolean) => void;
  otherOpen: boolean;
  setOtherOpen: (v: boolean) => void;
  selected: any;
  setSelected: (v: any) => void;
}) {
  // When opening, close the other dropdown
  const handleClick = () => {
    if (!open) {
      setOpen(true);
      setOtherOpen(false);
    } else {
      setOpen(false);
    }
  };
  const handleSelect = (item: any) => {
    setSelected(item);
    setOpen(false);
  };
  return (
    <div className="w-full md:max-w-lg mx-auto relative">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-lighthouse-100 rounded-xl shadow text-base font-medium text-navy-900 hover:bg-lighthouse-50 transition focus:outline-none focus:ring-2 focus:ring-lighthouse-200"
        onClick={handleClick}
        aria-expanded={open}
        aria-controls={label.replace(/\s/g, "-").toLowerCase()}
      >
        {selected ? (
          <span className="truncate font-semibold text-lighthouse-700">{selected.title}</span>
        ) : (
          label
        )}
        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      {open && (
        <div
          id={label.replace(/\s/g, "-").toLowerCase()}
          className="absolute left-0 right-0 mx-auto z-[1000] mt-2 bg-white border border-lighthouse-100 rounded-xl shadow-lg p-0 w-full max-w-2xl max-h-60 overflow-y-auto animate-fade-in"
          style={{left: 0, right: 0}}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`px-5 py-4 flex items-start gap-4 hover:bg-lighthouse-50 transition cursor-pointer relative ${item.locked ? 'opacity-50 pointer-events-none' : ''} ${i !== items.length - 1 ? 'border-b border-lighthouse-100' : ''} ${selected && selected.title === item.title ? 'bg-lighthouse-50 ring-2 ring-lighthouse-300' : ''}`}
              onClick={() => !item.locked && handleSelect(item)}
            >
              {item.locked && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 z-10 rounded-xl">
                  <div className="text-center">
                    <Lock className="w-8 h-8 text-navy-800 mx-auto mb-2" />
                    <span className="text-navy-800 font-semibold text-lg">Releasing Soon</span>
                  </div>
                </div>
              )}
              <img src={item.image} alt={item.imageAlt} className="w-14 h-14 rounded-lg object-cover flex-shrink-0 mt-0.5" loading="lazy" />
              <div className="flex-1 min-w-0 text-left">
                <div className="font-semibold text-lighthouse-700 text-base md:text-lg mb-1 truncate flex items-center">
                  {item.title}
                  {selected && selected.title === item.title && <CheckCircle className="w-5 h-5 text-lighthouse-500 ml-2" />}
                </div>
                <div className="text-navy-800 text-sm md:text-base mb-1 leading-snug">{item.main}</div>
                <div className="text-navy-600 text-xs md:text-sm">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Selected summary block */}
      {selected && (
        <div className="mt-4 w-full animate-fade-in">
          <div className="flex gap-4 items-center bg-white border-2 border-lighthouse-200/70 rounded-2xl shadow-lg px-5 py-4">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/80 border border-lighthouse-100 shadow-sm mr-2">
              <img src={selected.image} alt={selected.imageAlt} className="w-10 h-10 rounded-lg object-cover" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-base md:text-lg text-lighthouse-700 drop-shadow-sm">{selected.title}</span>
                <CheckCircle className="w-5 h-5 text-lighthouse-500 animate-pop-in" />
              </div>
              <div className="text-navy-800 text-sm md:text-base leading-snug font-medium mb-0.5">{selected.main}</div>
              <div className="text-navy-600 text-xs md:text-sm italic">{selected.sub}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface TopicsHabitsDropdownProps {
  only?: 'topic' | 'habit';
}

const TopicsHabitsDropdown: React.FC<TopicsHabitsDropdownProps> = ({ only }) => {
  const [topicOpen, setTopicOpen] = useState(false);
  const [habitOpen, setHabitOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [selectedHabit, setSelectedHabit] = useState<any>(null);

  const topics = [
    {
      title: "Fiqh",
      main: "Learn how to worship and live according to Allah’s guidance in your actions — from wudu to business deals.",
      sub: "Clarity in every action. Confidence in every prayer.",
      image: "/images/fiqh-bg.jpg",
      imageAlt: "Fiqh",
    },
    {
      title: "Tafsir",
      main: "Go beyond reading — understand what Allah ﷻ is really saying in His Book.",
      sub: "Discover meanings, context, and the beauty of divine speech.",
      image: "/images/tafsir-bg.jpg",
      imageAlt: "Tafsir",
    },
    {
      title: "Tazkiyah",
      main: "Cleanse your heart from diseases like envy, arrogance, and heedlessness.",
      sub: "Draw closer to Allah. Become the person He loves.",
      image: "/images/tazkiyah-bg.jpg",
      imageAlt: "Tazkiyah",
    },
    {
      title: "Hadith Sciences",
      main: "Discover how scholars preserved the Prophet’s ﷺ words — and learn which hadiths are authentic.",
      sub: "Build confidence in the Sunnah. Know what to trust.",
      image: "/images/hadith-sciences-bg.jpg",
      imageAlt: "Hadith Sciences",
    },
    {
      title: "Tajweed",
      main: "Learn the science of Quran recitation and its rules.",
      sub: "Improve your Quran recitation and understanding of Quranic recitation.",
      image: "/images/tajweed-bg.jpg",
      imageAlt: "Tajweed",
      locked: true,
    },
    {
      title: "Seerah",
      main: "Walk through the life of the Prophet ﷺ — not as a story, but as a guide for your own journey.",
      sub: "Real events. Real lessons. A roadmap to living Islam.",
      image: "/images/seerah-bg.jpg",
      imageAlt: "Seerah",
      locked: true,
    },
    {
      title: "Usul Al-Fiqh",
      main: "Learn the tools scholars use to derive rulings from the Qur’an and Sunnah.",
      sub: "Go beyond the “what” — understand the “why” behind the rulings.",
      image: "/images/usul-bg.jpg",
      imageAlt: "Usul Al-Fiqh",
      locked: true,
    },
    {
      title: "Hadith",
      main: "Explore the sayings and actions of the Prophet ﷺ, understanding their context and wisdom.",
      sub: "The practical application of the Quran in the life of the Prophet.",
      image: "/images/hadith-sciences-bg.jpg",
      imageAlt: "Hadith",
      locked: true,
    },
    {
      title: "Logic",
      main: "Sharpen your mind and critical thinking skills with the foundational science of Logic.",
      sub: "Understand how to reason correctly and identify fallacies.",
      image: "/images/aqeedah-bg.png",
      imageAlt: "Logic",
      locked: true,
    },
  ];

  const habits = [
    {
      title: "Fasting Mondays",
      main: "Each Monday, the whole community fasts together for the sake of Allah.",
      sub: "A weekly habit that tames the nafs and strengthens the iman.",
      image: "/images/fasting.png",
      imageAlt: "Fasting Mondays",
    },
    {
      title: "Tadabbur Tuesdays",
      main: "Every Tuesday, students share their personal Qur’an reflections — so we all benefit from each other’s insights.",
      sub: "Improve your connection with the Quran, week upon week.",
      image: "/images/tadabbur.png",
      imageAlt: "Tadabbur Tuesdays",
    },
    {
      title: "Thikr Thursdays",
      main: "Every Thursday, a thikr challenge is shared — and the community takes it on together.",
      sub: "Build the habit of remembering Allah frequently.",
      image: "/images/dhikr.png",
      imageAlt: "Thikr Thursdays",
    },
    {
      title: "Qiyam Saturdays",
      main: "Every Saturday, we post a reminder — and the whole community wakes up for Qiyam together on Sunday morning.",
      sub: "Let Tahajjud quietly shape your life, one week at a time.",
      image: "/images/qiyam.png",
      imageAlt: "Qiyam Saturdays",
    },
  ];

  if (only === 'topic') {
    return (
      <div className="flex w-full max-w-lg mx-auto mb-4 items-center justify-center">
        <Dropdown
          label="Select Your Topic"
          items={topics}
          open={topicOpen}
          setOpen={setTopicOpen}
          otherOpen={habitOpen}
          setOtherOpen={setHabitOpen}
          selected={selectedTopic}
          setSelected={setSelectedTopic}
        />
      </div>
    );
  }
  if (only === 'habit') {
    return (
      <div className="flex w-full max-w-lg mx-auto mb-4 items-center justify-center">
        <Dropdown
          label="Select Your Weekly Habit"
          items={habits}
          open={habitOpen}
          setOpen={setHabitOpen}
          otherOpen={topicOpen}
          setOtherOpen={setTopicOpen}
          selected={selectedHabit}
          setSelected={setSelectedHabit}
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-3xl mx-auto mb-4 items-center justify-center">
      <Dropdown
        label="Select Your Topic"
        items={topics}
        open={topicOpen}
        setOpen={setTopicOpen}
        otherOpen={habitOpen}
        setOtherOpen={setHabitOpen}
        selected={selectedTopic}
        setSelected={setSelectedTopic}
      />
      <Dropdown
        label="Select Your Weekly Habit"
        items={habits}
        open={habitOpen}
        setOpen={setHabitOpen}
        otherOpen={topicOpen}
        setOtherOpen={setTopicOpen}
        selected={selectedHabit}
        setSelected={setSelectedHabit}
      />
    </div>
  );
};

export default TopicsHabitsDropdown;
