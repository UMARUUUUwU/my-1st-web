
    var Links = {
      setColor:function(color){
      var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color', color);
  }
}
    
  var body = {
    setColor:function(color){
      //document.querySelector('body').style.color= color;
      $('body').css('color', color);
    },
    setbackgroundColor : function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
    }
  }

    function nightdayhandler(self){
    var target=document.querySelector('body');
    if(self.value==='night'){ 
      body.setColor('white');
      body.setbackgroundColor('black');
      self.value='day';

      Links.setColor('white');
     
}else{
      body.setbackgroundColor('white');
      body.setColor('black');
      self.value='night';

      Links.setColor('black');
      
    }
    }