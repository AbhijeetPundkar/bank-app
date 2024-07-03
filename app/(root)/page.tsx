import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'

const Home = () => {
  const loggedIn = { firstName: 'Abhi', lastName: 'Pundkar', email: 'abhi021102@gmail.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={ loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and 
            transactions with ease"
          />

          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance={1000.00}
          />
        </header>

        RECENT TRANSACTIONS

      </div>

      <RightSideBar
        user = {loggedIn}
        transactions = {[]}
        banks={[]}
      />
      
    </section>
  )
}

export default Home