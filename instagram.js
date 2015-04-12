var accessToken = 'd14057649c304e0891fa6d897eb95a97';

$.ajax({
    url: 'https://api.instagram.com/v1/users/6740542/media/recent/?client_id=d14057649c304e0891fa6d897eb95a97&count=10',
    dataType: 'jsonp',
    type: 'GET',
    success: function(response){
        console.log(response);
			
        for(x in response.data){
					var innerHTML= '<li><img src="'+response.data[x].images.low_resolution.url+'">';
//					console.log(response.data[x].caption)
					if (response.data[x].caption === null) {
						innerHTML +='</li>'
						console.log('if was called');
						
					} else {
						innerHTML += '<p>'+response.data[x].caption.text+'</p></li>';
						console.log('else was called');
					} //ifelse statement
					$('#gallery').append(innerHTML);
				} //forloop ends
				
    }, //success function ends
    error: function(response){
        console.log(response);
    }
});


$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
           // ajax call get data from server and append to the div
			
			
    }
});



// +response.data[x].caption.text+
