import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Krzychu",
    lastName: "Pupichu",
    email: "pasodpasod@plop.com",
  };

  return (
    <section className="home">
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
        REcENT TRANS
      </header>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 50 }, { currentBalance: 1400 }]}
      />
    </section>
  );
};
export default Home;
