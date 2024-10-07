import BannerSlider from "@/components/ui/BannerSlider";
import BestProduct from "@/components/ui/BestProduct";
import BestSuggest from "@/components/ui/BestSuggest";
import CommentSlider from "@/components/ui/CommentSlider";
import LogoSlider from "@/components/ui/LogoSlider";
import NewProducts from "@/components/ui/NewProducts";
import NewsLetterForm from "@/components/ui/NewsLetterForm";
import Products from "@/components/ui/Products";
import Services from "@/components/ui/Services";
import Suggestion from "@/components/ui/Suggestion";

export default function Home() {
    return (
        <>
            <BannerSlider />
            <Services />
            <Products />
            <Suggestion />
            <NewsLetterForm />
            <NewProducts />
            <BestSuggest />
            <BestProduct />
            <CommentSlider />
            <LogoSlider />
        </>
    );
}
