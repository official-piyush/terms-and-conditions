const text = document.querySelector(`.text-container`);
const rule = text.querySelector(`.rule`);

const terms = document.querySelector(`.terms-element`);
const button = terms.querySelector(`button`);

const options = {
    root: terms,
    threshold: 1
};

const callback = function(entries, ruleObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return;
        button.disabled = false;
        ruleObserver.unobserve(entry.target);
    })
}

const ruleObserver = new IntersectionObserver(callback, options);

ruleObserver.observe(rule);