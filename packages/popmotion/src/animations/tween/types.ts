import { Easing } from '../../easing';

export type TweenProps = {
  from?: number,
  to?: number,
  duration?: number,
  ease?: Easing,
  elapsed?: number,
  playDirection?: number,
  flip?: number,
  flipCount?: number,
  loop?: number,
  loopCount?: number,
  yoyo?: number,
  yoyoCount?: number
};

export type TweenInterface = {
  isActive: () => boolean,
  stop: () => void,
  getProgress: () => number,
  getElapsed: () => number,
  pause: () => TweenInterface,
  resume: () => TweenInterface,
  seek: (progress: number) => TweenInterface,
  reverse: () => TweenInterface
};
