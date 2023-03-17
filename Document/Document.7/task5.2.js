let createTree = (container, data) => {
    container.append(createTreeRec(data));
};

let createTreeRec = (data) => {
    if (!Object.keys(data).length) return;

    let ul = document.createElement('ul');

    for (let key in data) {
        let li = document.createElement('li');
        li.innerHTML = key;

        let childrenUl = createTreeRec(data[key]);
        if (childrenUl) {
          li.append(childrenUl);
        }

        ul.append(li);
    }

    return ul;
}