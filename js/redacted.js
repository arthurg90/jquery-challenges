let paragraphs = $("p");

paragraphs.each((i, paragraph) => {

	let p = $(paragraph);
	let text = p.text();

	if (text.search("secret moon base") !== -1) {
		p.addClass("redacted");
	}

});


