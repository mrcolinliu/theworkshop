$(document).ready(function(){
	$(".button.selection").click(function(){
		
		showPopup('#popup_selection', {
			close: function(){

				var $checkboxs = $("#popup_selection .checkbox");
				var output = [];

				for(var i = 0; i < $checkboxs.length; i++)
				{
					var $checkbox = $checkboxs.eq(i);
					if($checkbox.prop("checked"))
						output.push($checkbox.attr("value"));
				}

				$(".selection_wrapper").html(output.join(", "));
			}
		})
	})

	

})