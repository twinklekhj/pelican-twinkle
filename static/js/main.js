document.addEventListener('DOMContentLoaded', function () {
    const Content = {
        load: function () {
            this.event();
        },
        event: function () {
            const changeOffset = function () {
                Action.changeOffset(window.scrollY);
            }

            changeOffset();
            // Handler when the DOM is fully loaded
            window.addEventListener('scroll', changeOffset, {passive: true});

            this.action()
        },
        action: function () {
            for (let [i, e] of document.querySelectorAll('*[data-role="action"]').entries()) {
                e.addEventListener('click', function (event) {
                    const action = this.dataset.action;
                    if (action === 'theme') {
                        this.classList.add('animate')
                        Action.toggleTheme();
                    }
                    else if (action === 'hide'){
                        this.classList.toggle('hide');
                        if(this.classList.contains('hide')){
                            this.innerHTML = `Show posts`
                        } else {
                            this.innerHTML = `Hide posts`
                        }
                    }
                })
            }
        }
    }

    Content.load();
});