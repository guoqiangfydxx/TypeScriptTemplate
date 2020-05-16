// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = process.env.PUBLIC_URL + "/service-worker.js";
            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config);
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://bit.ly/CRA-PWA');
                });
            }
            else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log('New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.');
                        // Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        // Execute callback
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' }
    })
        .then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        var contentType = response.headers.get('content-type');
        if (response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZVdvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2VXb3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEO0FBQzNELHVDQUF1QztBQUV2Qyw4RUFBOEU7QUFDOUUsOEVBQThFO0FBQzlFLCtFQUErRTtBQUMvRSwyRUFBMkU7QUFDM0UsMkNBQTJDO0FBRTNDLDRFQUE0RTtBQUM1RSxzQ0FBc0M7QUFFdEMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUN6QixNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxXQUFXO0lBQ3RDLHVDQUF1QztJQUN2QyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxPQUFPO0lBQ3BDLGlEQUFpRDtJQUNqRCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQzVCLHdEQUF3RCxDQUN6RCxDQUNKLENBQUM7QUFPRixNQUFNLFVBQVUsUUFBUSxDQUFDLE1BQWU7SUFDdEMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTtRQUN6RSxvRUFBb0U7UUFDcEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUN0QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDckIsQ0FBQztRQUNGLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMvQyx1RUFBdUU7WUFDdkUseUVBQXlFO1lBQ3pFLDZFQUE2RTtZQUM3RSxPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzlCLElBQU0sS0FBSyxHQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSx1QkFBb0IsQ0FBQztZQUU1RCxJQUFJLFdBQVcsRUFBRTtnQkFDZixxRkFBcUY7Z0JBQ3JGLHVC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