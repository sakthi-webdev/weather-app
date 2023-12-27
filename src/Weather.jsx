import React, { useState } from 'react';

function Weather() {

  const [input, setInput] = useState('');
  const [data, setData] = useState({});

  const fetchData = async () => {
    const apiKey = '1d8c89daf41e579d0c451ae2919ad835';
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`);
      setData(await res.json())
    }
    catch(err) {
        alert('Please Enter Correct City!');
      }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    if(input==='')
    {
      alert('please enter the city!');
    }
    fetchData();
    
  }

  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString('default', {month: 'long'});
  const year = now.getFullYear();

  return (
    <div className='container font-sans text-white bg-black bg-opacity-30 text-center w-full mt-12 mx-auto p-10 border border-slate-300 rounded-xl shadow-lg'>
      <h1 className='font-bold'>Date:</h1>
      <p>{month} {day}, {year}</p>
      <h1 className='m-5 font-bold text-2xl'>Weather App</h1>
      <form>
        <input onChange={(e) => { setInput(e.target.value) }} value={input} type='text' className='rounded w-full text-black p-2 mx-auto m-6 placeholder:p-1 shadow-sm focus:outline-none' placeholder='enter a city' />
        <button onClick={HandleSubmit} className='bg-slate-100 text-black text-md p-2 rounded-md m-2'>Search</button>
      </form>
      <div className='m-5'>
        <h1 className='font-bold mb-2'>{(data.name) ? data.name + ',': ''} {data.sys && data.sys.country}</h1>
        <p>{data.weather && data.weather[0].main}</p>
      </div>
    </div>

  )
}

export default Weather;