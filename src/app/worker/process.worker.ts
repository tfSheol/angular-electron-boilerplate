/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  console.log('worker', response);
  postMessage(response);
});
