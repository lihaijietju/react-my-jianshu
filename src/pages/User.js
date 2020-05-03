import React, { useState, useEffect } from 'react';

// 使用hook使用生命周期与状态
export default function User () {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  })

  return <div>{date.toLocaleTimeString()}</div>
}