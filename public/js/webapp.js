$(document).ready(function() {
    init();
});

function getNewsData() {
    return [
        {id: getRandomString(), title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Where’s the Love?', shortText: 'Why there are no hardtails in the Bible of Bike Tests',
            size: 4, image: "52A77841-2-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'DEITY: NEKO MULALLY', shortText: 'Mulally snags some liquid courage',
            size: 2, image: 'Screen-Shot-2016-01-13-at-7.17.36-AM-320x180.png', date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'COLD CASE', shortText: 'The country\'s first urban bike park seeks a second coming',
            size: 2, image: "BIKP-150600-PARK-06-300x169.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Trail', shortText: 'trail all mountain cross country womens all gear',
            size: 2, image: "sidebar-bible-img.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'PURE METAL', shortText: 'Durango Bike Company\'s newest model isn\'t carbon',
            size: 2, image: "ticker-15-300x169.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Where’s the Love?', shortText: 'Why there are no hardtails in the Bible of Bike Tests',
            size: 4, image: "52A77841-2-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Trail', shortText: 'trail all mountain cross country womens all gear',
            size: 2, image: "sidebar-bible-img.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'PURE METAL', shortText: 'Durango Bike Company\'s newest model isn\'t carbon',
            size: 2, image: "ticker-15-300x169.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Where’s the Love?', shortText: 'Why there are no hardtails in the Bible of Bike Tests',
            size: 4, image: "52A77841-2-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'DEITY: NEKO MULALLY', shortText: 'Mulally snags some liquid courage',
            size: 2, image: 'Screen-Shot-2016-01-13-at-7.17.36-AM-320x180.png', date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'COLD CASE', shortText: 'The country\'s first urban bike park seeks a second coming',
            size: 2, image: "BIKP-150600-PARK-06-300x169.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Trail', shortText: 'trail all mountain cross country womens all gear',
            size: 2, image: "sidebar-bible-img.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'PURE METAL', shortText: 'Durango Bike Company\'s newest model isn\'t carbon',
            size: 2, image: "ticker-15-300x169.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Where’s the Love?', shortText: 'Why there are no hardtails in the Bible of Bike Tests',
            size: 4, image: "52A77841-2-640x360.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'Trail', shortText: 'trail all mountain cross country womens all gear',
            size: 2, image: "sidebar-bible-img.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'PURE METAL', shortText: 'Durango Bike Company\'s newest model isn\'t carbon',
            size: 2, image: "ticker-15-300x169.jpg", date: 'Jan 01 2016'},
        {id: getRandomString(), title: 'REVIEW: ROCKY MOUNTAIN ALTITUDE 770 MSL', shortText: '‘Trail’ or ‘all-mountain’ is a matter of perspective',
            size: 4, image: "BIKP-160200-TRAIL-051-640x360.jpg", date: 'Jan 01 2016'}
    ];
}

function getCatalogData() {
    return [
        {title: 'Commencal', shortText: 'Commencal Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Cube', shortText: 'Cube Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Ghost', shortText: 'Ghost Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Kona', shortText: 'Kona Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'NS Bikes', shortText: 'NS Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Nukeproof', shortText: 'Nukeproof Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Turner', shortText: 'Turner Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Vitus Bikes', shortText: 'Vitus Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Diamondback', shortText: 'Diamondback bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Giant', shortText: 'Giant Bikes', size: 2, image: "52A77841-2-640x360.jpg"},
        {title: 'Ragley', shortText: 'Ragley Bikes', size: 2, image: "52A77841-2-640x360.jpg"}
    ];
}

function init() {
    var loginModule;
    iniHelpers();
    loginModule = initLoginPopup();
    initMenu(loginModule);
    initNewsGallery();
    initCatalog();
    initTraining();
    initBeginnersBlock();
    initAnimation();
    initLogin();
}

function initMenu(loginModule) {
    var menu = [
        {name: 'News', href: 'news', id: 'news'},
        {name: 'Catalog', href: 'catalog', id: 'catalog'},
        {name: 'Training', href: 'training', id: 'training'},
        {name: 'Beginners', href: 'beginners', id: 'beginners', children: [
            {name: 'GT', href: 'gt'},
            {name: 'Scott', href: 'Scott'},
            {name: 'Author', href: 'Author'},
            {name: 'Giant', href: 'Giant'}
        ]},
        {id: '_spacer_'},
        {name: 'Sign-in', id: 'signin'},
        {name: 'Sign-up', id: 'signup'},
        {name: 'Exit', id: 'exit'}
    ];
    var handler = Handlebars.compile(document.getElementById('htMenuL1Container').innerHTML);
    Handlebars.registerPartial( "htMenuL2", document.getElementById('htMenuL2').innerHTML);
    document.getElementById('menu').innerHTML += handler({menuItems: menu});
    initMenuEvents(menu, loginModule);
}

function initMenuEvents(menu, loginModule) {
    function isStandartMenu(id) {
        return ['signin', 'signup', 'exit', 'spacer'].indexOf(id) < 0;
    }
    function isLoginMenu(id) {
        return ['signin', 'signup', 'exit'].indexOf(id) > -1;
    }
    if (menu && menu.length) {
        menu.forEach(function(item) {
            var $loginBlock = $('#login');
            var $blocker = $('.blocker');
            var $signinBlock = $('.signin-tab', $loginBlock);
            var $signupBlock = $('.signup-tab', $loginBlock);
            var doc = document.querySelector('[data-id=' + item.id + ']');

            if (isStandartMenu(item.id)) {
                if (doc) {
                    doc.addEventListener('click', function (event) {
                        //TODO to refactoring
                        //not empty item
                        var emptyBlock;
                        var targetView = document.getElementById(item.id);
                        var parent;
                        var current = document.querySelector('.filled-page.active');
                        if (!current || current.id !== item.id) {
                            targetView.className += ' active';
                            $(current).addClass('hidden').removeClass('active');
                            //empty item
                            emptyBlock = document.querySelector('.switch-blank-pages>*:last-child');
                            parent = emptyBlock.parentNode;
                            parent.removeChild(emptyBlock);
                            parent.insertBefore(emptyBlock, parent.childNodes[0]);
                        }
                    })
                }
            } else if (isLoginMenu(item.id)) {
                doc.addEventListener('click', function (event) {
                    if (item.id === 'signin') {
                        loginModule.makeActiveSignin();
                    } else if (item.id === 'signup') {
                        loginModule.makeActiveSignup();
                    }
                });
            }
        });
    }
}

function initAnimation() {
    $('.filled-page').on("webkitTransitionEnd", function(event) {
        var parentNode;
        if ($(event.target).hasClass('filled-page')) {
            parentNode = this.parentNode;
            parentNode.removeChild(this);
            parentNode.appendChild(this);
            $(this).removeClass('hidden');
        }
    });
}

function initLoginPopup() {
    var api;
    var $tabs = $('#login .login-blank-page');
    var $blocker = $('.blocker');
    var $login = $('#login');
    var $signin = $('.signin-tab', $login);
    var $signup = $('.signup-tab', $login);
    var $step1 = $('.step1', $signup);
    var $step2 = $('.step2', $signup);
    var $body = $(document.body);
    function makeActive(target) {
        var parent;
        $blocker.addClass('visible');
        $login.addClass('visible');
        $body.addClass('blocker-active');
        $tabs.removeClass('active');
        $(target).addClass('active');
        parent = target.parentNode;
        parent.removeChild(target);
        parent.appendChild(target);
    }
    function next(){

    }
    $('.signin-tab .login-tab, .signup-tab .login-tab').on('click', function(event) {
        makeActive(this.parentNode);
    });
    $('#login .close-btn').on('click', function() {
        $blocker.removeClass('visible');
        $login.removeClass('visible');
        $body.removeClass('blocker-active');
    });
    $('#next').on('click', function(event) {
        $step1.removeClass('active');
        $step2.addClass('active');
    });

    api = {
        makeActiveSignin: function() {
            makeActive($signin.get(0));
            return api;
        },
        makeActiveSignup: function() {
            makeActive($signup.get(0));
            return api;
        },
        next: function() {

            return api;
        }

    };
    return api;
}

function initNewsGallery() {
    var newsGallHandler = Handlebars.compile(document.getElementById('htNewsGallery').innerHTML);
    var news = getNewsData();
    document.getElementById('news').innerHTML += newsGallHandler({relIndex: 1, news: news, subMenu: {
            name: 'News',
            menu: news
        }
    });
}

function initCatalog() {
    var newsGallHandler = Handlebars.compile(document.getElementById('htNewsGallery').innerHTML);
    var catalog = getCatalogData();
    document.getElementById('catalog').innerHTML += newsGallHandler({relIndex: 2, news: catalog, subMenu: {
        name: 'Catalog',
        menu: catalog
    }});
}

function initTraining() {
    var newsGallHandler = Handlebars.compile(document.getElementById('htNewsGallery').innerHTML);
    var news = getNewsData();
    document.getElementById('training').innerHTML += newsGallHandler({relIndex: 3, news: news, subMenu: {
        name: 'Training',
        menu: news
    }});
}

function initBeginnersBlock() {
    var newsGallHandler = Handlebars.compile(document.getElementById('htNewsGallery').innerHTML);
    var news = getNewsData();
    document.getElementById('beginners').innerHTML += newsGallHandler({relIndex: 4, news: news, subMenu: {
        name: 'Beginners',
        menu: news
    }});
}

function initLogin() {
    var $headers = $('.signin-header, .signup-header');
    var $signinTab = $('.signin-tab');
    var $signupTab = $('.signup-tab');
    $headers.on('click', function(event) {
        var $target = $(this);
        var $prevActive = $("#login .login-headers>.active");
        if (!$target.hasClass('active')) {
            $target.addClass('active');
            $prevActive.removeClass('active');
        }
        if ($target.hasClass('signin-header')) {
            $signinTab.addClass('active');
            $signupTab.removeClass('active');
        } else if ($target.hasClass('signup-header')) {
            $signupTab.addClass('active');
            $signinTab.removeClass('active');
        }
    });
}

function getRandomString() {
    return Math.random().toString(36).slice(2);
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

    Handlebars.registerHelper("menu", function(context) {
        var result = '';
        var spacer;
        var menuL1;
        var index = 0;
        var item;
        if (context && context.length) {
            spacer = Handlebars.compile(document.getElementById('htMenuSpacer').innerHTML);
            menuL1 = Handlebars.compile(document.getElementById('htMenuL1').innerHTML);
            for (;index < context.length;index++) {
                item = context[index];
                if (item.id === '_spacer_') {
                    result += spacer(item);
                } else {
                    //TODO
                    item.index = index + 1;
                    result += menuL1(item);
                }
            }
        }
        return result;
    });

    Handlebars.registerHelper("columnLoop", function(context, options) {
        var result = '';
        var mInd;
        var menuItem;
        var stepItem;
        var colNum = { 1: 8, 2: 4, 3: 2, 4: 2};
        var curSize;
        var stepInd;
        var compile = Handlebars.compile(document.getElementById('htNewsGalleryBigItemColumn').innerHTML);
        for (mInd = 0; mInd < context.length; mInd++) {
            menuItem = context[mInd];
            stepInd = mInd;
            if (curSize !== menuItem.size) {
                curSize = menuItem.size;
                for(;mInd < stepInd + colNum[curSize] && mInd < context.length;mInd++) {
                    stepItem = context[mInd];
                    if (stepItem.size !== curSize) {
                        break;
                    }
                }
                mInd--;
                curSize = null;
            }
            if (stepInd <= mInd) {
                result += compile({items: context.slice(stepInd, mInd + 1)});
            }
        }
        return result;
    });

    Handlebars.registerHelper("itemsColumn", function(context, options) {

    })
}