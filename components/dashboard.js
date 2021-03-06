import Image from 'next/image';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    "name": "June 1",
    "New Subscribers": 4000,
    "Unsubscribed": 2400,
    "Deleted Subscribers": 2400
  },
  {
    "name": "June 2",
    "New Subscribers": 3000,
    "Unsubscribed": 1398,
    "Deleted Subscribers": 2210
  },
  {
    "name": "June 3",
    "New Subscribers": 2000,
    "Unsubscribed": 9800,
    "Deleted Subscribers": 2290
  },
  {
    "name": "June 4",
    "New Subscribers": 2780,
    "Unsubscribed": 3908,
    "Deleted Subscribers": 2000
  },
  {
    "name": "June 5",
    "New Subscribers": 1890,
    "Unsubscribed": 4800,
    "Deleted Subscribers": 2181
  },
  {
    "name": "June 6",
    "New Subscribers": 2390,
    "Unsubscribed": 3800,
    "Deleted Subscribers": 2500
  },
  {
    "name": "June 7",
    "New Subscribers": 3490,
    "Unsubscribed": 4300,
    "Deleted Subscribers": 2100
  }
];

export default function DashBoard(){
    return(
        <div>
            <div className='company flex'>
                    <div className='company-about flex w-[50%] items-center'>
                        <div className='mr-[20px]'>
                          <Image src={'/static/images/company-logo.jfif'} height={'110px'} width={'110px'}></Image>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <span className='text-[20px] font-bold'>Appz Studio</span>
                                <span className='text-[green]'>✔️PUBLISHED</span>
                            </div>
                            <span className='text-[gray]'>Internet Company</span>
                            <span className='text-[blue]'>https://www.linkedin.com/messaging/thread</span>
                            <span className='text-[gray]'>Appz studio is a online company which deals with....</span>
                        </div>
                    </div>
                    <div className='company-stats flex justify-around items-center w-[50%]'>
                        <div className='flex flex-col items-center justify-center bg-[#F1F1F5] w-[25%] h-[70%] rounded-lg'>
                            <span className='text-[25px]'>0</span>
                            <span>Subscribers</span>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-[#F1F1F5] w-[25%] h-[70%] rounded-lg'>
                            <span className='text-[25px]'>0</span>
                            <span>Active</span>
                        </div>
                        <div className='flex flex-col items-center justify-center bg-[#F1F1F5] w-[25%] h-[70%] rounded-lg'>
                            <span className='text-[25px]'>0</span>
                            <span>Deleted Subscribers</span>
                        </div>
                    </div>
                </div>
                {/*Starting of subscriber stats*/}
                <div className='company-graph-stats mt-[20px] rounded border-[1px]'>
                  <div className='pl-[15px] pt-[10px] pb-[10px] border-b-[1px]'>
                      <span className='text-[14px]'>Subscriber Statistics</span>
                  </div>
                  <div className='p-[10px]'>
                  <ResponsiveContainer width={'100%'} height={280}>
                    <LineChart data={data}>
                      <CartesianGrid />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="New Subscribers" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="Unsubscribed" stroke="#ffc439" />
                      <Line type="monotone" dataKey="Deleted Subscribers" stroke="#d14" />
                    </LineChart>
                  </ResponsiveContainer>
                  </div>
                </div>
                {/*Starting of end cards*/}
                <div className='flex justify-between mt-[30px]'>
                    <div className='flex flex-col w-[30%] rounded border-[1px]'>
                        <div className='flex justify-between border-b-[1px] p-[10px]'>
                            <span>Latest Subscribers</span>
                            <button className="bg-[#0165E1] text-[13px] pl-[8px] pr-[8px] text-[white] rounded-lg">Go to Audience</button>
                        </div>
                        <div className='p-[12px] text-[gray]'>
                            <span className='text-[14px]'>You do not have any subscribers yet.</span>
                        </div>
                    </div>
                    <div className='flex flex-col w-[30%] rounded border-[1px]'>
                        <div className='flex justify-between border-b-[1px] p-[10px]'>
                            <span>Latest Chats</span>
                            <button className="bg-[#0165E1] text-[13px] pl-[8px] pr-[8px] text-[white] rounded-lg">Go to Live Chat</button>
                        </div>
                        <div className='p-[12px] text-[gray]'>
                            <span className='text-[14px]'>You did not recieve any messages yet.</span>
                        </div>
                    </div>
                    <div className='flex flex-col w-[30%] rounded border-[1px]'>
                        <div className='flex justify-between border-b-[1px] p-[10px]'>
                            <span>Latest Broadcast</span>
                            <button className="bg-[#0165E1] text-[13px] pl-[8px] pr-[8px] text-[white] rounded-lg">Go to Broadcasts</button>
                        </div>
                        <div className='p-[12px] text-[gray]'>
                            <span className='text-[14px]'>You did not send any broadcast yet.</span>
                        </div>
                    </div>
                </div>
        </div>
    );
}