const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

async function animateSequentially() {
  const alice1 = document.querySelector<HTMLElement>("#alice1");
  const alice2 = document.querySelector<HTMLElement>("#alice2");
  const alice3 = document.querySelector<HTMLElement>("#alice3");

  if (!alice1 || !alice2 || !alice3) {
      console.warn("#alice not found");
      return;
  }

  try {
      await alice1.animate(aliceTumbling1, aliceTiming1).finished;
      await alice2.animate(aliceTumbling1, aliceTiming1).finished;
      await alice3.animate(aliceTumbling1, aliceTiming1).finished;
  } catch (err) {
      if (err instanceof Error) {
          console.log(`Error when animating: ${err.message}`);
      } else {
          console.log('Unknown error occurred');
      }
  }
}

animateSequentially();
