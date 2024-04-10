const adList = [
	`<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=auto data-ad-slot=3295872825 data-full-width-responsive=true style=display:block></ins>`,
	"<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=auto data-ad-slot=4695444437 data-full-width-responsive=true style=display:block></ins>",
	"<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=fluid data-ad-layout=in-article data-ad-slot=5634823028 style=display:block;text-align:center></ins>",
	"<ins class=adsbygoogle data-ad-client=ca-pub-2188063137129806 data-ad-format=fluid data-ad-layout=in-article data-ad-slot=8481296455 style=display:block;text-align:center></ins>",
];
function appendAd(el) {
	const ad = adList.shift();
	if (ad) {
		const nel = document.createElement("div");
		nel.innerHTML = ad;
		const parent = el.parentNode;
		if (parent) {
			parent.insertBefore(nel, el.nextElementSibling);
		}
	}
}
const isDev = location.port == "4000";
const wrapper = document.getElementById("content-wrapper");
const elements = shuffleArray(
	Array.from(wrapper.querySelectorAll("pre,h1,h2,h3,h4,h5"))
);
elements.forEach(appendAd);
document.querySelectorAll("ins.adsbygoogle").forEach((el, i) => {
	if (el.children.length == 0) {
		const uid = `#${el.id}.${el.className}[${i}]`;
		console.log("apply", uid);
		if (isDev) {
			el.style.border = "1px solid red";
			el.setAttribute("data-adtest", "on");
		}
		(adsbygoogle = window.adsbygoogle || []).push({});
	}
});

/**
 * Shuffles the elements of an array.
 * @template T
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} - The shuffled array.
 */
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
