import Banner from './components/Banner';
import HouseList from './components/HouseList';
import Footer from './components/Footer';

export default async function Home() {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
      <Footer />
    </div>
  );
}
