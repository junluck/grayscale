class Item{
    constructor(picture,title,itemDetails,price){
        this._picture = picture;
        this._title = title;
        this._itemDetails = itemDetails;
        this._price = price;

    }

    get picture(){
        return this._picture
    }
    get title(){
        return this._title
    }
    get itemDetails(){
        return this._itemDetails
    }
    get price(){
        return this._price
    }



}

const inventory = {
    men:{
            tops:{
                    tShirts:[{picture:"assests/images/man/jackets/image1_0 (1).jpg",title:"Reglet Logo T-Shirt",itemDetails:"Show off your style with the Reglet Logo T-Shirt, made from soft and breathable 100% cotton for all-day comfort.",price:80},{picture:"assests/images/man/jackets/image1_0 (2).jpg",title:"Classic White button T-Shirt",itemDetails:"Elevate your wardrobe with this Classic White button T-Shirt, a timeless essential that combines comfort and versatility. ",price:80},{picture:"assests/images/man/jackets/tshirt black si 46df3fab-b51f-4deb-82a4-e5250b898976.png",title:"Classic Black T-Shirt",itemDetails:"The Classic Black T-Shirt is a must-have staple for any wardrobe. Crafted from soft, high-quality cotton, it offers a perfect blend of comfort and durability.",price:80},{picture:"assests/images/man/jackets/tshirt blue sin f2386d33-7069-4d78-ace0-8435e6b625d3.png",title:"Classic Blue T-Shirt",itemDetails:"Add a pop of color to your wardrobe with the Classic Blue T-Shirt. Made from soft and breathable cotton, this tee provides a comfortable fit that’s perfect for everyday wear. ",price:70}],
                    hoodies:[{picture:"assests/images/man/Hoodies/hoodie  with pa 04d34c7b-0357-4ede-b21e-fd7ce3e881df.png",title:"Patterned Hoodie",itemDetails:"Stay cozy and stylish with our Patterned Hoodie, designed for both comfort and flair. Made from a soft cotton blend, this hoodie features a unique all-over pattern that adds a bold statement to your look.",price:180},{picture:"assests/images/man/Hoodies/hoodie black si 4cfc8853-598d-4395-87b8-2d817cb98746.png",title:"Classic Black Hoodie",itemDetails:"Elevate your casual wear with the Classic Black Hoodie, a timeless piece that combines comfort and style. Made from a cozy cotton blend, this hoodie features a soft fleece interior to keep you warm on cooler days. ",price:190},{picture:"hoodie blue sin 3c6420ff-0748-4369-b82d-6d46eda7ba94.png",title:"Classic Blue Hoodie",itemDetails:"Refresh your wardrobe with the Classic Blue Hoodie, a comfortable and stylish essential for any season. Crafted from a soft cotton blend, this hoodie offers warmth and a cozy fit with its fleece-lined interior. ",price:200},{picture:"assests/images/man/Hoodies/hoodie green si e3db1fce-9ac0-4a18-9384-06d618ab5a24.png",title:"Classic Green Hoodie",itemDetails:"Bring a touch of nature to your wardrobe with the Classic Green Hoodie, perfect for effortless style and comfort. Made from a soft and durable cotton blend, this hoodie is designed to keep you cozy with its warm fleece lining.",price:180},{picture:"assests/images/man/Hoodies/hoodie white si 02ed7362-deb8-4c13-a921-5e34eb43f517.png",title:"Classic White Hoodie",itemDetails:"Sleek, simple, and effortlessly cool—the Classic White Hoodie is a wardrobe essential for any season. Crafted from a soft cotton blend with a cozy fleece interior, it offers warmth and comfort for everyday wear.",price:180}],
                    sweatshirts:[{picture:"assests/images/man/Hoodies/hoodie  with pa 04d34c7b-0357-4ede-b21e-fd7ce3e881df.png",title:"Patterned Hoodie",itemDetails:"Stay cozy and stylish with our Patterned Hoodie, designed for both comfort and flair. Made from a soft cotton blend, this hoodie features a unique all-over pattern that adds a bold statement to your look.",price:180},{picture:"assests/images/man/Hoodies/hoodie black si 4cfc8853-598d-4395-87b8-2d817cb98746.png",title:"Classic Black Hoodie",itemDetails:"Elevate your casual wear with the Classic Black Hoodie, a timeless piece that combines comfort and style. Made from a cozy cotton blend, this hoodie features a soft fleece interior to keep you warm on cooler days. ",price:190},{picture:"hoodie blue sin 3c6420ff-0748-4369-b82d-6d46eda7ba94.png",title:"Classic Blue Hoodie",itemDetails:"Refresh your wardrobe with the Classic Blue Hoodie, a comfortable and stylish essential for any season. Crafted from a soft cotton blend, this hoodie offers warmth and a cozy fit with its fleece-lined interior. ",price:200},{picture:"assests/images/man/Hoodies/hoodie green si e3db1fce-9ac0-4a18-9384-06d618ab5a24.png",title:"Classic Green Hoodie",itemDetails:"Bring a touch of nature to your wardrobe with the Classic Green Hoodie, perfect for effortless style and comfort. Made from a soft and durable cotton blend, this hoodie is designed to keep you cozy with its warm fleece lining.",price:180},{picture:"assests/images/man/Hoodies/hoodie white si 02ed7362-deb8-4c13-a921-5e34eb43f517.png",title:"Classic White Hoodie",itemDetails:"Sleek, simple, and effortlessly cool—the Classic White Hoodie is a wardrobe essential for any season. Crafted from a soft cotton blend with a cozy fleece interior, it offers warmth and comfort for everyday wear.",price:180}],
                    jackets:[{picture:"assests/images/man/jackets/one hoodie hang.png",title:"White Premium Hoodie",itemDetails:"A clean and versatile white premium hoodie, crafted for exceptional comfort and a sleek, minimalist style.",price:120},{picture:"assests/images/man/jackets/one all high.png",title:"GS LUX Leather Bomber",itemDetails:"A sophisticated GS LUX leather bomber jacket, blending timeless style with premium craftsmanship for a sleek, modern look.",price:320},{picture:"assests/images/man/jackets/Mask Group 2.png",title:"GS Force Leather Bomber",itemDetails:"The GS Force Leather Bomber is a high-performance jacket that blends a bold, military-inspired design with premium leather for a sleek, durable outerwear option.",price:320},{picture:"assests/images/man/jackets/black hoodie.png",title:"Premium Long Line Hoodie",itemDetails:"The Premium Long Line Hoodie offers a contemporary, elongated fit with a smooth, luxurious feel, perfect for casual wear with a modern edge.",price:140},{picture:"assests/images/man/jackets/one all grey fa.png",title:"Leather Lux Biker ",itemDetails:"The Leather Lux Biker jacket combines edgy biker aesthetics with premium leather craftsmanship for a sleek and timeless statement piece.",price:240},{picture:"assests/images/man/jackets/one all grey.png",title:"Faux Premium GS Jacket",itemDetails:"The Faux Premium GS Jacket delivers a sophisticated look with high-quality faux leather, blending style, comfort, and sustainability.",price:270}],
                    accessories:[]
                },
            bottoms:{
                shorts:[],
                jeans:[],
                dressPants:[],
                trackPants:[],
                shoes:[]

            }
        },
    women:{
            tops:{
                tShirtsTees:[],
                blouses:[],
                sweatersCardigans:[],
                Bodysuits:[],
                jackets:[],
                accessories:[]

            },
            bottoms:{
                jeans:[],
                pantsTrousers:[],
                shorts:[],
                skirts:[],
                shoes:[]
            }
          }
}

export default inventory