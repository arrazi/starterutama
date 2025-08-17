document.addEventListener('DOMContentLoaded', () => {
    const tagContainer = document.getElementById('tag-container');
    if (!tagContainer) return;

    const tags = tagContainer.querySelectorAll('.imgur-tag-card');
    const moreBtn = tagContainer.querySelector('.imgur-more-tags-btn');

    // 1. Atur featured tags (2 pertama)
    tags.forEach((tag, index) => {
        if (index < 2) {
            tag.classList.add('featured-tag');
        } else {
            tag.classList.add('regular-tag');
        }
    });

    // 2. Sembunyikan tag ke-5 dst (kecuali featured)
    if (tags.length > 4) {
        moreBtn.style.display = 'block';
        
        tags.forEach((tag, index) => {
            if (index >= 4 && !tag.classList.contains('featured-tag')) {
                tag.classList.add('hidden-tag');
            }
        });
    }

    // 3. Handle MORE TAGS button
    moreBtn.addEventListener('click', () => {
        tagContainer.querySelectorAll('.hidden-tag').forEach(tag => {
            tag.classList.remove('hidden-tag');
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(10px)';
            
            // Animasi fade in
            setTimeout(() => {
                tag.style.transition = 'all 0.3s ease';
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 10);
        });

        moreBtn.style.display = 'none';
    });
});