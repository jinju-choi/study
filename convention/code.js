document.addEventListener('DOMContentLoaded', () => {
	codeChange()
})

const codeChange = () => {
	$('.code-view-box').each(function (i) {
		var $this = $(this);
		var code = $this.html();
		var indentReplacedCode = $this
			.html()
			.split(/[\r]?\n/gi)
			.reduce(
				function (p, c, i) {
					if (i === 1)
						p.replaceIndent = Array.prototype.filter
							.call(c, function (c) {
								return c === '\t';
							})
							.join('');
					return p.codeLines.push(c.replace(p.replaceIndent, '')), p;
				},
				{ codeLines: [], replaceIndent: '' }
			)
			.codeLines.join('\r\n');
		var parsedCode = indentReplacedCode.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
		var hasGrid = $this.parent().hasClass('code-grid');
	
		var $output = '';
		$output += '<div class="demo-contents' + ($this.hasClass('dark') ? ' dark' : '') + ($this.hasClass('gray') ? ' gray' : '') + '">';
		if ($this.data('title')) {
			$output += '<div class="code-title">' + $this.data('title') + '</div>';
		}
		$output += code;
		$output += '</div>';
		$output += '<button type="button" class="code-view-btn"><span>code</span></button>';
		$output += '<pre class="code"><code class="html">' + parsedCode + '</code></pre>';
	
		$this.replaceWith(hasGrid ? '<div class="code-grid-col">' + $output + '</div>' : $output);
	});
	
	hljs.configure({ tabReplace: '<span class="code-indent">\t</span>' });
	
	$('pre.code > code').each(function (i, block) {
		hljs.highlightBlock(block);
	});
	
	$('.code-view-btn').on('click', function () {
		var $this = $(this);
	
		if ($this.hasClass('active')) {
			$this.removeClass('active');
			$this.find('span').text('code');
			$this.next().slideUp(100);
		} else {
			$this.addClass('active');
			$this.find('span').text('hide');
			$this.next().slideDown(100);
		}
	});
}
