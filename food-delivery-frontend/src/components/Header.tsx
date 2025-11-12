const Header = () => {
    return ( 
        <div className="relative h-[500px] bg-black">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/header_img.png')",
                    opacity: '0.7'
                }}
            ></div>
            <div className="absolute max-w-6xl mx-auto p-4 md:p-8 z-10 bottom-8 left-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Order your favourite food here
                </h2>
                <p className="text-lg text-white mb-6 max-w-2xl">
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                    View Menu
                </button>
            </div>
        </div>
     );
}
 
export default Header;