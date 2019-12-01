$(".add-new").on('click', function () {
    $(".bill-data .bill-row .row").append(`<div class="col-md-4">
										<input type="text" placeholder="اسم الصنف" title="اسم الصنف">
									</div>
									<div class="col-md-4">
										<input type="text" placeholder="الكميه" title="الكميه">
									</div>
									<div class="col-md-4">
										<input type="text" placeholder="السعر" title="السعر">
									</div>`);
});