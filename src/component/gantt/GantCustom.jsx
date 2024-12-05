
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ReactComponent as CalendarAvatar } from "../../assets/CalendarAvatar.svg";

import { ReactComponent as ExpandLeft } from "../../assets/ExpandLeft.svg";
import { ReactComponent as ExpandRight } from "../../assets/ExpandRight.svg";
import { ReactComponent as CalenderIcon } from "../../assets/Calender_Two.svg";
import { ReactComponent as ArrowUpNew } from "../../assets/ArrowUpNew.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { colors } from '@mui/material';

const Avatar = ({ children, src, alt,allocation,color }) => (
    <div className={`flex items-center   pr-[6px] rounded-2xl gap-1 avatar`
    }
    style={{backgroundColor: color,border:color}}
>
        <CalendarAvatar className='h-8 w-8 rounded-full' />
        <p className='text-sm leading-4 font-bold text-white'>{allocation}</p>
    </div>
);

const Button = ({ children, onClick, className }) => (
    <button onClick={onClick} className={className}>
        {children}
    </button>
);

const ScrollArea = ({ children }) => (
    <div className="scroll-area">
        {children}
    </div>
);

const Tabs = ({ children, defaultValue }) => (
    <div className="tabs" data-default-value={defaultValue}>
        {children}
    </div>
);

const TimelineCalendar = () => {
    const daysInMonth = Array.from({ length: 29 }, (_, i) => ({
        day: i + 1,
        isWeekend: (i % 7 === 5) || (i % 7 === 6)
    }));

    const initialSections = [
        {
            id: "1",
            title: "Tema Tecnico",
            isExpanded: true,
            // bars: [
            //     { id: "5a", startDay: 3, duration: 6, color: "bg-yellow-500" },
            //     { id: "5b", startDay: 14, duration: 5, color: "bg-cyan-500" },
            // ],
            users: [
                {
                    id: "1",
                    name: "Matteo Vellone",
                    role: "Designer",
                    avatar: <Avatar />,
                    colors:"#57C700",
                    allocation:"40%",
                    bars: [
                        { id: "1a", startDay: 4, duration: 5, color: "#4CC9F0" },
                        { id: "1b", startDay: 11, duration: 5, color: "#4CC9F0" },

                    ]
                },
                {
                    id: "2",
                    name: "John Doe",
                    role: "Developer",
                    avatar: <Avatar />,
                    colors:"#FFA903",
                    allocation:"70%",
                    bars: [
                        { id: "2a", startDay: 15, duration: 5, color: "#4CC9F0" },
                        { id: "2b", startDay: 15, duration: 6, color: "#4CC9F0" },
                    ]
                },
                {
                    id: "3",
                    name: "Jane Smith",
                    role: "UX Designer",
                    avatar: <Avatar />,
                    colors:"red",
                    allocation:"90%",
                    bars: [
                        { id: "3a", startDay: 1, duration: 10, color: "#4CC9F0" },
                        { id: "3b", startDay: 20, duration: 5, color: "#4CC9F0" },
                    ]
                },
            ],
        },
        {
            id: "2",
            title: "Tema Design",
            isExpanded: true,
            bars: [
                { id: "5a", startDay: 3, duration: 6, color: "bg-yellow-500" },
                { id: "5b", startDay: 14, duration: 5, color: "bg-cyan-500" },
            ],
            users: [
                {
                    id: "5",
                    name: "Emily Davis",
                    role: "Graphic Designer",
                    avatar: <Avatar />,
                    colors:"",
                    allocation:"40%",
                    bars: [
                        { id: "5a", startDay: 3, duration: 6, color: "bg-yellow-500" },
                        { id: "5b", startDay: 14, duration: 5, color: "bg-cyan-500" },
                    ]
                },
            ],
        }
    ];

    const [expandedSections, setExpandedSections] = useState(
        initialSections.filter((s) => s.isExpanded).map((s) => s.id)
    );

    const [users, setUsers] = useState(
        initialSections.flatMap((section) => section.users)
    );

    const toggleSection = (sectionId) => {
        setExpandedSections((prev) =>
            prev.includes(sectionId)
                ? prev.filter((id) => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const moveUserUp = (userId) => {
        setUsers((prevUsers) => {
            const userIndex = prevUsers.findIndex((user) => user.id === userId);
            if (userIndex > 0) {
                return [
                    ...prevUsers.slice(0, userIndex - 1),
                    prevUsers[userIndex],
                    prevUsers[userIndex - 1],
                    ...prevUsers.slice(userIndex + 1),
                ];
            }
            return prevUsers;
        });
    };

    const moveUserDown = (userId) => {
        setUsers((prevUsers) => {
            const userIndex = prevUsers.findIndex((user) => user.id === userId);
            if (userIndex < prevUsers.length - 1) {
                return [
                    ...prevUsers.slice(0, userIndex),
                    prevUsers[userIndex + 1],
                    prevUsers[userIndex],
                    ...prevUsers.slice(userIndex + 2),
                ];
            }
            return prevUsers;
        });
    };

    const handleDragStart = (e, userId, barId) => {
        e.preventDefault();
        const startX = e.clientX;
        const user = users.find((u) => u.id === userId);
        const bar = user?.bars.find((b) => b.id === barId);
        if (!user || !bar) return;

        const startDuration = bar.duration;
        const calendarElement = e.currentTarget.closest('.calendar-grid');
        const dayWidth = calendarElement ? calendarElement.clientWidth / daysInMonth.length : 0;

        const handleDrag = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX;
            let durationChange = Math.round(deltaX / dayWidth);

            const newEndDay = bar.startDay + startDuration + durationChange - 1;
            const weekendsInNewDuration = daysInMonth.slice(bar.startDay - 1, newEndDay).filter(d => d.isWeekend).length;
            durationChange -= weekendsInNewDuration;

            setUsers((prevUsers) =>
                prevUsers.map((u) =>
                    u.id === userId
                        ? {
                            ...u,
                            bars: u.bars.map((b) =>
                                b.id === barId
                                    ? {
                                        ...b,
                                        duration: Math.max(
                                            1,
                                            Math.min(
                                                29 - b.startDay + 1 - weekendsInNewDuration,
                                                startDuration + durationChange
                                            )
                                        )
                                    }
                                    : b
                            )
                        }
                        : u
                )
            );
        };

        const handleDragEnd = () => {
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', handleDragEnd);
        };

        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);
    };

    const getWeekdayDuration = (startDay, duration) => {
        return daysInMonth.slice(startDay - 1, startDay - 1 + duration).filter(d => !d.isWeekend).length;
    };

    const getBarStyle = (startDay, duration) => {
        const totalDays = daysInMonth.length;
        const width = (duration / totalDays) * 100;
        return {
            left: `${((startDay - 1) / totalDays) * 100}%`,
            width: `${width}%`,
        };
    };

    const [monthIndex, setMonthIndex] = useState(10); // August 2024
    const generateMonths = (year) => {
        return Array.from({ length: 12 }, (_, i) => {
            const month = new Date(year, i, 1);
            const label = month.toLocaleString("it-IT", {
                // Specify Italian locale
                month: "long",
                year: "numeric",
            });
            const days = new Date(year, i + 1, 0).getDate(); // Last day of the month
            return { label, days };
        });
    };
    const months = generateMonths(2024);
    const selectedMonth = months[monthIndex];
    const dates = Array.from({ length: selectedMonth.days }, (_, i) => i + 1);
    const handlePreviousMonth = () => {
        setMonthIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : months.length - 1
        );
    };

    const handleNextMonth = () => {
        setMonthIndex((prevIndex) =>
            prevIndex < months.length - 1 ? prevIndex + 1 : 0
        );
    };


    // Generate months for the chosen year (e.g., 2024)

    return (
        <div className="w-full">
            <div className="flex bg-[#FAFAFA]">
                <div className="w-1/3">
                    <div className='flex items-center gap-1 text-[#57C700] px-5 py-3'>
                        <CalenderIcon />
                        <p className='text-sm leading-4 font-normal text-[#57C700]'>Mese</p>
                    </div>
                </div>
                <div className="w-2/3 flex items-center justify-center px-5 py-3">
                    <div className="calenderGantt__header">
                        <button onClick={handlePreviousMonth}>
                            <ExpandLeft className='h-6 w-6' />
                        </button>
                        <p className='px-4 text-lg leading-5 text-[#100919] font-bold'>{selectedMonth.label}</p>
                        <button onClick={handleNextMonth}>
                            <ExpandRight className='h-6 w-6' />
                        </button>
                    </div>
                </div>
            </div>

            <ScrollArea>
                <div className="relative min-w-[1200px]">
                    <div className="sticky top-0 z-10 flex border-b border-[#fff] bg-[#FAFAFA]">
                        <div className="w-1/3 flex-none px-5 py-3">
                            <Tabs defaultValue="mese">
                                <div className="flex items-center gap-5 ">
                                    <div className='flex gap-1 items-center text-[#160A2A] '>
                                        <CalenderIcon />
                                        <p className='text-sm leading-4 font-normal text-[#160A2A]'>Trimestre</p>
                                    </div>
                                    <div className='flex gap-1 items-center text-[#160A2A] '>
                                        <CalenderIcon />
                                        <p className='text-sm leading-4 font-normal text-[#160A2A]'>Mese</p>
                                    </div>
                                    <div className='flex gap-1 items-center text-[#160A2A] '>
                                        <CalenderIcon />
                                        <p className='text-sm leading-4 font-normal text-[#160A2A]'>Settimana </p>
                                    </div>
                                    <div className='flex gap-1 items-center text-[#160A2A] '>
                                        <CalenderIcon />
                                        <p className='text-sm leading-4 font-normal text-[#160A2A]'>Giorno</p>
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                        <div className="w-2/3 flex ">
                            {dates.map((date) => {

                                const currentDateObj = new Date(2024, monthIndex, date);
                                const isWeekend =
                                    currentDateObj.getDay() === 0 ||
                                    currentDateObj.getDay() === 6;
                                return (
                                    <div
                                        className={`flex-1 text-center text-sm flex items-center justify-center ${isWeekend ? 'bg-[#FAFAFA]' : ''}`}>

                                        {date}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sections and users */}
                    <div>
                        {initialSections.map((section) => (
                            <div key={section.id}>
                                <div className="flex items-center border-b border-[#fff] bg-[#FAFAFA]">
                                    <div className='w-2/6 flex pl-1 pr-5 py-3 justify-between items-center'>
                                        <Button
                                            className="flex items-center gap-[10px] text-base leading-5 text-[#666666] font-bold w-[calc(100% - 60px)]"
                                            onClick={() => toggleSection(section.id)}
                                        >
                                            {expandedSections.includes(section.id) ? (
                                                <ChevronUp className="h-6 w-6" />
                                            ) : (
                                                <ChevronDown className="h-6 w-6" />
                                            )}
                                            {section.title}
                                        </Button>
                                        <Button
                                            className="flex items-center justify-end gap-[7px] w-[60px]"
                                            onClick={() => toggleSection(section.id)}
                                        >
                                            <ArrowUpNew className="h-6 w-6" />
                                            <ArrowDown className="h-6 w-6" />
                                        </Button>
                                    </div>
                                    <div className="flex flex-1">
                                        {daysInMonth.map(({ day, isWeekend }) => (
                                            <div key={day} className={`flex-1 border-r ${isWeekend ? 'bg-[#F2F2F2]' : ''}`} />
                                        ))}
                                    </div>
                                </div>
                                {initialSections.map((bar) => (
                                    console.log(bar, "bar")
                                    // <div
                                    //     key={bar.id}
                                    //     className={`absolute top-1/2 flex h-9 -translate-y-1/2 cursor-ew-resize items-center gap-1 px-2 ${bar.color} rounded-md`}
                                    //     style={{
                                    //         ...getBarStyle(bar.startDay, bar.duration),
                                    //         borderRadius: '20px',
                                    //     }}
                                    //     // onMouseDown={(e) => handleDragStart(e, user.id, bar.id)}
                                    // >
                                    //     <span className="text-sm font-medium text-white">
                                    //         {getWeekdayDuration(bar.startDay, bar.duration)}
                                    //     </span>
                                    // </div>
                                ))}
                                {/* Users */}
                                {expandedSections.includes(section.id) &&
                                    users.filter((user) => section.users.some((u) => u.id === user.id)).map((user, index) => (
                                        <div key={user.id} className="flex border-b border-[#fff]">
                                            <div className="flex w-1/3 flex-none items-center gap-2 bg-[#FAFAFA] pl-4 pr-5 py-[7px]">
                                                <Avatar
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    allocation={user.allocation}
                                                    color={user.colors}
                                                >
                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                </Avatar>
                                                <div className="min-w-0 flex-1 flex items-center">
                                                    <div className="w-2/4 text-base leading-5 font-normal text-[#666666]">{user.name}</div>
                                                    <div className="w-2/4 text-base leading-5 font-normal text-[#666666]">{user.role}</div>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Button onClick={() => moveUserUp(user.id)}>
                                                        <ArrowUpNew className="h-6 w-6" />
                                                    </Button>
                                                    <Button onClick={() => moveUserDown(user.id)}>
                                                        <ArrowDown className="h-6 w-6" />
                                                    </Button>
                                                </div>
                                            </div>

                                            <div className="relative flex w-2/3 calendar-grid">
                                                {dates.map((date) => {
                                                    const currentDateObj = new Date(2024, monthIndex, date);
                                                    const isWeekend = currentDateObj.getDay() === 0 || currentDateObj.getDay() === 6;

                                                    return (
                                                        <div
                                                            key={date}
                                                            className={`flex-1  ${isWeekend ? 'bg-gray-100' : ''}`}
                                                        />
                                                    );
                                                })}

                                                {/* {dates.map((date) => (
                                                    <div key={date} className={`flex-1 border-r ${isWeekend ? 'bg-gray-100' : ''}`} />
                                                ))} */}
                                                {user.bars.map((bar) => (
                                                    <div
                                                        key={bar.id}
                                                        className={`absolute top-1/2 flex h-9 -translate-y-1/2 cursor-ew-resize items-center gap-1 px-2 rounded-md `}

                                                        style={{
                                                            ...getBarStyle(bar.startDay, bar.duration),
                                                            borderRadius: '20px',
                                                            backgroundColor: bar.color
                                                        }}
                                                        onMouseDown={(e) => handleDragStart(e, user.id, bar.id)}
                                                    >
                                                        <div className='absolute flex items-center left-1'>
                                                            <CalendarAvatar className='h-8 w-8 rounded-full' />
                                                            {/* <CalendarAvatar className='h-8 w-8 rounded-full -ml-3' /> */}
                                                        </div>
                                                        <p className="text-sm font-medium text-white absolute right-3">
                                                            {getWeekdayDuration(bar.startDay, bar.duration)}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
};

export default TimelineCalendar;
