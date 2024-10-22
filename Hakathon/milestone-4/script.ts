function toggleSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.classList.contains('show')) {
            section.classList.remove('show');
            section.style.display = 'none';
        } else {
            section.classList.add('show');
            section.style.display = 'block';
        }
    }
}