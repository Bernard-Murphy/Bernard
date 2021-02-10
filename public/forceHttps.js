if (window.location.href.split(':')[0] === 'http'){
    window.location.href = 'https:' + window.location.href.split(':')[1];
}