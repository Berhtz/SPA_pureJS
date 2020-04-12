import View from '../view.js';

const resultsNode = documetn.querySelector('#results');
let friend = {};

export default {
    setData(newFriend) {
        friend = newFriend;
    },

    render() {
        resultsNode.innerHTML = View.render('friend', friend);
    }
}