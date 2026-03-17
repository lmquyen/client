'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('Đang kết nối server...');
  //const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/data';
  //const API_URL = 'http://localhost:3000';
  const API_URL = 'https://server-gdh6.onrender.com';

  // useEffect(() => {
  //   fetch(API_URL) // Gọi tới NestJS mặc định
  //     .then(res => res.text())
  //     .then(data => setMsg(data))
  //     .catch(() => setMsg('Server chưa bật!'));
  // }, []);

  return (
    <div className="p-20 text-center">
      <h1 className="text-2xl font-bold">Kết quả</h1>
    </div>
  );
}
