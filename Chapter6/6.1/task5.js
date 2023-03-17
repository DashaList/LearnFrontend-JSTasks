let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

let printListReverse1 = (list) => {
    if (list.next) {
        printList1(list.next);
    }

    alert(list.value);
};

let printListReverse2 = (list) => {
    let list1 = list;
    let listArr = [];

    while (list1) {
        listArr.push(list1.value);
        list1 = list1.next;
    }

    listArr.forEach(el => alert(el));
};