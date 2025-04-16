import React from "react";
import { Link } from "react-router-dom";
import {
    UserGroupIcon,
    CurrencyDollarIcon,
    UserPlusIcon,
    ChartBarIcon,
} from "@heroicons/react/24/outline";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Mon", uv: 400 },
    { name: "Tue", uv: 200 },
    { name: "Wed", uv: 300 },
    { name: "Thu", uv: 500 },
    { name: "Fri", uv: 250 },
    { name: "Sat", uv: 350 },
    { name: "Sun", uv: 450 },
];


const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex flex-col items-start justify-between w-0.5/3 h-screen max-w-screen-lg bg-white shadow-lg p-8">
                <aside className="w-64 bg-gray-900 text-white p-5 h-screen">
                    <h2 className="text-2xl font-bold mb-8">🎬 Movie Library</h2>
                    <nav className="space-y-4 text-center font-extrabold">
                        <Link to="/dashboard" className="block hover:text-yellow-400 ">Dashboard</Link>
                        <Link to="/profile" className="block hover:text-yellow-400">Profile</Link>
                        <Link to="/movies" className="block hover:text-yellow-400">Movies</Link>
                        <Link to="/notifications" className="block hover:text-yellow-400">Notifications</Link>
                        <div className="mt-8 ">
                            <Link to="/login" className="block text-sm hover:text-yellow-400 my-6">Login</Link>
                            <Link to="/signup" className="block text-sm hover:text-yellow-400">Sign Up</Link>
                        </div>
                    </nav>
                </aside>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
                <header className="flex justify-between items-center mb-6 flex-wrap">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="px-4 py-2 rounded-md border shadow-sm"
                    />
                </header>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <StatCard title="Today's Money" value="$53k" icon={<CurrencyDollarIcon className="h-6 w-6" />} note="+55% than last week" color="bg-blue-500" />
                    <StatCard title="Today's Users" value="2,300" icon={<UserGroupIcon className="h-6 w-6" />} note="+3% than last month" color="bg-pink-500" />
                    <StatCard title="New Clients" value="3,462" icon={<UserPlusIcon className="h-6 w-6" />} note="-2% than yesterday" color="bg-green-500" />
                    <StatCard title="Sales" value="$103,430" icon={<ChartBarIcon className="h-6 w-6" />} note="+5% than yesterday" color="bg-yellow-500" />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <ChartCard title="Website Views" subtitle="Last Campaign Performance" color="blue" />
                    <ChartCard title="Daily Sales" subtitle="15% Increase in sales" color="red" />
                    <ChartCard title="Completed Tasks" subtitle="Last Campaign Performance" color="green" />
                </div>

                {/* === Bottom Section === */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

                    {/* 📁 Projects List */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Projects</h3>
                        <div className="space-y-4">
                            <ProjectItem
                                name="Material XD Version"
                                members={["A", "B", "C"]}
                                budget="$14,000"
                                progress={60}
                            />
                            <ProjectItem
                                name="Add Progress Track"
                                members={["D", "E"]}
                                budget="$3,000"
                                progress={80}
                            />
                            <ProjectItem
                                name="Fix Platform Errors"
                                members={["F"]}
                                budget="Not Set"
                                progress={20}
                            />
                        </div>
                    </div>

                    {/* 📦 Orders Overview */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Orders Overview</h3>
                        <div className="space-y-4 text-sm">
                            <OrderItem color="green" text="Design changes completed" date="24% this month" />
                            <OrderItem color="red" text="Order #1832412 failed" date="2 days ago" />
                            <OrderItem color="blue" text="New order #1832412 placed" date="3 days ago" />
                            <OrderItem color="yellow" text="Pending shipment for April" date="5 days ago" />
                        </div>
                    </div>

                </div>
            </main>
        </div>


    );
};

const StatCard = ({ title, value, icon, note, color }) => (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
        <div className={`p-3 rounded-full text-white ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-xl font-bold">{value}</p>
            <p className="text-xs text-green-500">{note}</p>
        </div>
    </div>
);

const ChartCard = ({ title, subtitle, color }) => (
    <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
        <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="uv" stroke={color} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);

const ProjectItem = ({ name, members, budget, progress }) => (
    <div className="flex flex-col">
        <div className="flex justify-between items-center">
            <h4 className="font-medium">{name}</h4>
            <span className="text-sm text-gray-500">{budget}</span>
        </div>
        <div className="flex items-center mt-2 gap-2">
            {members.map((m, i) => (
                <div
                    key={i}
                    className="w-6 h-6 bg-gray-200 rounded-full text-xs flex items-center justify-center"
                >
                    {m}
                </div>
            ))}
            <div className="w-full ml-4">
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    </div>
);

const OrderItem = ({ color, text, date }) => {
    const dotColor = {
        green: "bg-green-500",
        red: "bg-red-500",
        blue: "bg-blue-500",
        yellow: "bg-yellow-400",
    }[color];

    return (
        <div className="flex items-start gap-3">
            <div className={`w-3 h-3 rounded-full mt-1 ${dotColor}`}></div>
            <div>
                <p className="text-gray-800">{text}</p>
                <p className="text-gray-400 text-xs">{date}</p>
            </div>
        </div>
    );
};

export default Dashboard;
