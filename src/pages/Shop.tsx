
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";

const products = [
  { name: "Hot dog", price: "17 000 so'm", image: "https://i.ytimg.com/vi/E5mxrNpQYTQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZ_sn1EAQHczou-boBASt9p-YrkA", desc: "Sosiska va sous bilan hot dog" },
  { name: "Dosharak", price: "15 000 so'm", image: "https://yukber.uz/image/cache/catalog/product/YK0514/sytyj-obed-700x700.jpg", desc: "Dosharak tez tayyorlanadigan lapsha" },
  { name: "Grenki", price: "8 000 so'm", image: "https://images.uzum.uz/cnsats72u18vf2j96780/original.jpg", desc: "Grenki qovurilgan non" },
  { name: "Xrusteam", price: "5 000 so'm", image: "https://images.uzum.uz/cv3d2fdpb7f9qcnflktg/t_product_540_high.jpg", desc: "Xrusteam qovurilgan non" },
  { name: "Adrenalin", price: "16 000 so'm", image: "https://menu.myqrcodemenu.com/files/products/7b38fb39-0206-4f7f-8594-ec4f7ad3ba22108debfa-cddf-4c27-bd7a-706ea0bf5268.jpg", desc: "adrenalin energetik ichimlik" },
  { name: "Pepsi (butulka)", price: "5 000 so'm", image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/24732478912951.5ccdd9ffe6db2.jpg", desc: "0.25 gr pepsi yaxna ichimligi" },
  { name: "PEPSI", price: "12 000 so'm", image: "https://images.uzum.uz/d1mvik89oh61u9a3pbqg/t_product_low.jpg", desc: "Pepsi 1L yaxna ichimlik" },
  { name: "COLA", price: "15 000 so'm", image: "https://cdn-kz3.foodpicasso.com/assets/2024/05/13/67ea6eacdd41b8495d0a8a95e0dbcb4e---png_1000x_103c0_convert.png", desc: "1.5L Coca cola yaxna ichimlik" },
  { name: "COLA", price: "18 000 so'm", image: "https://images.uzum.uz/cd8gafrb3ho5lmur0lf0/original.jpg", desc: "2L Coca Cola yaxna ichimligi" },
  { name: "MOXITO", price: "12 000 so'm", image: "https://images.uzum.uz/cr79pvmsbq7g1s9b708g/original.jpg", desc: "Salqin moxito ichimligi" },
  { name: "FLAVIS", price: "10 000 so'm", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkoVK-nYoT8kHQVhEDiALQ4TyjjeFRqtOxXzJogQ1OxHza4lez", desc: "Flavis har xil turdagi mevalar yaxna ichimligi" },
  { name: "JAGUAR", price: "12 000 so'm", image: "https://optim.tildacdn.com/tild3264-6465-4433-b265-623936336466/-/format/webp/Jaguar_Wild2021_1_12.png.webp", desc: "Jaguar energetik ichimligi" },
  { name: "ROCKSTAR", price: "12 000 so'm", image: "https://images.uzum.uz/cq772jssslotj05k0vs0/original.jpg", desc: "Rockstar energetik ichimligi" },
  { name: "FLESH", price: "12 000 so'm", image: "https://images.uzum.uz/cd8jngr5a95unf133vg0/original.jpg", desc: "Flesh energetik ichimligi" },
  { name: "Lays 70Gr", price: "12 000 so'm", image: "https://bozorcom.ams3.cdn.digitaloceanspaces.com/media/products/617104___1.jpg", desc: "Lays kartoshka chipslari 70gr" },
  { name: "Lays 140Gr", price: "18 000 so'm", image: "https://orzon.uz/upload/resize_cache/iblock/e78/600_600_1f086e50fe11d3debcf077fa5d26d9a88/e788be9cd0e886013b44566497d661c7.jpg", desc: "Lays kartoshka chipslari 140gr" },
  { name: "Lays 225Gr", price: "24 000 so'm", image: "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-04-29/CB8lvlHhnF9Uq1CNhVvKITUoDIbu06pPHnbzqm9BhiPI2qDC9x84JhVdSvaq.jpg", desc: "Lays kartoshka chipslari 225gr" },
  { name: "Snikers", price: "9 000 so'm", image: "https://babymarket.uz/wp-content/uploads/2020/05/snickers-shokoladnyj-batonchik_50-gr.jpg", desc: "Snikers shirin batonchik" },
  { name: "Snikers", price: "12 000 so'm", image: "https://goldniva.ru/upload/iblock/988/988255a3bb58ac491865b2cda1d543c8.jpg", desc: "Snikers katta batonchik" },
  { name: "Alyonka", price: "5 000 so'm", image: "https://olcha.uz/image/700x700/products/2023-01-17/shokoladnaya-plitka-alenka-molochnyy-s-fundukom-200g-190918-0.jpg", desc: "Alyonka shokoladi" },
  { name: "Alpengold", price: "15 000 so'm", image: "https://dostavo4ka.uz/upload-file/2021/05/05/4210/1df8d1ab-86e3-4254-8de5-dd80be0661c8.jpg", desc: "Alpengold shokoladi" },
  { name: "Bruni", price: "15 000 so'm", image: "https://images.uzum.uz/ciioldtenntd8rfcurm0/original.jpg", desc: "Bruni shokoladli batonchik" },
  { name: "Fanta Pepsi cola 0.5", price: "8 000 so'm", image: "https://images.uzum.uz/d1mvik89oh61u9a3pbqg/t_product_low.jpg", desc: "0.5L Fanta, Pepsi yoki Cola" },
];


function Shop() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navigation />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Do'kon</h2>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-[#181f2a] via-[#232b3a] to-[#181f2a] flex flex-col border border-[#232b3a]/60 hover:shadow-2xl transition-shadow duration-300"
              style={{ minHeight: 340 }}
            >
              {/* Image */}
              <div className="w-full aspect-square bg-[#232b3a] flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                    style={{ height: '100%' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-5xl bg-gray-200 rounded-t-2xl">
                    <span role="img" aria-label="no image">🖼️</span>
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="flex-1 flex flex-col justify-between px-5 py-4 bg-transparent">
                <div>
                  <div className="text-lg font-bold mb-1 text-white text-left">
                    {product.name}
                  </div>
                  {product.desc && (
                    <div className="text-sm text-gray-300 mb-2 text-left">
                      {product.desc}
                    </div>
                  )}
                </div>
                <div className="text-xl font-bold text-cyan-400 mt-2 text-left">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <BottomNavigation />
    </div>
  );
}

export default Shop;