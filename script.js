document.addEventListener('DOMContentLoaded', () => {
  const galleryFilter = document.getElementById('galleryFilter');
  const galleryGrid = document.getElementById('galleryGrid');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModalBtn = document.getElementById('closeModal');

  const photos = [
    { src: 'https://images.pexels.com/photos/13334162/pexels-photo-13334162.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load', title: '書', description: '旅行的意義 旅行不僅是離開熟悉的地方，它更是一場心靈的冒險。在陌生的土地上，每一步都充滿了探索的魅力。你會發現不同的文化、習俗，還有不一樣的天氣和風景，這一切都讓人不禁思考：為什麼我們總是需要這麼多的刺激，才能讓生活更有意義？其實，旅行的真正意義並不是目的地，而是過程中的改變。每一次的出發，都是對自己的一次挑戰，讓我們學會放下那些不必要的包袱，去迎接未知的未來。在旅行中，你或許會遇到困難、會迷路、會迷茫，但正是這些經歷構成了你成長的故事。所以，不要等到什麼時候才去旅行，當你有了出發的想法，就應該立刻開始。因為每一段旅程，都是人生最美的風景。', category: 'Photoshop' },
    { src: 'https://images.pexels.com/photos/8735603/pexels-photo-8735603.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load', title: '書本', description: '健康生活的態度 生活不僅僅是忙碌和生存，還應該有質感和樂趣。健康的生活方式，不是極端的飲食或苛刻的健身計劃，而是能夠讓自己感到愉快並且身心平衡的選擇。首先，保持心情愉快非常重要。很多時候，壓力和焦慮會讓我們的健康狀況迅速惡化。學會放慢腳步，給自己一個喘息的空間，會讓你活得更輕鬆。其次，合理的飲食和適當的運動是每個人都可以做到的事。健康的飲食不必一味追求減肥，重要的是找到自己喜歡並且能持續下去的方式。更重要的是，享受每一刻，無論是跟朋友的一場聚會，還是與家人的溫馨時光，都能給你帶來最真實的快樂。因為健康不只是身體的狀況，更是整個人的生活質量。', category: 'Illustrator' },
    { src: 'https://images.pexels.com/photos/29756525/pexels-photo-29756525.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load', title: '書本', description: ' 讀書的力量 讀書是一種奇妙的體驗，它不僅能擴展你的知識面，還能開啟你對世界的不同理解。隨著你翻開每一頁，你會發現，自己曾經以為的一切，都可以被重新解釋。有些書，像是一位知識的導師，帶領你走進不同的領域，讓你學會如何思考問題，如何解決困難。還有一些書，它們像是一面鏡子，讓你能夠深刻地了解自己，了解內心的渴望與困惑。讀書的最大魅力，不在於其內容的多樣性，而是在於它能讓你不斷進步，從不同的角度看待這個世界。它是一種精神的養分，能讓你的思想更加深邃，也讓你的人生更加豐富。每天讀幾頁書，不僅能提高你的專業知識，還能幫助你在日常生活中做出更好的決策。', category: '手繪' },
    { src: 'https://images.pexels.com/photos/8383421/pexels-photo-8383421.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load', title: 'book', description: '生活中的小確幸 有時候，我們總是追逐著遠大的目標，卻忽視了生活中的小確幸。那一杯暖心的咖啡、一場突如其來的微笑，甚至只是早晨陽光透過窗簾的瞬間，都能讓我們的心情瞬間變好。小確幸的魅力在於它的簡單和即時，它不需要太多的計劃或是奢華的裝飾，往往就在平凡的生活中悄悄出現。其實，生活中的美好就在於細節，無需過於奢求，反而能在最不起眼的地方找到快樂。學會珍惜這些小確幸，會讓你對每一天都充滿感恩，讓生活的質感在不經意中悄然提升。讓我們在忙碌中找到片刻的安寧，學會享受每一個當下。', category: 'Photoshop' },
    { src: 'https://images.pexels.com/photos/29179297/pexels-photo-29179297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'BOOK', description: '自我成長的旅程 成長是一個漫長而曲折的過程，每一步都充滿了挑戰與機會。有時候，成長並不是指年齡的增長，而是心態的成熟。你會發現，當你在生活中積極面對困難時，你的內心也在逐漸強大。自我成長並非一蹴而就，它需要時間與耐心。每一次的挫折，都是你成長的養分，每一次的努力，都是你未來成功的基石。成功不僅是達成某個目標，更多的是在這個過程中學會如何應對失敗、如何面對自己內心的恐懼。所以，不要焦慮自己的進步速度，給自己時間。你會發現，當你逐步擺脫不安，成為自己想成為的人時，你的生活也會因此變得更加充實。', category: 'Illustrator' },
    { src: 'https://images.pexels.com/photos/23021404/pexels-photo-23021404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: '冊', description: '節奏與生活 現代人的生活節奏越來越快，這讓我們常常感覺到疲憊不堪。工作、家庭、社交，每一個方面都需要我們去應對，讓人難以喘息。然而，真正的生活並不是盲目追求速度，而是找到適合自己的節奏。適當的放慢腳步，不僅能讓你更好地享受當下，也能幫助你更清楚地思考自己的方向。你不需要和別人競爭，因為每個人都有自己的節奏。無論是休息，還是投入工作，找到平衡點，讓自己有足夠的時間去享受每一個時刻。人生不是一場急功近利的比賽，而是一場可以慢慢品味的旅程。學會調整自己的節奏，你會發現生活也變得更有意義。', category: '手繪' },
    { src: 'https://images.pexels.com/photos/26586337/pexels-photo-26586337.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load', title: '實作範例', description: '這是一個實作範例的描述，展示了如何將理論應用於實際操作中，並通過實踐來驗證和改進設計理念。', category: '實作' },
  ];

  // Gallery Filter
  galleryFilter.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const category = e.target.getAttribute('data-category');
      galleryFilter.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      renderGallery(category);
    }
  });

  // Render Gallery
  function renderGallery(category) {
    galleryGrid.innerHTML = '';
    const filteredPhotos = category === '全部' ? photos : photos.filter(photo => photo.category === category);
    filteredPhotos.forEach(photo => {
      const item = document.createElement('div');
      item.classList.add('gallery-item');
      item.innerHTML = `<img src="${photo.src}" alt="${photo.title}"><div class="gallery-title">${photo.title}</div>`;
      item.addEventListener('click', () => openModal(photo));
      galleryGrid.appendChild(item);
    });
  }

  // Open Modal
  function openModal(photo) {
    modalImg.src = photo.src;
    modalTitle.textContent = photo.title;
    modalDescription.textContent = photo.description;
    modal.classList.add('active');

    // 檢查圖片是否為橫向並放大
    modalImg.onload = () => {
      const isHorizontal = modalImg.naturalWidth > modalImg.naturalHeight;
      modalImg.classList.toggle('horizontal', isHorizontal);
    };
  }

  // Close Modal
  closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

  // Initial Render
  renderGallery('全部');
});