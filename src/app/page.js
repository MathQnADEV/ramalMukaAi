import NavHeader from "@/app/components/NavHeader";
import Camera from "@/app/components/Camera";
import Footer from "@/app/components/Footer";


export default function Home() {
    return (
        <main className="bg-gray-950 min-h-screen py-8">
            <div className="max-w-4xl mx-auto space-y-8 px-4">
                <NavHeader />
                <Camera />
                <Footer />
            </div>
        </main>
    );
}
