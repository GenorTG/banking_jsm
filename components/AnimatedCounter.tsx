"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({
  amount,
  prefix,
  suffix,
  duration,
  decimal,
  decimals,
}: {
  amount: number;
  prefix: string;
  suffix: string;
  duration: number;
  decimal: string;
  decimals: number;
}) => {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        prefix={prefix}
        suffix={suffix}
        duration={duration}
        decimal={decimal}
        decimals={decimals}
      ></CountUp>
    </div>
  );
};
export default AnimatedCounter;
