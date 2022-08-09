import { useEffect, useState } from "react";
import dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/relativeTime"));

export default function Timer({ time }) {
  const [realtime, setRealtime] = useState("");

  const timerHandler = () => {
    setRealtime(dayjs(time).add(1, "second").fromNow());
  };

  useEffect(() => {
    timerHandler();
    const interval = setInterval(timerHandler, 10000);
    return () => clearInterval(interval);
  });

  return <>{realtime}</>;
}
