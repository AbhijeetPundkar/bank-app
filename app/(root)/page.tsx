import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={ loggedIn?.name || 'Guest'}
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
        banks={[{currentBalance:100.5},{currentBalance:200.1}]}
      />
      
    </section>
  )
}

export default Home