/* 

	5. Init Timer

	*/
	
	function initTimer()
	{
		if($('.event_timer').length)
    	{
	    	//Для определения даты Православной пасхи по старому стилю необходимо:
        
        // Разделить номер года на 19 и определить остаток от деления a.
        // Разделить номер года на 4 и определить остаток от деления b.
        // Разделить номер года на 7 и определить остаток от деления c.
        // Разделить сумму 19a + 15 на 30 и определить остаток d.
        // Разделить сумму 2b + 4c + 6d + 6 на 7 и определить остаток e.
        // Определить сумму f = d + e.
        // (по старому стилю) Если f ≤ 9, то Пасха будет праздноваться 22 + f марта; если f > 9, то Пасха будет праздноваться f — 9 апреля.
        // (по новому стилю в XX—XXI веках) Если f ≤ 26, то Пасха будет праздноваться 4 + f апреля; если f > 26, то Пасха будет праздноваться f — 26 мая.
        
        // comment lines below
	    	
	    	//date.setDate(date.getDate() + 3);
	    	//var target_date = date.getTime();
	    	//----------------------------------------
	    	var date = new Date();
        let easter_year = new Date().getFullYear();
        let easter_day;
        let target_date;
        let a, b, c, da, e, f;
        let event_day = $('.event_day');
        let event_month = $('.event_month');
        
        let HausAlgorithm = function(easter_year){
          a = easter_year%19;
          console.log(a);
          b = easter_year%4;
          console.log(b);
          c = easter_year%7;
          console.log(c);
          da=(19*a+15)%30;
          console.log(da);
          e = (2*b  + 4*c + 6*da + 6)%7;
          console.log(e);
          f = da + e;
          console.log("f="+f);
          
          if(f<=26){
            easter_day = 4+f;
            target_date = new Date(`April ${easter_day}, ${easter_year}`);
            console.log("target_date="+target_date.toDateString());
          }
          else if(f>26){
            easter_day = f-26;
            console.log("target_date="+target_date.toDateString());
            target_date = new Date(`May ${easter_day}, ${easter_year}`);
            console.log("target_date="+target_date.toDateString());
          }
          let easter_month = target_date.toLocaleString('default', { month: 'long' });
          event_day.text(easter_day);
          event_month.text(easter_month);
        }
        
        let checkYear = function(date,target_date){
          if(date > target_date){
            easter_year++;
            HausAlgorithm(easter_year);
          }
        }
        
        HausAlgorithm(easter_year);
        checkYear(date,target_date);
        
        target_date = target_date.getTime();
        console.log("target_date="+target_date);
        
			// variables for time units
			var days, hours, minutes, seconds;

			var d = $('#day');
			var h = $('#hour');
			var m = $('#minute');
			var s = $('#second');

			setInterval(function ()
			{
			    // find the amount of "seconds" between now and target
			    var current_date = new Date().getTime();
			    var seconds_left = (target_date - current_date) / 1000;
			 
			    // do some time calculations
			    days = parseInt(seconds_left / 86400);
			    seconds_left = seconds_left % 86400;
			     
			    hours = parseInt(seconds_left / 3600);
			    seconds_left = seconds_left % 3600;
			     
			    minutes = parseInt(seconds_left / 60);
			    seconds = parseInt(seconds_left % 60);

			    // display result
			    d.text(days);
			    h.text(hours);
			    m.text(minutes);
			    s.text(seconds); 
			 
			}, 1000);
    	}	
	}
