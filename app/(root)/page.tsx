import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Kisara', lastName:'Batugedara', email: 'jewel@Banking.com'};

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type ="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage  your transactions and account efficiently"
                />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1500.89}
                />
            </header>

            RECENT TRANSACTIONS
        </div>

        <RightSideBar
         user={loggedIn}
         transactions={[]}
         banks={[]}
         />
    </section>
  )
}

export default Home
