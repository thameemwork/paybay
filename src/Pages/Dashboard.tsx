import React from 'react'
import Customer from '../assets/img/customer.svg';
import Revenue from '../assets/img/coin.png';
import Transaction  from '../assets/img/transaction.png';
import Total  from '../assets/img/total.png';
import KycCount from '../assets/img/kyc-approval.svg';
import Completed from '../assets/img/kyc-completed.svg';
import Kycrejected from '../assets/img/kyc-rejected.svg';
import Merchantactive from '../assets/img/merchant-active.svg';
import Merchanttotal from '../assets/img/merchant-total.svg';
import Declinefailed from '../assets/img/declinefailed.svg';
import Declinewallet from '../assets/img/declinewallet.svg';
import Declineoverall from '../assets/img/declineoverall.svg';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const data = [
  { date: "Sept 3", transactions: 200, revenue: 150, merchant: 300 },
  { date: "Sept 4", transactions: 350, revenue: 250, merchant: 420 },
  { date: "Sept 5", transactions: 280, revenue: 400, merchant: 380 },
  { date: "Sept 6", transactions: 320, revenue: 300, merchant: 240 },
  { date: "Sept 7", transactions: 450, revenue: 380, merchant: 180 },
  { date: "Sept 8", transactions: 260, revenue: 290, merchant: 140 },
  { date: "Sept 9", transactions: 370, revenue: 310, merchant: 220 },
  { date: "Sept 10", transactions: 340, revenue: 410, merchant: 290 },
  { date: "Sept 11", transactions: 280, revenue: 380, merchant: 310 },
  { date: "Sept 12", transactions: 320, revenue: 450, merchant: 370 },
]



const Dashboard: React.FC = () => {
  return (
    <div>
        


<div className="dashboard-text">
      <h2 className="text-2xl font-bold mb-1">Dashboard</h2>
      <p>PayBayGo Analytics & Overview</p>
      <br />

      {/* Wallet & Transaction Overview */}
      <div className="flex gap-4 mb-4">
        {/* Wallet Overview */}
        <div className="w-1/2">
          <h2>Wallet Overview</h2>
          <div className="flex gap-4 mt-4">
            <div className="w-1/2 dashboard-card-1 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h5>Customer Wallet</h5>
                  <h6>
                    ₹468 <span>+9.8%</span>
                  </h6>
                </div>
                <div className='wall-card-icon flex'><img src={Customer} alt="Customer" /></div>
              </div>
              <h4>Total balance across all customers</h4>
            </div>

            <div className="w-1/2 dashboard-card-2">
              <div className="flex items-center justify-between">
                <div>
                  <h5>Revenue Wallet</h5>
                  <h6>
                    ₹209 <span>+12.5%</span>
                  </h6>
                </div>
                <div className='wall-card-icon flex sec'><img src={Revenue} alt="Revenue" /></div>
              </div>
              <h4>Platform revenue generated</h4>
            </div>
          </div>
        </div>

        {/* Transaction Overview */}
        <div className="w-1/2">
          <h2>Transaction Overview</h2>
          <div className="flex gap-4 mt-4">
            <div className="w-1/2 dashboard-card-1 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h5>Transaction count</h5>
                  <h6>
                   8000 <span>+7.1%</span>
                  </h6>
                </div>
                <div>
                    <div className='wall-card-icon flex thir'><img src={Transaction} alt="Transaction" /></div>
                </div>
              </div>
              <h4>Total transaction processed today</h4>
            </div>

            <div className="w-1/2 dashboard-card-2 dashboard-card-3">
              <div className="flex items-center justify-between">
                <div>
                  <h5>Total Transaction</h5>
                  <h6>
                    900 <span>+8.5%</span>
                  </h6>
                </div>
                 <div className='wall-card-icon flex sec'><img src={Total} alt="Total" /></div>
              </div>
              <h4>Total value of today’s transaction</h4>
            </div>
          </div>
        </div>
      </div>

      {/* KYC + Merchant Section */}
     
      <div className="flex gap-4 kyc-wapper">
        <div className="w-8/12 bg-white p-4 shadow" style={{ borderRadius: '14px' }}>
         <h5>KYC Details</h5>
          <h6>Customer Verification Overview</h6>
          <div className="flex gap-4 kyc-count p-4">
           
              <div  className="w-1/3 bg-white p-4 shadow mt-3 flex justify-center align-items-center" style={{ borderRadius: '14px' }}>
                <div className='flex justify-center align-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                 <div className='kyc-card-icon flex'><img src={KycCount} alt="KycCount" /></div>
                  <h6>Approval Count</h6>
                  <h5>468</h5> 
                </div>
              </div>
               <div  className="w-1/3 bg-white p-4 shadow mt-3 flex justify-center align-center" style={{ borderRadius: '14px' }}>
                <div className='flex justify-center align-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                   <div className='kyc-card-icon flex'><img src={Completed} alt="Completed" /></div>
                  <h6>Completed Count </h6>
                  <h5>568</h5> 
                </div>
              </div>
               <div  className="w-1/3 bg-white p-4 shadow mt-3 flex justify-center align-center" style={{ borderRadius: '14px' }}>
                <div className='flex justify-center align-center' style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <div className='kyc-card-icon flex'><img src={Kycrejected} alt="Kycrejected" /></div>
                  <h6>Rejected Count </h6>
                  <h5>270</h5> 
                </div>
              </div>
         
          </div>
        </div>

        <div className="w-4/12 bg-white p-4 shadow" style={{ borderRadius: '14px' }}>
          <h5>Merchant and Subscription Overview</h5>
          <p>Business Partner Statistics</p>
          <div className='flex gap-4 mt-4 mb-4  p-4'>
            <div className='kyc-card-icon flex'><img src={Merchantactive} alt="Merchantactive" /></div>
           <div>
             <h5>450</h5>
            <p>Active merchants onboard</p>
           </div>
          </div>
           <div className='flex gap-4 mt-4 mb-4  p-4'>
           <div className='kyc-card-icon flex'><img src={Merchanttotal} alt="Merchanttotal" /></div>
           <div>
             <h5>2900</h5>
            <p>Total active subscriptions</p>
           </div>
          </div>
        </div>
      </div>

      {/* Decline Counts Section */}
      <div className="flex mt-4 gap-4">
        <div className="w-8/12 bg-white">
        <Card className="w-full shadow-md">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between pb-2">
        <CardTitle className="text-lg font-semibold" style={{ fontSize: 22 }}>
          PaybayGo Analytics Overview
        </CardTitle>
        <div className="flex gap-2 mt-2 md:mt-0">
          {["Today", "Yesterday", "Week", "Month", "Year"].map((label, i) => (
            <Button
              key={i}
              variant={label === "Month" ? "default" : "outline"}
              size="sm"
              className={label === "Month" ? "bg-blue-100 text-blue-600" : ""}
            >
              {label}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="transactions"
                stroke="#3B82F6"
                name="Total number of transactions"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22C55E"
                name="Total Revenue"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="merchant"
                stroke="#EF4444"
                name="Total Merchant Revenue"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
        </div>
        <div className="w-4/12 bg-white shadow p-4" style={{ borderRadius: '14px' }}>
          <h5 style={{ fontSize: 22, fontWeight: 700 }}>Decline Counts</h5>
          <p>Transaction failures & wallet recharge issues</p>
          <div className='flex gap-4 mt-4 mb-4  p-4'>
           <div className='kyc-card-icon flex'><img src={Declinefailed} alt="Declinefailed" /></div>
           <div>
             <h5>12</h5>
            <p>Failed transactions today</p>
           </div>
          </div>

          <div className='flex gap-4 mt-4 mb-4  p-4'>
           <div className='kyc-card-icon flex'><img src={Declinewallet} alt="Declinewallet" /></div>
           <div>
             <h5>20</h5>
            <p>Wallet recharge failures</p>
           </div>
          </div>
          

         <div className='flex gap-4 mt-4 mb-4  p-4'>
           <div className='kyc-card-icon flex'><img src={Declineoverall} alt="Declineoverall" /></div>
           <div>
             <h5>39</h5>
            <p>Overall failure rate</p>
           </div>
          </div>

          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard