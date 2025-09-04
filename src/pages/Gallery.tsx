import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
import rasm1 from "@/assets/gallery/rasm1.jpg";
import rasm2 from "@/assets/gallery/rasm2.jpg";
import rasm3 from "@/assets/gallery/rasm3.jpg";
import rasm4 from "@/assets/gallery/rasm4.jpg";
import rasm5 from "@/assets/gallery/rasm5.jpg";
import rasm6 from "@/assets/gallery/rasm6.jpg";
import rasm7 from "@/assets/gallery/rasm7.jpg";
import rasm8 from "@/assets/gallery/rasm8.jpg";
import rasm9 from "@/assets/gallery/rasm9.jpg";
import rasm10 from "@/assets/gallery/rasm10.jpg";
import rasm11 from "@/assets/gallery/rasm11.jpg";
import rasm12 from "@/assets/gallery/rasm12.jpg";
import rasm13 from "@/assets/gallery/rasm13.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
	rasm1, rasm2, rasm3, rasm4, rasm5, rasm6, rasm7, rasm8, rasm9, rasm10, rasm11, rasm12, rasm13
];

function Gallery() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const openLightbox = (idx) => {
		setCurrentIndex(idx);
		setLightboxOpen(true);
	};
	const closeLightbox = () => setLightboxOpen(false);
	const prevImage = (e) => {
		e.stopPropagation();
		setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
	};
	const nextImage = (e) => {
		e.stopPropagation();
		setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
	};

		return (
			<div className="min-h-screen bg-background pb-20 md:pb-0">
				<Navigation />
				<div className="container mx-auto py-12 px-4">
					<h2 className="text-4xl font-bold text-center mb-8">Galereya</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{galleryImages.map((img, idx) => (
							<div key={idx} className="rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={() => openLightbox(idx)}>
								<img src={img} alt={`Galereya rasm ${idx + 1}`} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
							</div>
						))}
					</div>

					{/* Lightbox Modal */}
					{lightboxOpen && (
						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeLightbox}>
							{/* Close Button */}
							<button
								className="absolute top-8 right-8 p-2 bg-gaming-dark/80 hover:bg-gaming-dark text-white rounded-full border border-border hover:border-primary transition-colors"
								onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
							>
								<X className="w-7 h-7" />
							</button>
							{/* Prev Button */}
							<button
								className="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-gaming-dark/80 hover:bg-gaming-dark text-white rounded-full border border-border hover:border-primary transition-colors"
								onClick={prevImage}
							>
								<ChevronLeft className="w-7 h-7" />
							</button>
							{/* Next Button */}
							<button
								className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-gaming-dark/80 hover:bg-gaming-dark text-white rounded-full border border-border hover:border-primary transition-colors"
								onClick={nextImage}
							>
								<ChevronRight className="w-7 h-7" />
							</button>
							{/* Image */}
							<img
								src={galleryImages[currentIndex]}
								alt={`Galereya rasm ${currentIndex + 1}`}
								className="max-w-3xl max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
								onClick={(e) => e.stopPropagation()}
							/>
						</div>
					)}
				</div>
				<Footer />
				<BottomNavigation />
			</div>
		);
}

export default Gallery;