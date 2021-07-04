const headers$ = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const timeToUpdate = 3600000; // 1 hour
let cacheTimer = 0;

const getLocalCache = () => {
    const cache = window.localStorage.getItem('cache');
    if (cache) return cache;

    window.localStorage.setItem('cache', JSON.stringify({}));
    return window.localStorage.getItem('cache');
};

const getCacheTimer = () => {
    const now = new Date().getTime();
    if (cacheTimer < now + timeToUpdate) {
        cacheTimer = now + timeToUpdate;
    }

    return cacheTimer;
};

export default async function apiCall(method, url, data) {
    let parameters = { method: method.toUpperCase() };

    if (data) {
        parameters = {
            ...parameters,
            headers: headers$,
            body: JSON.stringify(data),
        };
    }

    const now = new Date().getTime();
    if (method.toLowerCase() === 'get') {
        const cache = await JSON.parse(getLocalCache());

        if (!cache[url] || (cache[url] && cache[url].cacheTimer < now)) {
            cache[url] = { data: await fetch(url, parameters) };
            cache[url].data = await cache[url].data.json();
            cache[url].cacheTimer = getCacheTimer();

            window.localStorage.setItem('cache', JSON.stringify(cache));
        }

        return cache[url].data;
    }

    const response = await fetch(url, parameters);

    if (response.status === 500) throw new Error('Error');
    return response.json();
}
