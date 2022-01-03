import { useEffect, useMemo, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";
import { userRequest } from "../../requestMethods";
import "./Home.css";

const Home = () => {
  // const [userStats, setUserStats] = useState([]);

  // const MONTHS = useMemo(
  //   () => [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Agu",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   []
  // );

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get("/users/stats");
  //       console.log(res.data);
  //       res.data.map((item) =>
  //         setUserStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], "Active User": item.total },
  //         ])
  //       );
  //     } catch {}
  //   };
  //   getStats();
  // }, [MONTHS]);

  return (
    <div className="home">
      {/* <FeaturedInfo /> */}
      {/* <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
