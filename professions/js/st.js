      var questions= $(".question").length;
      var total = 0;
      var avg = 0;
	  var currQ=0;
	  var myQuestions=$("section.q-n-a");
	  
	  myQuestions.each(function(index){
		  $(this).attr("id", index+1);
		  if(index==0)
		  {
			  $(this).find(".previous").remove();
		  }
	  })
	  $("#quiz-area").html(myQuestions);
	  function showQ(){
		  $("section.q-n-a").hide();
		  currQ++;
		  if($("#"+currQ).length>0){
			  $("#"+currQ).fadeIn(200);
		  } else {
				$(".finish").fadeIn();
		  }
	  }
	  showQ();
	  
	  $(".previous, .next, .missed").click(function(){
		  if($(this).hasClass("previous")){
			  currQ-=2;
		  } else if($(this).hasClass("missed")){
			  currQ = 0;
			  $(".response, .finish, .missed").hide();
		  }
		  showQ();
	  })
	  
      $(".answer").on("click", function(){
		if($(this).parent().find(".selected").length>0){
			total -= $(this).parent().find(".selected").data("value");
			$(this).parent().find(".selected").removeClass("selected");
		}
		
        $(this).addClass("selected");
        total+=$(this).data("value");
        console.log(total);
      })
	  
	  $(".finish").on("click", function()
	  {
		  avg= total/questions;
		  var message ="";
		  
		  if($(".selected").length ===questions)
		  {
			  if(avg==1) {
				message = "Техник по защите информации";
			  } else if(avg==1.25) {
				  message="Техник-программист";
			  } else if(avg==1.5) {
				  message="Техник по эксплуатации и ремонту";
			  } else if(avg==1.75) {
				  message="Оператор службы диспетчерской";
			  } else if(avg<=2.25) {
				  message="Техник по инструменту";
			  } else if(avg<=2.75) {
				  message="Техник по наладке и испытаниям";
			  } else if(avg<=3.25) {
				  message="Техник-электроник";
			  }else if(avg=3.5) {
				  message="Техник-технолог";
			  }else if(avg<=4) {
				  message="Техник";
			  }
			  $("#quiz-area, .finish").hide();
		  }else {
			message="Вы пропустили минимум 1 вопрос";
			$(".missed").show();
		  }
		  $(".response p").text(message)
		  $(".response").show()
	  })