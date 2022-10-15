const positions = [
  [14, 11],
  [25, 13],
  [41, 22],
  [24, 31],
  [36, 37],
  [14, 45],
];

function pixelToEm(n) {
  return n / 16;
}

function dynamicPositioning(center, cursor) {
  let displacement = center - pixelToEm(cursor);
  return center + 0.2 * Math.pow(Math.abs(displacement), -0.5) * displacement;
}

window.onload = function () {
  for (let i = 0; i < positions.length; i++) {
    const bubble = document.getElementById("bubble" + (i + 1));
    document.body.addEventListener("mousemove", function (e) {
      (bubble.style.left =
        dynamicPositioning(positions[i][0], e.clientX) + "em"),
        (bubble.style.top =
          dynamicPositioning(positions[i][1], e.clientY) + "em");
    });
  }
};
