document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.boxed');
  boxes.forEach(box => {
    const header = box.querySelector('.boxed-title');

    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        boxes.forEach(b => b.classList.remove('opened'));
        box.classList.add('opened');
      });
    });

    box.querySelector('.boxed-title')?.addEventListener('click', () => {
      const isOpen = box.classList.contains('opened');
      boxes.forEach(b => b.classList.remove('opened'));
      if (!isOpen) {
        box.classList.add('opened');
      }
    });
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
