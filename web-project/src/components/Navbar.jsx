import React, { useState } from 'react';
import logoUrl from '../assets/logo.png';
import userUrl from '../assets/user.png';
import Upload from './Upload';
import { useNavigate } from 'react-router-dom';

const menu_roles = {
  student: [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'projects', label: 'โครงการในระบบ' },
    { id: 'my-projects', label: 'โครงการของฉัน' },
  ],
  instructor: [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'projects', label: 'โครงการในระบบ' },
    { id: 'stats', label: 'สถิติโครงการ' },
  ],
  coordinator: [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'projects', label: 'จัดการโครงการ' },
  ],
  visitor: []
};

const Navbar = ({ role = 'visitor' }) => {
  const [activeTab, setActiveTab] = useState('home');
  const currentMenu = menu_roles[role] || menu_roles.visitor;
  const canImport = ['instructor', 'coordinator'].includes(role);
  const navigate = useNavigate();

  return (
    <nav className="flex items-center px-12 py-6">

      {/* Logo */}
      <div className="flex-1 flex items-center">
        <img src={logoUrl} className="h-12" alt="Logo" />
      </div>

      {/* Middle Menu */}
      <div className="flex-[2] flex justify-center">
        {currentMenu.length > 0 && (
          <div className="flex bg-[#e4e6e9] border border-white/30 rounded-full p-1.5 gap-3 shadow-inner">
            {currentMenu.map((menu) => (
              <button
                key={menu.id}
                onClick={() => setActiveTab(menu.id)}
                className={`px-6 py-2.5 rounded-full text-[15px] whitespace-nowrap ${activeTab === menu.id
                  ? 'font-semibold bg-white text-[#0F4054]'
                  : 'font-medium text-[#595959] hover:text-[#0F4054] hover:bg-white/40'
                  }`}
              >
                {menu.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Visitor Menu */}
      <div className="flex-1 flex justify-end items-center gap-4">
        {role === 'visitor' ? (
          <>
            <button className="bg-[#f0f2f5] text-slate-700 rounded-full px-6 py-2.5 text-[15px] font-semibold shadow-sm hover:bg-white hover:shadow-md">
              สมัครสมาชิก
            </button>
            <button className="bg-[#0F4054] text-white rounded-full px-6 py-2.5 text-[15px] font-semibold shadow-lg hover:bg-[#244b61] hover:shadow-xl">
              เข้าสู่ระบบ
            </button>
          </>
        ) : (
          <>
            {/* Instructor & Coordinator Menu */}
            {canImport && (
              <Upload 
                onImageUpload={() => navigate('/imgupload')}
                onDocxUpload={() => navigate('/docxupload')}
              >
                <button className="bg-[#0F4054] text-white rounded-full px-6 py-2.5 text-[15px] font-semibold shadow-lg hover:bg-[#244b61] hover:shadow-xl pointer-events-none">
                  นำเข้าโครงการ
                </button>
              </Upload>
            )}
            {/* User Profile Menu */}
            <button className="w-12 h-12 rounded-full overflow-hidden shadow-md hover:shadow-lg">
              <img src={userUrl} alt="User" className="w-full h-full object-cover hover:opacity-90" />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
