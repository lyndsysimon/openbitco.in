		$(document).ready(function(){
			$("#knowledge_base_div").hide();
			$("#organization_div").hide();
			$("#community_div").hide();
			$("#more_info_div").hide();
			$('#show_kb').click(function(){
				if ($("#more_info_div").is(':hidden')) {
					$("#more_info_div").slideToggle(function(){
						$("#knowledge_base_div").slideToggle();
					});
				} else {
					if ($("#knowledge_base_div").is(':hidden')) {
							$("#organization_div").hide();
							$("#community_div").hide();
							$("#knowledge_base_div").slideToggle();
						} else {
						$("#more_info_div").slideToggle();
						$("#knowledge_base_div").hide();
						$("#organization_div").hide();
						$("#community_div").hide();
					}
				}
			});
			$('#show_o').click(function(){
				if ($("#more_info_div").is(':hidden')) {
					$("#more_info_div").slideToggle(function(){
						$("#organization_div").slideToggle();
					});
				} else {
					if ($("#organization_div").is(':hidden')) {
						$("#knowledge_base_div").hide();
						$("#community_div").hide();
						$("#organization_div").slideToggle();
					} else {
						$("#more_info_div").slideToggle();
						$("#knowledge_base_div").hide();
						$("#organization_div").hide();
						$("#community_div").hide();
					}
				}
			});
			$('#show_c').click(function(){
				if ($("#more_info_div").is(':hidden')) {
					$("#more_info_div").slideToggle(function(){
						$("#community_div").slideToggle();
					});
				} else {
					if ($("#community_div").is(':hidden')) {
						$("#knowledge_base_div").hide();
						$("#organization_div").hide();
						$("#community_div").slideToggle();
					} else {
						$("#more_info_div").slideToggle();
						$("#knowledge_base_div").hide();
						$("#organization_div").hide();
						$("#community_div").hide();
					}
				}
			});
		});
