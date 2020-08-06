import Link from 'next/link';
import Head from 'next/head';

function dismissibleBan({ Component, pageProps }) {
    return(
    <body>
        <Head>
        <script dangerouslySetInnerHTML={{ __html: 
            `
            (function(window){

                var Storage = function() {
            
                    function browserHasSupport() {
                        var testItem = 'localStorageTest';
                        if (window.localStorage) {
                            try {
                                window.localStorage.setItem(testItem, testItem);
                                window.localStorage.removeItem(testItem);
                                return true;
                            } catch(e) {
                                return false;
                            }
                        }
                    }
            
                    function deleteItem(item) {
                        return window.localStorage.removeItem(item);
                    }
            
                    function getItem(item) {
                        return window.localStorage.getItem(item);
                    }
            
                    function setItem(item, contents) {
                        return window.localStorage.setItem(item, contents);
                    }
            
                    return {
                        delete: deleteItem,
                        enabled: browserHasSupport,
                        get: getItem,
                        set: setItem
                    };
            
                };
            
                window.Storage = new Storage();
            
            })(window);
            
            ;(function(window, Storage){
            
                var storageEnabled = window.Storage.enabled();
            
                var dismissibleItem = function(el, type, id, value, expiry) {
            
                    var hasExpiry = (id && expiry) ? true : false,
                        html = '<span>' + value + ' <button type="button" class="close">X</button></span>';
            
                    if (hasExpiry && storageEnabled) {
                        var timestamp = window.Storage.get(id);
                        if (timestamp) {
                            if (expiry === 'forever') {
                                el.remove();
                                return;
                            } else {
                                var now = new Date(),
                                    diffInHours = Math.floor((now.getTime() - parseInt(timestamp)) / (1000 * 60 * 60));
                                if (diffInHours >= expiry) {
                                    window.Storage.delete(id);
                                } else {
                                    el.remove();
                                    return;
                                }
                            }
                        }
                    }
            
                    el.classList.add('dismissible', 'dismissible-' + type);
            
                    el.removeAttribute('data-component');
                    el.removeAttribute('data-expiry');
                    el.removeAttribute('data-id');
                    el.removeAttribute('data-type');
                    el.removeAttribute('data-value');
            
                    el.innerHTML = html;
            
                    function dismissBanner(event) {
                        var height = el.offsetHeight,
                            opacity = 1,
                            timeout = null;
            
                        if (hasExpiry && storageEnabled) {
                            window.Storage.set(id, new Date().getTime());
                        }
            
                        function reduceHeight() {
                            height -= 2;
                            el.setAttribute('style', 'height: ' + height + 'px; opacity: ' + opacity);
                            if (height <= 0) {
                                window.clearInterval(timeout)	;
                                timeout = null;
                                el.remove();
                            }
                        }
                        function fade() {
                            opacity -= .1;
                            el.setAttribute('style', 'opacity: ' + opacity);
                            if (opacity <= 0) {
                                window.clearInterval(timeout);
                                timeout = window.setInterval(reduceHeight, 1);
                            }
                        }
                        timeout = window.setInterval(fade, 25);
                    }
            
                    el.querySelector('.close').addEventListener('click', dismissBanner);
            
                };
            
                var dismissibles = Array.prototype.slice.call(document.querySelectorAll('[data-component="dismissible-item"]'));
                if (dismissibles.length) {
                    for (var i = 0; i < dismissibles.length; i++) {
                        var expiry = dismissibles[i].getAttribute('data-expiry'),
                            id = dismissibles[i].getAttribute('data-id'),
                            type = dismissibles[i].getAttribute('data-type'),
                            value = dismissibles[i].getAttribute('data-value');
                        new dismissibleItem(dismissibles[i], type, id, value, expiry);
                    }
                }
            
            })
            ` }} />

    </Head>

    <style>{`
        * {
            margin: 0;
            padding: 0;
        }
        
        html,
        body {
            background: #ddd;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: 400;
            -webkit-font-smoothing: antialiased;
            max-width: 440px;
            margin: 0 auto;
            overflow: hidden;
        }
        
        body {
            padding-top: 20px;
        }
        
        .dismissible {
            color: #222;
            font-size: 16px;
            line-height: 22px;
            position: relative;
            overflow: hidden;
        }
        
        .dismissible span {
            background: #fff;
            border: 2px solid rgba(0, 0, 0, .3);
            border-radius: 5px;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);
            box-sizing: border-box;
            display: block;
            margin: 0 auto 20px auto;
            padding: 10px;
            position: relative;
        
        }
        
        .dismissible button {
            background: rgba(0, 0, 0, .4);
            border: 0;
            border-radius: 100%;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            height: 24px;
            line-height: 20px;
            margin-top: -12px;
            right: 10px;
            position: absolute;
            top: 50%;
            width: 24px;
        }
        
        .dismissible button:focus {
            outline: none;
        }
        
        .dismissible-error span {
            background-color: #FF5252;
            border-color: #FF1744;
            color: #fff;
        }
        
        .dismissible-error button {
            background-color: #D50000;
            color: #FFCDD2;
        }
        
        .dismissible-info span {
            background-color: #64B5F6;
            border-color: #2196F3;
            color: #fff;
        }
        
        .dismissible-info button {
            background-color: #2196F3;
            color: #E3F2FD;
        }
        
        .dismissible-success span {
            background-color: #9CCC65;
            border-color: #7CB342;
            color: #fff;
        }
        
        .dismissible-success button {
            background-color: #7CB342;
            color: #DCEDC8;
        }
        
        .dismissible-warning span {
            background-color: #FFA726;
            border-color: #FB8C00;
            color: #fff;
        }
        
        .dismissible-warning button {
            background-color: #FB8C00;
            color: #FFE0B2;
        }
        `}</style>
     <div
            data-component="dismissible-item"
            data-expiry="168"
            data-id="welcome-banner"
            data-type="info"
            data-value="<strong>Welcome message</strong>"
	></div>
</body>
    )
}
export default dismissibleBan;


