var calc = function() {
	var cnt = new Array;
	var $num = new Array;
	var price = new Array;
	for(var i=0; i<5; i++) {
		cnt[i] = 0;
		$num[i] = $(".foods").eq(i).find("input");
		for(var j=0; j<$num[i].length; j++) {
			cnt[i] = parseInt(cnt[i]) + (parseInt($num[i].eq(j).val()) || 0);
		}
	}
	price[0] = ~~(cnt[0]/3)*130 + cnt[0]%3*45;
	price[1] = ~~(cnt[1]/6)*230 + cnt[1]%6*40;
	price[2] = cnt[2]*40;
	price[3] = $num[3].eq(0).val()*200 + $num[3].eq(1).val()*100 + $num[3].eq(2).val()*100;
	price[4] = cnt[4]*220;
	cnt_sum = 0;
	price_sum = 0;
	for(var i=0; i<5; i++) {
		$(".foods").eq(i).find("span.price").html(price[i]);
		$("#total tbody").find("tr").eq(i).children("td").eq(1).html(cnt[i]);
		$("#total tbody").find("tr").eq(i).children("td").eq(2).html(price[i]);
		cnt_sum += cnt[i];
		price_sum += price[i];
	}
	$("#total").find("tr:last-child td").eq(1).html(cnt_sum);
	$("#total").find("tr:last-child td").eq(2).html(price_sum);
}
$(function() {
	$(".foods input").change(function() {
		calc();
	});
	$("#clear-btn").click(function() {
		$("input").val("");
		calc();
	});
	calc();
});
