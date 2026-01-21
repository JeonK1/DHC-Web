"use client";

import { useEffect } from "react";
import { logEvent } from "@/utils/firebase";
import { ScreenNameType } from "./screenNames";

export const useScreenImpression = (screenName: ScreenNameType) => {
  useEffect(() => {
    logEvent("screen_view", {
      screen_name: screenName,
    });
  }, [screenName]);
};
