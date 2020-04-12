import Model from './model.js';

const newsNavNode = document.querySelector('[data-role=nav-news]');
const friendsNavNode = document.querySelector('[data-role=nav-friends]');

let activeNavNode;

export default {
    async friendRoute(params) {
        if (params.id) {
            const [friend] = await Model.getUser({user_ids: params.id, fields: 'photo_100, city, country, bdate'})
            console.log(friend);
        } else {
            const frineds = await Model.getFriends({fields: 'photo_100,bdate' });
            console.log(friends);
        }
    },
    async newsRoute() {
        const news = await Model.getNews({ filters: 'post', count: 28 });

        newsPage.setData(news.items);
        newsPage.render();
        
        setActiveNavNode(newsNavNode);
    }
};