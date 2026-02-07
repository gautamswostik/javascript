import React, { useState, useEffect } from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import * as Haptics from "expo-haptics";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  style?: StyleProp<TextStyle>;
  enableHaptic?: boolean;
  hapticStyle?: "light" | "medium" | "heavy" | "selection";
  onComplete?: () => void;
}

export const TypewriterText = ({
  text,
  speed = 50,
  delay = 0,
  style,

  enableHaptic = false,
  hapticStyle = "light",
  onComplete,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex));

        if (enableHaptic) {
          triggerHaptic(hapticStyle);
        }

        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }

    if (currentIndex > text.length && onComplete) {
      if (enableHaptic) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
      onComplete();
    }
  }, [currentIndex, text, speed, delay, onComplete, enableHaptic, hapticStyle]);

  const triggerHaptic = (style: string) => {
    switch (style) {
      case "light":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case "medium":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        break;
      case "heavy":
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        break;
      case "selection":
        Haptics.selectionAsync();
        break;
      default:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  return <Text style={style}>{displayedText}</Text>;
};
