"use client";
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
  return (
    <MotionTransition className="max-w-5xl py-7 mx-auto md:py-24">
      <div className="justify-between md:flex ">
        {dataCounter.map(({ id, startNumber, endNumber, text }) => (
          <div
            key={id}
            className="p-5 text-2xl text-center md:text-left flex flex-col items-center border-r-2 border-secondary"
          >
            <div className="flex items-center gap-1">
              <p className="text-4xl font-semibold text-secondary">
                <CountUp
                  start={startNumber}
                  end={endNumber}
                  duration={1.5}
                  enableScrollSpy
                />{" "}
              </p>
              <span className="text-4xl font-semibold text-secondary">+</span>
            </div>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </MotionTransition>
  );
}
