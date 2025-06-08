import { useState } from 'react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody
} from './components/ui/table';
import { FaSearch, FaUserCircle, FaPlus, FaBell, FaCog, FaEye, FaChevronDown, FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';

const Menu = ({ children }) => <div className="space-y-2">{children}</div>;
const MenuItem = ({ children, className }) => (
  <div className={`cursor-pointer hover:text-pink-400 ${className}`}>{children}</div>
);

const mockData = new Array(12).fill(null).map(() => ({
  eventName: 'Filled Name',
  eventStart: 'Jan 12, 2024',
  eventEnd: 'Jan 14, 2024',
  clientName: 'Harsh Kochar',
  contact: '+91 7030649008',
  venue: 'Lorem Ipsum Dolor Sit Amet'
}));

export default function EventRequestsPage() {
  const [search, setSearch] = useState('');
  const [eventsOpen, setEventsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f0120] via-[#2a1a3c] to-[#1a0033] text-white relative overflow-hidden">
      {/* Glassy background overlay */}
      <div className="absolute inset-0 z-0" />
      <header className="w-full flex items-center justify-between p-6 z-20 relative">
        <div className="flex items-center gap-4">
          <img src="../../bitcoin-01.png" alt="logo" className="w-16 h-16 drop-shadow-[0_0_24px_#d175b6]" />
        </div>
        <div className="flex items-center gap-4  rounded-2xl px-6 py-2">
          <img src="../../Info.png" alt="info" className="w-20 h-20 cursor-pointer" />
          <img src="../../Noti.png" alt="cog" className="w-20 h-20 cursor-pointer" />
          <img src="../../profile.jpg" className="w-10 h-10 rounded-full border-2 border-pink-500 cursor-pointer object-cover" alt="profile" />
          <div className="text-right ml-2">
            <div className="text-[#D175B6] font-bold text-base">Hi, Harsh Kochar</div>
            <div className="text-white text-xs">welcome back!</div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 z-10 relative">
        {/* Sidebar */}
        <aside className="w-72 min-h-[75vh] bg-black/40 backdrop-blur-2xl border-2 border-pink-400 rounded-2xl p-6 flex flex-col justify-between mt-6 shadow-[0_0_32px_2px_rgba(209,117,182,0.15)]">
          <div>
            <nav className="space-y-8">
              <div>
                <p
                  className="text-pink-300 font-bold mb-2 flex items-center justify-between border-b border-pink-400 pb-2 text-lg tracking-wide cursor-pointer select-none drop-shadow-[0_0_8px_#d175b6]"
                  onClick={() => setEventsOpen((prev) => !prev)}
                >
                  Events
                  <FaChevronDown className={`ml-2 text-pink-400 transition-transform duration-200 ${eventsOpen ? 'rotate-180' : ''}`} />
                </p>
                {eventsOpen && (
                  <Menu>
                    <MenuItem className="pl-6 py-2 text-white rounded-lg border border-pink-400 font-semibold bg-pink-500/10 shadow-[0_0_8px_#d175b6]">New Requests</MenuItem>
                    <MenuItem className="pl-6 py-2 flex items-center transition ">
                      Estimate
                    </MenuItem>
                    <MenuItem className="pl-6 py-2 ">Events</MenuItem>
                    <MenuItem className="pl-6 py-2">Partial Requests</MenuItem>
                  </Menu>
                )}
              </div>
              <div>
                <p className="text-white font-bold mb-2 text-lg tracking-wide">Positions</p>
              </div>
              <div>
                <p className="text-white font-bold mb-2 text-lg tracking-wide">Contractors</p>
              </div>
              <div>
                <p
                  className="text-white font-bold mb-2 text-lg tracking-wide flex items-center justify-between cursor-pointer select-none"
                  onClick={() => setUsersOpen((prev) => !prev)}
                >
                  Users
                  <FaChevronDown className={`ml-2 text-[#D175B6] transition-transform duration-200 ${usersOpen ? 'rotate-180' : ''}`} />
                </p>
                {usersOpen && (
                  <Menu>
                    <MenuItem className="pl-6 py-2 hover:bg-pink-500/30 rounded-lg transition shadow-[0_0_8px_#d175b6]">Admins</MenuItem>
                    <MenuItem className="pl-6 py-2 hover:bg-pink-500/30 rounded-lg transition shadow-[0_0_8px_#d175b6]">Clients</MenuItem>
                    <MenuItem className="pl-6 py-2 hover:bg-pink-500/30 rounded-lg transition shadow-[0_0_8px_#d175b6]">Coordinators</MenuItem>
                  </Menu>
                )}
              </div>
              <div>
                <p className="text-white font-bold mb-2 text-lg tracking-wide">Profile</p>
              </div>
            </nav>
          </div>
          <Button variant="ghost" className="mt-10 text-white border border-pink-400 bg-black/30 rounded-xl py-3 text-lg flex items-center justify-center gap-2 shadow-[0_0_16px_2px_rgba(255,0,128,0.2)] hover:bg-pink-600/30 transition">
            <img src="../../Upload.png" alt="logout" className="w-5 h-5" /> Logout
          </Button>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-8 overflow-auto">
          <Card className="mt-6 bg-gradient-to-br from-black/80 to-slate-900/80 border-2 border-pink-500 rounded-2xl shadow-[0_0_32px_2px_rgba(209,117,182,0.15)] backdrop-blur-2xl">
            <CardContent>
              <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-[0_0_8px_#d175b6]">Event Requests</h1>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Input
                      className="bg-black/60 text-white border-pink-500 pl-12 pr-4 py-2 rounded-xl shadow-[0_0_8px_#d175b6] focus:ring-2 focus:ring-pink-400 placeholder:text-pink-200"
                      placeholder="Search here"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-400 text-lg" />
                  </div>
                  <Button className="bg-pink-600/80 hover:bg-pink-700/90 text-white rounded-xl shadow-[0_0_12px_2px_rgba(209,117,182,0.2)] px-6 py-2 flex items-center gap-2">
                    <FaPlus className="mr-2" /> Add
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-pink-400 shadow-[0_0_16px_2px_rgba(209,117,182,0.15)]">
                <Table className="w-full text-white min-w-[900px]">
                  <TableHeader className="bg-[#D175B6]/90 text-white text-lg rounded-t-2xl">
                    <TableRow>
                      <TableHead className="py-4 px-4 text-lg font-bold flex items-center gap-2">Event Name <FaChevronCircleUp className="inline text-white mr-2" /></TableHead>
                      <TableHead className="py-4 px-4 text-lg font-bold">Event Start</TableHead>
                      <TableHead className="py-4 px-4 text-lg font-bold">Event End</TableHead>
                      <TableHead className="py-4 px-4 text-lg font-bold">Client Name</TableHead>
                      <TableHead className="py-4 px-4 text-lg font-bold">Contact Info</TableHead>
                      <TableHead className="py-4 px-4 text-lg font-bold">Venue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockData.map((item, index) => (
                      <TableRow key={index} className="hover:bg-pink-900/10 transition border-b border-pink-400/30">
                        <TableCell className="py-3 px-4"><FaEye className="inline text-pink-400 mr-2" />{item.eventName}</TableCell>
                        <TableCell className="py-3 px-4">{item.eventStart}</TableCell>
                        <TableCell className="py-3 px-4">{item.eventEnd}</TableCell>
                        <TableCell className="py-3 px-4">{item.clientName}</TableCell>
                        <TableCell className="py-3 px-4">{item.contact}</TableCell>
                        <TableCell className="py-3 px-4">{item.venue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="ghost" className="rounded-full w-10 h-10 p-0 text-pink-400 border border-pink-400 bg-black/40 shadow-[0_0_8px_#d175b6]">{'<'}</Button>
            {[1, 2, 3, 4].map((page) => (
              <Button
                key={page}
                variant={page === 4 ? 'default' : 'ghost'}
                className={`rounded-full w-10 h-10 p-0 ${page === 4 ? 'bg-pink-600 text-white shadow-[0_0_12px_2px_rgba(209,117,182,0.3)]' : 'text-pink-400 border border-pink-400 bg-black/40 shadow-[0_0_8px_#d175b6]'}`}
              >
                {page}
              </Button>
            ))}
            <Button variant="ghost" className="rounded-full w-10 h-10 p-0 text-pink-400 border border-pink-400 bg-black/40 shadow-[0_0_8px_#d175b6]">{'>'}</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
