		$(document).ready(function(){
			var kb_div = $("#knowledge_base_div");
			var o_div = $("#organization_div");
			var c_div = $("#community_div");
			var mo_div = $("#more_info_div");
			var ac_div = $("#academy_div");
			var bc_div = $("#beginner_div");
			var current_focus='';
			var current_sub_focus='';

			function div_left(div_name) {
				var offset = div_name.offset();
				return offset.left;
			}
			mo_div.hide();
			function reset_offset() {
				kb_div.offset({ left: -2000 });
				o_div.offset({ left: -2000 });
				c_div.offset({ left: -2000 });
				current_focus='';
			}
			function slide_in(va) {
				va.animate({ left: 0 });
			}
			function slide_out(va) {
				va.animate({ left: 2000 }, function() {
					va.offset({ left: -2000 });
				});
			}
			function toggle_main(va) {
				if (!current_focus) {
					current_focus = va;
					if (!mo_div.is(':visible')) {
						mo_div.slideToggle();
					}
					slide_in(va);
				} else if (current_focus == va) {
					slide_out(current_focus);
					current_focus='';
					if (mo_div.is(':visible')) {
						mo_div.slideToggle();
					}
				} else {
					slide_out(current_focus);
					current_focus = va;
					slide_in(current_focus);
				}
			}
			function toggle_sub(va) {
				if (mo_div.is(':visible')) {							
					mo_div.slideToggle();
					reset_offset();
				}
				if (!current_sub_focus) {
					current_sub_focus = va;
					if (!current_sub_focus.is(':visible')) {
						current_sub_focus.slideToggle();
					}
				} else if (current_sub_focus == va) {
					current_sub_focus='';
					if (va.is(':visible')) {
						va.slideToggle();
					}
				} else {
					if (current_sub_focus.is(':visible')) {
						current_sub_focus.slideToggle();
					}
					current_sub_focus = va;
					if (!current_sub_focus.is(':visible')) {
						current_sub_focus.slideToggle();
					}
				}
			}
			$('#show_kb').click(function(){
				toggle_main(kb_div);
			});
			
			$('#show_o').click(function(){
				toggle_main(o_div);
			});
			$('#show_c').click(function(){
				toggle_main(c_div);
			});
			$('#beginner_course').click(function(){
				toggle_sub(bc_div);
			});
			$('#show_academy').click(function(){
				toggle_sub(ac_div);
			}); 
			
		});

		
		
		