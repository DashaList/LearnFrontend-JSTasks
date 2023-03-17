let option = genres.options[genres.selectedIndex];
alert(option.value);
alert(option.text);

let newOption = new Option("Классика", "classic");
genres.append(newOption);
newOption.selected = true;