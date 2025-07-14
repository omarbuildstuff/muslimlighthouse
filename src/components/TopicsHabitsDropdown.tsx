import React, { useState } from "react";


import { ChevronDown, BookOpen, Heart, Users, CheckCircle } from "lucide-react";




function Dropdown({ label, items, open, setOpen, otherOpen, setOtherOpen, selected, setSelected }: {
  label: string;
  items: { title: string; main: string; sub: string; image: string; imageAlt: string }[];
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
              className={`px-5 py-4 flex items-start gap-4 hover:bg-lighthouse-50 transition cursor-pointer ${i !== items.length - 1 ? 'border-b border-lighthouse-100' : ''} ${selected && selected.title === item.title ? 'bg-lighthouse-50 ring-2 ring-lighthouse-300' : ''}`}
              onClick={() => handleSelect(item)}
            >
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
      title: "Hadith Sciences",
      main: "Discover how scholars preserved the Prophet’s ﷺ words — and learn which hadiths are authentic.",
      sub: "Build confidence in the Sunnah. Know what to trust.",
      image: "/images/hadith-sciences-bg.jpg",
      imageAlt: "Hadith Sciences",
    },
    {
      title: "Hadith",
      main: "Study the actual words, wisdom, and actions of the Prophet ﷺ.",
      sub: "Connect with his ﷺ life, teachings, and legacy — directly.",
      image: "/images/tajweed-bg.jpg", // Using TajweedImage as a placeholder
      imageAlt: "Hadith",
    },
    {
      title: "Logic",
      main: "Train your mind to think clearly, avoid contradictions, and spot flawed arguments.",
      sub: "Sharpen your reasoning. Protect your beliefs.",
      image: "/images/aqeedah-bg.png", // Using AqeedahImage as a placeholder
      imageAlt: "Logic",
    },
    {
      title: "Seerah",
      main: "Walk through the life of the Prophet ﷺ — not as a story, but as a guide for your own journey.",
      sub: "Real events. Real lessons. A roadmap to living Islam.",
      image: "/images/seerah-bg.jpg",
      imageAlt: "Seerah",
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
      title: "Usul Al-Fiqh",
      main: "Learn the tools scholars use to derive rulings from the Qur’an and Sunnah.",
      sub: "Go beyond the “what” — understand the “why” behind the rulings.",
      image: "/images/usul-bg.jpg",
      imageAlt: "Usul Al-Fiqh",
    },
  ];

  const habits = [
    {
      title: "Dawah Mondays",
      main: "Each Monday, students share one way they brought someone closer to Islam.",
      sub: "A weekly habit of leaving an impact on the Ummah.",
      image: "/images/dawah.png",
      imageAlt: "Dawah Mondays",
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
