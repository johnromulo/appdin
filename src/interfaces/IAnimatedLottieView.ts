export interface IAnimatedLottieView {
  play(startFrame?: number, endFrame?: number): void;
  reset(): void;
  pause(): void;
  resume(): void;
}
