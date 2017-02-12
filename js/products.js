function template(item) {
    return `
        <div class="item" id=${item.name}>
            <img src="res/${item.image}" class="item-image">
            <h3>${item.name}</h3>
            <p class="item-text">${item.description}</p>
        </div>
    `
};

let silvertone = {
    name: 'Bulova Silvertone',
    image: 'bulova_silvertone.jpeg',
    description: `
	Stainless Steel
    	Made in USA or Imported
        Ultra-precise round watch with blue sunray dial, three chronograph sub dials, luminous hands and markers, screw-back, and tachymeter
        43 mm stainless steel case with mineral dial window
        Quartz movement with analog display
        Stainless steel band with double-press deployant closure
        Water resistant to 100 m (330 ft): In general, suitable for swimming and snorkeling, but not scuba diving
    `
}

var items = [];

items.push(template(silvertone));

var container = document.getElementById("item-container");

for (let i = 0; i < items.length; i++) {
    container.insertAdjacentHTML('beforeend', items[i]);
}


