$(document).ready(function(){
    $('.booking').on('click',function(){
        var carname = $(this).parent().siblings().children('.name').text();
        var rate = $(this).parent().children().children().children('.ion-md-pricetags').siblings().text().split(', ');
        var dailyrate = rate[0].slice(1,rate[0].indexOf('/'));
        var weeklyrate = rate[1].slice(1,rate[1].indexOf('/'));
        var monthlyrate = rate[2].slice(1,rate[2].indexOf('/'));
        var car_data = {carname:carname,dailyrate:dailyrate,weeklyrate:weeklyrate ,monthlyrate:monthlyrate }
        sessionStorage.setItem('current_booking_cardata', JSON.stringify(car_data));
        window.location.replace("booking.html");

    })
});