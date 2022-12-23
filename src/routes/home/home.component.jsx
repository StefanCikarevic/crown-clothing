import Directory from "../../componets/directory/directory.component";
import categories from "../../data/categories.json";

const Home = () => {
    return <Directory categories={categories}></Directory>;
}

export default Home;
