export function zeroLeft(n: number) {
  return Math.floor(n).toString().padStart(2, '0');
}

export function secondsToMinutes(seconds: number): string {
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}

export function secondsToTime(seconds: number) {
  const hours = zeroLeft(seconds / 3600);
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${hours}:${min}:${sec}`;
}

export function preencheQtdCiclos(qtdCiclos: number) {
  return new Array(qtdCiclos).fill(true);
}
