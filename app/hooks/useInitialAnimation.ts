import { useContext } from "react";
import { InitialAnimationContext } from "../components/providers/InitialAnimationProvider";

export default function useInitialAnimation() {
  const initialAnimation = useContext(InitialAnimationContext)

  if (!initialAnimation) {
    throw new Error("useInitialAnimation must be used inside a InitialAnimationProvider")
  }

  return initialAnimation
}