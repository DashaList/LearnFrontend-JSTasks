let createTree = (container, data) => {
    container.innerHTML = createTreeRec(data);
};

let createTreeRec = (data) => {
    let li = '';
    let ul;
    for (let key in data) {
      li += '<li>' + key + createTreeRec(data[key]) + '</li>';
    }
    if (li) {
      ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
};