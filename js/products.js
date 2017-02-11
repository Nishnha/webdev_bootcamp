function template(name, img, description) 
    return `
        <div class="item" id=${name}>
            <img src="res/${img}" height="200px" width="200px">
            <h3>${name} -- ${description}</h3>
        </div>
     `
};

let sticker = template("potato", "potato.png", "a small russet");
