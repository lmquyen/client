'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('Đang kết nối server...');

  useEffect(() => {
    fetch('http://localhost:3000') // Gọi tới NestJS mặc định
      .then(res => res.text())
      .then(data => setMsg(data))
      .catch(() => setMsg('Server chưa bật!'));
  }, []);

  return (
    <div className="p-20 text-center">
      <h1 className="text-2xl font-bold">Kết quả: {msg}</h1>
    </div>
  );
}
