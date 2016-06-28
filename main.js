$.ajax({
  url:"http://ipinfo.io/json",
  success: function(resp, txt, xhr){
    console.log(resp);
    $("#location").html(resp.city+", "+resp.region)
    //df55727879c5e917aa1cd1b6959e24b5
    //sample request api.openweathermap.org/data/2.5/weather?zip=94040,us
    //api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=df55727879c5e917aa1cd1b6959e24b5
    //icon url: openweathermap.org/img/w/iconName.png
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather?zip="+resp.postal+ ",us&appid=df55727879c5e917aa1cd1b6959e24b5",
      success: function(resp, txt, xhr){
        console.log(resp);
        $("#temperature").html(resp.main.temp)
      }
    })

  }
})
