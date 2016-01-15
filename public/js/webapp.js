$(document).ready(function() {
    init();
});

function init() {
    iniHelpers();
    initMenu();
    initLoginPopup();
    initNewsGallery();
    initNewsBlock();
    initCatalogBlock();
    initFooterBlock();
}

function initMenu() {
    var menu = [
        {name: 'News', href: 'news'},
        {name: 'Catalog', href: 'catalog'},
        {name: 'Training', href: 'training'},
        {name: 'Beginners', href: 'beginners', children: [
            {name: 'GT', href: 'gt'},
            {name: 'Scott', href: 'Scott'},
            {name: 'Author', href: 'Author'},
            {name: 'Giant', href: 'Giant'}
        ]}
    ];
    var handler = Handlebars.compile(document.getElementById('htMenuL1').innerHTML);
    Handlebars.registerPartial( "htMenuL2", document.getElementById('htMenuL2').innerHTML);
    document.getElementById('menu').innerHTML += handler({menuItems: menu});
}

function initLoginPopup() {

}

function initNewsGallery() {
    var news = [
        {title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'},
        {title: 'DEITY: NEKO MULALLY', shortText: 'Mulally snags some liquid courage',
            size: 2, image: 'Screen-Shot-2016-01-13-at-7.17.36-AM-320x180.png', date: 'Jan 01 2016'},
        {title: 'COLD CASE', shortText: 'The country\'s first urban bike park seeks a second coming',
            size: 2, image: "BIKP-150600-PARK-06-300x169.jpg", date: 'Jan 01 2016'},
        {title: 'Trail', shortText: 'trail all mountain cross country womens all gear',
            size: 2, image: "sidebar-bible-img.jpg", date: 'Jan 01 2016'},
        {title: 'PURE METAL', shortText: 'Durango Bike Company\'s newest model isn\'t carbon',
            size: 2, image: "ticker-15-300x169.jpg", date: 'Jan 01 2016'},
        {title: 'Where’s the Love?', shortText: 'Why there are no hardtails in the Bible of Bike Tests',
            size: 4, image: "52A77841-2-640x360.jpg", date: 'Jan 01 2016'},
        {title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'},
        {title: 'Trail', shortText: 'trail all mountain cross country womens all gear',
            size: 2, image: "sidebar-bible-img.jpg", date: 'Jan 01 2016'},
        {title: 'PURE METAL', shortText: 'Durango Bike Company\'s newest model isn\'t carbon',
            size: 2, image: "ticker-15-300x169.jpg", date: 'Jan 01 2016'},
        {title: 'Where’s the Love?', shortText: 'Why there are no hardtails in the Bible of Bike Tests',
            size: 4, image: "52A77841-2-640x360.jpg", date: 'Jan 01 2016'},
        {title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'}
    ];
    var newsGallHandler = Handlebars.compile(document.getElementById('htNewsGallery').innerHTML);
    document.getElementById('news-gallery').innerHTML += newsGallHandler({news: news});
}

function initNewsBlock() {
    var news = [
        {title: 'Where’s the Love?', shortText: 'Why there are no hardtails in the Bible of Bike Tests',
            size: 6, image: "52A77841-2-640x360.jpg"
        },
        {title: 'COLD CASE', shortText: 'The country\'s first urban bike park seeks a second coming',
            size: 6, image: "BIKP-150600-PARK-06-300x169.jpg"
        },
        {title: 'Trail', shortText: 'trail all mountain cross country womens all gear',
            size: 6, image: "sidebar-bible-img.jpg"
        },
        {title: 'PURE METAL', shortText: 'Durango Bike Company\'s newest model isn\'t carbon',
            size: 6, image: "ticker-15-300x169.jpg"
        },
        {title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL',
            shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 6, image: "BIKP-160200-TRAIL-051-640x360.jpg"
        },
        {title: 'DEITY: NEKO MULALLY', shortText: 'Mulally snags some liquid courage',
            size: 7, image: 'Screen-Shot-2016-01-13-at-7.17.36-AM-320x180.png'
        }
    ];
    var newsHandler = Handlebars.compile(document.getElementById('htNews').innerHTML);
    document.getElementById('news').innerHTML += newsHandler({news: news});
}

function initCatalogBlock() {

}

function initFooterBlock() {

}

function iniHelpers() {
    Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);

        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
    });
}