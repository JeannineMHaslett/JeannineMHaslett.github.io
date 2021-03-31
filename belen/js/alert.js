(function() {
    var isLoaded = false;
    var testWarning = document.location.href.indexOf('testWarning=1') !== -1;
    var loadWidget = function() {
        if (!isLoaded) {
            isLoaded = true;
            var url = 'https://cdnres.willyweather.com/widget/warning/dataView.html?id=134506';
            url = testWarning ? url + '&testWarning=1' : url;

            var div = document.createElement('alert');
                        
            div.innerHTML = '<div id="ww-widget-warning" style="position: fixed; top: 0; right: 0; left: 0; width: 100%; min-height: 42px; z-index: 2147483647; border: none; overflow: hidden;">' +
                                '<button id="ww-widget-warning-button" style="color: #fff !important; background: rgba(255, 255, 255, .3) !important;display: inline-block !important; position: absolute !important; top: 9px !important; right: 6px !important; width: 24px !important; height:24px !important; border: none !important; border-radius: 50% !important; cursor: pointer !important; box-sizing: border-box !important; font-size: 17px !important; font-weight: normal !important; padding: 2px 0px 4px !important; line-height: 1 !important; vertical-align: middle !important; user-select: none !important; text-align: center !important; z-index: 2147483647 !important; font-family: sans-serif !important;">&times;</button>' +
                                '<iframe src="' + url + '" style="position: absolute !important; top: 0 !important; bottom: 0 !important; right: 0 !important; left: 0!important; width: 100% !important; height: 100% !important; z-index: 2147483646 !important; border: none !important; margin: 0 !important; padding: 0 !important; min-width: auto !important;"></iframe>' +
                            '</div>';
            document.body.appendChild(div);

                                        /* Responsive */
                var wwResizeWidget = function() {
                    var widgetEl = document.getElementById('ww-widget-warning');
                    if(window.innerWidth <= 600) {
                        widgetEl.style.minHeight = '72px';
                    } else {
                        widgetEl.style.minHeight = '42px';
                    }
                };

                window.addEventListener('resize', wwResizeWidget, false);
                wwResizeWidget();
            
            /* close button */
            document.getElementById('ww-widget-warning-button').onclick = function() {
                var warningWidget = document.getElementById('ww-widget-warning');
                warningWidget.parentNode.removeChild(warningWidget);
                isLoaded = false;
            }
        }
    };

    if (0 > 0 || document.location.href.indexOf('testWarning=1') !== -1) {
        window.addEventListener('load', loadWidget, false);
    }

    var keyup = function(e) {
        if (e.altKey && e.ctrlKey && (e.keyCode === 84 || e.which === 84)) {
            testWarning = true;
            loadWidget();
        }
    }
    window.addEventListener('keyup', keyup, false);
})();