const countdown = () => {
  const gap = new Date("May 27, 2026 00:00:00") - new Date();

  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const m = Math.floor((gap / (1000 * 60)) % 60);
  const s = Math.floor((gap / 1000) % 60);

  document.querySelector(".day").innerText = d;
  document.querySelector(".hour").innerText = h;
  document.querySelector(".min").innerText = m;
  document.querySelector(".sec").innerText = s;
};

setInterval(countdown, 1000);
