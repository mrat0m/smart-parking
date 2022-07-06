import styled from 'styled-components';
import bg from './assets/bg.jpg';

const HomeContent =styled.div`
    /* background-color: white;  */
    /* bg white if there is bg image */
    padding: 20px;
    border-radius: 1rem;
`;

export const Home = () => {
    return (
        <HomeContent>
            <h2>Home page</h2>
            <div className="temp">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                <img src={bg} className="photo" alt="" />
                <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!</p>
                <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
            </div>
        </HomeContent>

    );
}

export default Home;