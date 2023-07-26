const codeBox = document.querySelectorAll('.code-view-box');

document.addEventListener("DOMContentLoaded", function (e) {
	codeBox.forEach(function(el){
		var $this = el;
		var code = $this.innerHTML;
		var indentReplacedCode = $this
			.innerHTML
			.split(/[\r]?\n/gi)
			.reduce(
				function (p, c, i) {
					if (i === 1)
						p.replaceIndent = Array.prototype.filter
							.call(c, function (c) {
								return c === "\t";
							})
							.join("");
					return p.codeLines.push(c.replace(p.replaceIndent, "")), p;
				},
				{ codeLines: [], replaceIndent: "" }
			)
			.codeLines.join("\r\n");
		var parsedCode = indentReplacedCode
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
		// var hasGrid = el.parentElement.hasClass("code-grid");
	
		var $output = "";
		$output += '<div class="demo-contents">';
		var title = $this.getAttribute('data-title')
		if (title) {
			$output += '<div class="code-title">' + title + "</div>";
		}

		$output += code;
		$output += "</div>";
		$output +=
		'<button type="button" class="code-view-btn"><span>code</span></button>';
		$output +=
		'<pre class="code"><code class="html">' + parsedCode + "</code></pre>";
		
		el.replaceWith(el.innerHTML = $output);

		// $this.replaceWith(
		// 	el.parentElement.classList.contains('code-grid') ? '<div class="code-grid-col">' + $output + "</div>" : $output
		// );
	})


	hljs.configure({ tabReplace: '<span class="code-indent">\t</span>' });

	document.querySelectorAll('pre code').forEach((el) => {
		hljs.highlightElement(el);
		console.log(el);
	});
	
	
});
