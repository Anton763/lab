var selectedItem = 0,
  directory = document.querySelectorAll('.main .container'),
  itemRigth = document.querySelectorAll('.rigth .container-item'),
  selectedDirectory = 0,
  selectedItemRigth = 0,
  item = document.querySelectorAll('.left .container-item');

function goToItem(elementItem) {
  item[selectedItem].className = 'container-item';
  selectedItem = (elementItem + item.length) % item.length;
  item[selectedItem].className = 'container-item selected';
}

function goToItemRigth(elementItemRigth) {
  itemRigth[selectedItemRigth].className = 'container-item';
  selectedItemRigth = (elementItemRigth + itemRigth.length) % itemRigth.length;
  itemRigth[selectedItemRigth].className = 'container-item selected';
}

function goToDirectory(elementDirectory) {
  directory[selectedDirectory].className = 'container';
  selectedDirectory = (elementDirectory + directory.length) % directory.length;
  directory[selectedDirectory].className = 'container selected';
}
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    goToDirectory(selectedDirectory + 1);
  }
});
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft') {
    goToDirectory(selectedDirectory - 1);
  }
});
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowDown' && selectedDirectory == 0) {
    goToItem(selectedItem + 1);
  }
});
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp' && selectedDirectory == 0) {
    goToItem(selectedItem - 1);
  }
});

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowDown' && selectedDirectory == 1) {
    goToItemRigth(selectedItemRigth + 1);
  }
});
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowUp' && selectedDirectory == 1) {
    goToItemRigth(selectedItemRigth - 1);
  }
});