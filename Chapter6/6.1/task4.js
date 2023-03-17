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
  
let printList1 = (list) => {
    alert(list.value);

    if (list.next) {
        printList1(list.next);
    }
};

let printList2 = (list) => {
    let list1 = list;

    while (list1) {
        alert(list1.value);
        list1 = list1.next;
    }
};