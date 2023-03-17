let lis = document.querySelectorAll('li');

for (let li of lis) {
    let liChildren = li.querySelectorAll('li').length;
    if (!liChildren) continue;

    li.firstChild.data += ' [' + liChildren + ']';
}