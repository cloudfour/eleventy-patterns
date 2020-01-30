import iframeResizer from 'iframe-resizer';

document.addEventListener('DOMContentLoaded', () => {
  const previewFrames = [...document.querySelectorAll('.EP_js-resize-iframe')];

  previewFrames.forEach(frame =>
    iframeResizer.iframeResizer(
      {
        heightCalculationMethod: 'lowestElement'
      },
      frame
    )
  );
});
