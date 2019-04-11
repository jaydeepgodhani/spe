$(document).ready(function(){
    var x = document.getElementsByTagName("a")[0].getAttribute("id");
    var y = document.getElementsByTagName("a")[0].getAttribute("multiplier");
    var z = document.getElementsByTagName("a")[0].getAttribute("globalmul");
    var url1 = 'question.html?id='+x+'&multiplier='+y+'&glob='+z;
    $('#content').load(url1);
    
    $('a').click(function(){
        var name2 = $(this).attr('name');
        var id2 = $(this).attr('id');
        var multiplier2 = $(this).attr('multiplier');
        var glob2 = $(this).attr('globalmul');
        var url = name2 + '.html?id=' +id2+ '&multiplier=' +multiplier2+ '&glob=' +glob2 ;
        $('#content').load(url);
        return false;
    });
});