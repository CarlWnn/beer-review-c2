
var beers_arr = [];
var counter = 1;

var addBeer = function (name, category, rate) {
   var newbeer = {
        beer_name: name,
        beer_cat: category,
        beer_rate: rate
    };
    beers_arr.push(newbeer);
}



var renderBeers = function () {
    $('li').remove();

    for(var i= 0; i< beers_arr.length; i++)
        $('.beers-list').append(
            '<li>' + beers_arr[i].beer_name 
            + ' , ' + beers_arr[i].beer_cat 
            + ' rate: ' + beers_arr[i].beer_rate + '</li>'
            );
}


var click_post = function () {
    name_input = $('.form-group .beer-input ').val();
    category_input = $('.form-group  .category-input').val();
    rate_input = $('#rate').val(); 
    addBeer(name_input, category_input, rate_input);
    renderBeers();

}

var click_sort = function () {
  
    if (counter % 2 == 1) {
        beers_arr.sort(asc_sort);
        renderBeers();
        counter++;
    } else {
        beers_arr.sort(desc_sort);
        renderBeers();
        counter++;
    }

}

var asc_sort = function (a, b) {
    return a.beer_rate - b.beer_rate;
}

var desc_sort = function (a, b) {
    return b.beer_rate - a.beer_rate;
}

$('.post-beer').click(click_post);
$('.sort-by-rate').click(click_sort);

