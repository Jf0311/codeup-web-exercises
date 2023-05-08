
"use strict"

fetch('https://api.github.com/users/jf0311/events/public', {headers: {'Authorization': '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'}}) .then(response => response.json()).then(data => console.log(data));
