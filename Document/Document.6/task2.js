let links = document.querySelector('a');
for (let link of links) {
    let href = link.getAttribute('href');
    if (link.href.includes('://') && !href.startsWith('http://internal.com')) {
        link.style.color = 'orange';
    }
}