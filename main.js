

document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  const railItems = document.querySelectorAll('.rail-item');
  const contentBlocks = document.querySelectorAll('.rail-block');

  const switchTab = (rail) => {
    const targetId = rail.getAttribute('data-target');
    const targetBlock = document.getElementById(targetId);

    railItems.forEach(item => item.classList.remove('is-active'));
    contentBlocks.forEach(content => {
      content.classList.remove('is-visible');
    });

    rail.classList.add('is-active');
    if (targetBlock) {
      targetBlock.classList.add('is-visible');
    }
  };

  railItems.forEach(rail => {
    rail.addEventListener('mouseenter', () => {
      if (window.matchMedia('(hover: hover)').matches) {
        switchTab(rail);
      }
    });

    rail.addEventListener('click', () => {
      switchTab(rail);
    });
  });
});
