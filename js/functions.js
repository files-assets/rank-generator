/*
 *! Important Info:
 *
 * CSS Rank Generator (Javascript)
 * @author Luiz~
 * @see <a href="http://ajuda.forumeiros.com/">Fórum dos Fóruns</a>
 * @licence MIT
 *
 */
(function ($) {
	'use strict';

	$(function () {

		var $pseudo = $('.pseudo-color');
		$pseudo.each(function () {

			var $this = $(this);

			var text = $this
				.next('label')
					.text()
			;

			$this.prev('input')
				.on('change', function () {

					var $input = $(this);
					var color = $input.val();

					$this.css({
						backgroundColor: color,
						borderColor: color
					});

					$this.next('label')
						.text(text + ' (' + color +')');
				})
			;
		});

		var $result = $('#pre-result');
		var $rank = $result.find('.rank');

		// Text:
		$('#text-rank').on('keyup', function () {
			$rank.html([
				'<i class="fa fa-cog"></i>',
				' ' + $(this).val(),
			].join('\n'));
		});

		// Background-color:
		$('#background-color-val').on('change', function () {
			$rank.css({
				backgroundColor: $(this).val()
			});
		});

		// Color:
		$('#color-val').on('change', function () {
			$rank.css({
				color: $(this).val()
			});
		});

		// Font Awesone icon:
		$('#icon-val').on('keyup', function () {
			$rank
				.find('i')
					.attr('class', 'fa ' + $(this).val())
			;
		});

		$('#code-generate').on('click', function () {

			var config = {
				text: $('#text-rank').val(),
				background: $('#background-color-val').val(),
				color: $('#color-val').val(),
				icon: $('#icon-val').val()
			};

			var $this = $(this);
			$this.addClass('fading fadeOut');

			var $rank_code = $('#generated-code-rank');
			var $css_code = $('#generated-code-css');

			$rank_code.val([
				'<span class="rank"><i class="fa ' + config.icon + '"></i>' + config.text + '</span>'
			].join(''));

			$css_code.val([
				' .rank {',
				'  padding: 5px;',
				'  border-radius: 3px;',
				'  background-color: ' + config.background + ';',
				'  color: ' + config.color + ';',
				'}',
			].join('\n'));
			// END!
		});

		$('#repeat-generation').on('click', function () {
			$('textarea').val('');
		});
		/*! End Form Javascript: */

		/*
		 * Generate Button Hover Effect:
		 */
		$('.gerar').hover(function () {
			$('body, h3').addClass('body-green-bg');
		}, function () {
			$('body, h3').removeClass('body-green-bg');
		});

		/*
		 * TextArea select content:
		 */
		$('<a>', {
			href: 'javascript:void(0)',
			class: 'fa fa-copy'
		}).prependTo('.textarea-wrapper')
			.on('click', function () {

				var $this = $(this);
				$this.next('textarea').select();

			})
		;

		/**
		 * Scroll Top:
		 */
		$('#scroll-top').on('click', function () {
			$('html, body').stop().animate({scrollTop: 0}, 'slow');
		});
	});
}(jQuery));
