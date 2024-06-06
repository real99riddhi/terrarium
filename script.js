dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
function dragElement(terrariumElement) {
	let pos1= 0,
        pos2= 0,
        pos3= 0,
        pos4= 0;

    terrariumElement.onpointermove = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointerdown = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointerdown = null;
    }

}

let plants = ['plant1', 'plant2', 'plant3', 'plant4', 'plant5', 'plant6', 'plant7', 'plant8', 'plant9', 'plant10'];

plants.forEach(function(plantId) {
    let plant = document.getElementById(plantId);
    plant.draggable = true;
    plant.ondragstart = function(e) {
        e.dataTransfer.setData('text/plain', plantId);
    };
});

let jar = document.getElementById('jar');
  jar.ondragover = function(e) {
    e.preventDefault();
  }

  jar.ondrop = function(e) {
    e.preventDefault();
    let plantId = e.dataTransfer.getData('text/plain');
    let plant = document.getElementById(plantId);
    jar.appendChild(plant);
  }
