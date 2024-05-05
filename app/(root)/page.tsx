import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.name || "Guest"}
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
